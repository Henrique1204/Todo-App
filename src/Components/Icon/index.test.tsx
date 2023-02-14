import React from 'react';

import { render, screen } from 'Tests/CustomRender';
import { loopingTesting } from 'Tests/utils';

import IconsList, { IconsListEnum } from 'Assets/icons';

import Icon from './index';

const AllIconsContainer: React.FC = () => {
	return (
		<>
			{(Object.keys(IconsList) as IconsListEnum[]).map((iconName) => (
				<Icon
					key={iconName}
					testId={`icon-container-${iconName}`}
					icon={iconName}
					size={32}
				/>
			))}
		</>
	);
};

describe('<Icon />', () => {
	it('Testing render.', () => {
		render(<Icon testId='test-icon' icon='github-icon' />);

		const iconElement = screen.getByTestId('test-icon');

		expect(iconElement).toBeInTheDocument();

		expect(iconElement).toHaveStyle(`
      width: 32px;
      height: 32px;
      color: currentColor;
    `);
	});

	it('Testing render icon with custom style.', () => {
		const mockSize = 16;
		const mockColor = '#F00';

		render(
			<Icon
				testId='test-icon'
				icon='github-icon'
				size={mockSize}
				color={mockColor}
			/>
		);

		const iconElement = screen.getByTestId('test-icon');

		expect(iconElement).toBeInTheDocument();

		expect(iconElement).toHaveStyle(`
      width: ${mockSize}px;
      height: ${mockSize}px;
      color: ${mockColor};
    `);
	});

	it('Testing render all icons.', () => {
		render(<AllIconsContainer />);

		loopingTesting(IconsList, (_, key) => {
			expect(screen.getByTestId(`icon-container-${key}`)).toBeInTheDocument();
			expect(screen.getByTestId(key)).toBeInTheDocument();
		});
	});
});
