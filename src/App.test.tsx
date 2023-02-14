import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

const MockContainer = () => <div></div>;

jest.mock('./routes', MockContainer);

describe('<App />', () => {
	it('Testing render App.', async () => {
		const { container } = render(<App />);

		expect(container).toBeInTheDocument();
	});
});
