import React from 'react';

import IconsList, { IconsListEnum } from 'Assets/icons';

import * as Styles from './index.styled';

export interface IICon extends React.IDefaultProps, Styles.IContainerProps {
	icon: IconsListEnum;
}

const Icon: React.FC<IICon> = ({
	testId = 'icon',
	className = 'icon',
	icon,
	...props
}) => {
	return (
		<Styles.Container {...props} data-testid={testId} className={className}>
			{IconsList[icon]}
		</Styles.Container>
	);
};

export default Icon;
