import { mockLocalStorage } from '@mocks';
import { fireEvent, render, screen } from 'Tests/CustomRender';

import Header, { changeClassBody } from '.';

describe('<Header />', () => {
	afterEach(() => {
		jest.clearAllMocks();

		mockLocalStorage.getItem.mockReturnValue('');
	});

	it('Testing render without theme in storage.', () => {
		render(<Header />);

		expect(mockLocalStorage.getItem).toBeCalled();

		expect(screen.getByTestId('header')).toBeInTheDocument();

		expect(screen.getByTestId('header-title')).toBeInTheDocument();
		expect(screen.getByTestId('header-title')).toHaveTextContent('TODO');

		expect(screen.getByTestId('header-icon-moon')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-sun')).not.toBeInTheDocument();
	});

	it('Testing render with lightMode in storage.', () => {
		mockLocalStorage.getItem.mockReturnValue('lightMode');

		render(<Header />);

		expect(mockLocalStorage.getItem).toBeCalled();

		expect(screen.getByTestId('header')).toBeInTheDocument();

		expect(screen.getByTestId('header-title')).toBeInTheDocument();
		expect(screen.getByTestId('header-title')).toHaveTextContent('TODO');

		expect(screen.getByTestId('header-icon-moon')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-sun')).not.toBeInTheDocument();
	});

	it('Testing render with darkMode in storage.', () => {
		mockLocalStorage.getItem.mockReturnValue('darkMode');

		render(<Header />);

		expect(mockLocalStorage.getItem).toBeCalled();

		expect(screen.getByTestId('header')).toBeInTheDocument();

		expect(screen.getByTestId('header-title')).toBeInTheDocument();
		expect(screen.getByTestId('header-title')).toHaveTextContent('TODO');

		expect(screen.getByTestId('header-icon-sun')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-moon')).not.toBeInTheDocument();
	});

	it('Testing change themes.', () => {
		render(<Header />);

		expect(screen.getByTestId('header-icon-moon')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-sun')).not.toBeInTheDocument();

		fireEvent.click(screen.getByTestId('header-icon-moon'));
		expect(mockLocalStorage.setItem).toBeCalledWith('theme', 'darkMode');

		expect(screen.getByTestId('header-icon-sun')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-moon')).not.toBeInTheDocument();

		fireEvent.click(screen.getByTestId('header-icon-sun'));
		expect(mockLocalStorage.setItem).toBeCalledWith('theme', 'lightMode');

		expect(screen.getByTestId('header-icon-moon')).toBeInTheDocument();
		expect(screen.queryByTestId('header-icon-sun')).not.toBeInTheDocument();
	});
});

describe('changeClassBody', () => {
	it('Testing change body className without param.', () => {
		changeClassBody();

		const body = document.querySelector('body')!;

		expect(body.classList.contains('lightMode')).toBeTruthy();
		expect(body.classList.contains('darkMode')).toBeFalsy();
	});

	it('Testing change body className by "lightMode".', () => {
		changeClassBody('lightMode');

		const body = document.querySelector('body')!;

		expect(body.classList.contains('lightMode')).toBeTruthy();
		expect(body.classList.contains('darkMode')).toBeFalsy();
	});

	it('Testing change body className by "darkMode".', () => {
		changeClassBody('darkMode');

		const body = document.querySelector('body')!;

		expect(body.classList.contains('darkMode')).toBeTruthy();
		expect(body.classList.contains('lightMode')).toBeFalsy();
	});
});
