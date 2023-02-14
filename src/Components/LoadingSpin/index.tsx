import React from 'react';

import * as Styles from './index.styled';

interface ILoadingSpin extends React.IDefaultProps {
	loading: boolean;
}

const LoadingSpin: React.FC<ILoadingSpin> = ({
	testId = 'loading-spin',
	className = 'loading-spin',
	loading,
}) => {
	if (!loading) return <></>;

	return (
		<Styles.Container data-testid={testId} className={className}>
			<Styles.Spin data-testid={`${testId}-spin`} />
		</Styles.Container>
	);
};

export default LoadingSpin;
