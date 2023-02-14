module.exports = {
	preset: 'ts-jest',
	testPathIgnorePatterns: ['/node_modules/', '/.docz/'],
	transformIgnorePatterns: ['/*.png/'],
	setupFilesAfterEnv: ['<rootDir>/src/Tests/setupTests.ts'],
	transform: {
		'^.+\\.(ts|tsx)?$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
		'\\.svg': '<rootDir>/src/@mocks/svgMock.js',
	},
	testEnvironment: 'jsdom',
	globals: {
		'ts-jest': {
			tsconfig: 'jest.tsconfig.json',
		},
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'src/**/*.tsx',
		'!src/**/*.test.tsx',
		'!src/**/*styled.tsx',
		'!src/**/*styled.ts',
	],
	coverageReporters: ['lcov', 'json'],
	moduleNameMapper: {
		'^Mocks(.*)$': '<rootDir>/src/@mocks/$1',
		'^Types(.*)$': '<rootDir>/src/@types/$1',
		'^Components(.*)$': '<rootDir>/src/Components/$1',
		'^Contexts(.*)$': '<rootDir>/src/Contexts/$1',
		'^Core(.*)$': '<rootDir>/src/Core/$1',
		'^Assets(.*)$': '<rootDir>/src/Core/Assets/$1',
		'^Helpers(.*)$': '<rootDir>/src/Core/Helpers/$1',
		'^Services(.*)$': '<rootDir>/src/Core/Services/$1',
		'^Hooks(.*)$': '<rootDir>/src/Hooks/$1',
		'^Pages(.*)$': '<rootDir>/src/Pages/$1',
		'^Tests(.*)$': '<rootDir>/src/Tests/$1',
		'\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
	},
};
