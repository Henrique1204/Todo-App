import styled, { css } from 'styled-components';

import { ColorsEnum } from 'Types/styled-components/themeEnum';

export interface IContainerProps {
	size?: number;
	paletteColors?: ColorsEnum;
	color?: string;
}

export const Container = styled.div<IContainerProps>`
	${({ size, theme, paletteColors, color }) => {
		const customColor = paletteColors
			? theme.palette.colors[paletteColors].main
			: color;

		return css`
			width: ${size || 32}px;
			height: ${size || 32}px;
			overflow: hidden;

			color: ${customColor || 'currentColor'};
		`;
	}}
`;
