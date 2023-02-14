import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	display: flex;
	justify-content: center;
	align-items: center;

	animation: darken-background 0.5s ease forwards;

	@keyframes darken-background {
		to {
			background-color: rgba(0, 0, 0, 0.15);
		}
	}
`;

export const Spin = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 50%;
	border: 3px solid ${({ theme }) => theme.palette.primary.main};
	border-right-color: transparent;
	background-color: transparent;

	animation: rotate-spin 0.5s ease infinite;

	@keyframes rotate-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(350deg);
		}
	}
`;
