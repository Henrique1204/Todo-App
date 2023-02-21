import React from 'react';

import Icon from '../Icon';

import * as Styles from './index.styled';

const Header: React.FC<React.IDefaultProps> = () => {
	const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

	const hanldeToggleTheme = () => {
		const body = document.querySelector('body')!;

		setIsDarkMode(body.classList.toggle('darkMode'));
	};

	React.useEffect(() => {
		document.querySelector('body')?.classList.add('lightMode');
	}, []);

	return (
		<Styles.Container>
			<Styles.Title>TODO</Styles.Title>

			<Icon
				icon={isDarkMode ? 'sun' : 'moon'}
				size={26}
				onClick={hanldeToggleTheme}
			/>
		</Styles.Container>
	);
};

export default Header;
