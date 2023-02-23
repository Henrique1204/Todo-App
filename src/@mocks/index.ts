export const mockMatchMedia = {
	writable: true,
	value: jest.fn().mockImplementation((query) => ({
		matches: false,
		media: query,
		onchange: null,
		addEventListener: jest.fn(),
		removeEventListener: jest.fn(),
		dispatchEvent: jest.fn(),
	})),
};

export const mockLocalStorage = {
	getItem: jest.fn(),
	setItem: jest.fn(),
	clear: jest.fn(),
	removeItem: jest.fn(),
};

Object.defineProperty(window, 'matchMedia', mockMatchMedia);

Object.defineProperty(window, 'localStorage', {
	value: mockLocalStorage,
});
