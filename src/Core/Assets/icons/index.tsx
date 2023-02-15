import React from 'react';

import CheckIcon from './check';
import CrossIcon from './cross';
import MoonIcon from './moon';
import SunIcon from './sun';

const IconsList = {
	check: <CheckIcon />,
	cross: <CrossIcon />,
	moon: <MoonIcon />,
	sun: <SunIcon />,
};

export type IconsListType = typeof IconsList;
export type IconsListEnum = keyof IconsListType;

export default IconsList;
