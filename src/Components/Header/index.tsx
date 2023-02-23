import React from 'react';

import Icon from '../Icon';

import * as Styles from './index.styled';

const Header: React.FC<React.IDefaultProps> = () => {
	const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

	const hanldeToggleTheme = () => {
		const body = document.querySelector('body')!;
		const isDarkMode = body.classList.contains('darkMode');

		if (!isDarkMode) {
			body.classList.remove('lightMode');
			body.classList.add('darkMode');
		} else {
			body.classList.remove('darkMode');
			body.classList.add('lightMode');
		}

		setIsDarkMode((prevState) => !prevState);
	};

	React.useEffect(() => {
		const theme = window.localStorage.getItem('theme');

		setIsDarkMode(theme === 'darkMode');
		document.querySelector('body')?.classList.add(theme || 'lightMode');
	}, []);

	React.useEffect(() => {
		window.localStorage.setItem('theme', isDarkMode ? 'darkMode' : 'lightMode');
	}, [isDarkMode]);

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
