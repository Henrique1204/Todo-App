import { render, screen } from 'Tests/CustomRender';

import LoadingSpin from '.';

describe('<LoadingSpin />', () => {
	it('Testing show render.', () => {
		render(<LoadingSpin loading={true} testId='loading-test' />);

		expect(screen.getByTestId('loading-test')).toBeInTheDocument();
	});

	it('Testing no show render.', () => {
		render(<LoadingSpin loading={false} testId='loading-test' />);

		expect(screen.queryByTestId('loading-test')).not.toBeInTheDocument();
	});
});
