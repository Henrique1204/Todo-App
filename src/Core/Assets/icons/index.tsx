import React from 'react';

import GithubIcon from './github';
import LinkedinIcon from './linkedin';
import NpmIcon from './npm';

const IconsList = {
	'github-icon': <GithubIcon testId='github-icon' />,
	'linkedin-icon': <LinkedinIcon testId='linkedin-icon' />,
	'npm-icon': <NpmIcon testId='npm-icon' />,
};

export type IconsListType = typeof IconsList;
export type IconsListEnum = keyof IconsListType;

export default IconsList;
