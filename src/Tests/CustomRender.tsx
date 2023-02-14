import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { render, fireEvent, renderHook } from '@testing-library/react';

import theme from 'Assets/theme';

import HookStateControl from './HookStateControl';

const AllTheProviders: React.IComponent = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={children} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

const customRender = (ui: JSX.Element, options: any = {}) =>
	render(ui, { wrapper: AllTheProviders, ...options });

const customRenderHook = <T,>(cb: any, options: any = {}) => {
	const renderResult = renderHook<T, T>(cb, {
		wrapper: AllTheProviders,
		...options,
	});

	return new HookStateControl<T>(renderResult);
};

const fireClickEvent = (element: Element | Node | Document | Window) => {
	fireEvent(
		element,
		new MouseEvent('click', {
			bubbles: true,
			cancelable: true,
		})
	);
};

// re-export everything
export * from '@testing-library/react';

// override render method
export {
	customRender as render,
	customRenderHook as renderHook,
	fireClickEvent,
};
