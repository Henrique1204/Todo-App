import React from 'react';

import Icon from '../Icon';

import * as Styles from './index.styled';

type modeEnum = 'darkMode' | 'lightMode';

export const changeClassBody = (mode?: modeEnum) => {
	const body = document.querySelector('body')!;

	body.classList.remove(mode === 'darkMode' ? 'lightMode' : 'darkMode');
	body.classList.add(mode || 'lightMode');
};

const Header: React.FC<React.IDefaultProps> = ({ testId = 'header' }) => {
	const [isDarkMode, setIsDarkMode] = React.useState<boolean>(false);

	const hanldeToggleTheme = () => {
		changeClassBody(isDarkMode ? 'lightMode' : 'darkMode');

		window.localStorage.setItem('theme', isDarkMode ? 'lightMode' : 'darkMode');

		setIsDarkMode((prevState) => !prevState);
	};

	const iconName = isDarkMode ? 'sun' : 'moon';

	React.useEffect(() => {
		const mode = window.localStorage.getItem('theme') as modeEnum;

		setIsDarkMode(mode === 'darkMode');
		changeClassBody(mode);
	}, []);

	return (
		<Styles.Container data-testid={testId}>
			<Styles.Title data-testid={`${testId}-title`}>TODO</Styles.Title>

			<Icon
				testId={`${testId}-icon-${iconName}`}
				icon={iconName}
				size={26}
				onClick={hanldeToggleTheme}
			/>
		</Styles.Container>
	);
};

export default Header;
