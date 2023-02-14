import { DefaultTheme } from 'styled-components';

import mixinsValues from './mixins';
import feedback from './feedbackColors';
import colors from './colors';

import * as Responsiveness from './responsiveness';

export { default as mixins } from './mixins';

export const primary = {
	main: '#3A7BFD',
	backgroundLinearPrimary: '#56DDFF',
	backgroundLinearSecondary: '#BF58F3',
};

export const lightMode = {
	veryLightest: '#F9F9F9',
	lightest: '#E3E4F1',
	light: '#D1D2DA',
	dark: '#9293A4',
	veryDark: '#484B6A',
};

export const darkMode = {
	lightest: '#E3E4F1',
	light: '#C9CCE7',
	dark: '#777992',
	veryDark: '#4C4F65',
	darker: '#39394B',
	darkest: '#24263C',
	veryDarkest: '#161721',
};

export const palette = {
	primary,
	feedback,
	colors,
	lightMode,
	darkMode,
};

export const breakpoints = {
	mobile: Responsiveness.mobile,
	tablet: Responsiveness.tablet,
	desktop: Responsiveness.desktop,
};

export const screens = {
	min: Responsiveness.min,
	max: Responsiveness.max,
	custom: Responsiveness.custom,
};

const theme: DefaultTheme = {
	palette,
	breakpoints,
	screens,
	mixins: mixinsValues,
};

export default theme;
