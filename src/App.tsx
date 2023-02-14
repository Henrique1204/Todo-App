import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'Assets/theme';

import Routes from './routes';

import { GlobalStyle } from './App.styled';

const App: React.FC = () => {
	return (
		<>
			<GlobalStyle />

			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</>
	);
};

export default App;
