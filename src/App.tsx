import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'Assets/theme';

import Routes from './routes';

import { GlobalStyle } from './App.styled';

const App: React.FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<GlobalStyle />

				<Routes />
			</ThemeProvider>
		</>
	);
};

export default App;
