import React from 'react';

import * as Styles from './index.styled';

const Home: React.FC = () => {
	React.useEffect(() => {
		document.querySelector('body')?.classList.add('lightMode');
	}, []);

	return <Styles.Container></Styles.Container>;
};

export default Home;
