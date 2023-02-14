import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 1rem;

	& * {
		box-sizing: border-box;
		font-size: 14px;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: antialiased;
		margin: 0;
		padding: 0;
	}
`;
