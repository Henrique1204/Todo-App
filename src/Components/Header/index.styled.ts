import styled, { css } from 'styled-components';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	color: ${({ theme }) => theme.palette.primary.white};

	& > .icon {
		${({ theme }) =>
			theme.mixins.hover({
				transitionTime: '0.7s',
				custom: css`
					transform: rotate(360deg);
				`,
			})}
	}
`;

export const Title = styled.h1`
	font-family: 'Josefin Sans';
	font-weight: 700;
	font-size: 2.5rem;

	line-height: 2.5rem;
	letter-spacing: 15px;

	color: currentColor;

	${({ theme }) =>
		theme.screens.max(
			theme.breakpoints.mobile.maxWidth,
			css`
				font-size: 1.5rem;
				font-weight: 500;
			`
		)}
`;
