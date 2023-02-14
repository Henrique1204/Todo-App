export interface IPaletteColorContract {
	dark: string;
	main: string;
	light: string;
}

const colors: { [key: string]: IPaletteColorContract } = {};

export default colors;
