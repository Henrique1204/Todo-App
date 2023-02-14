import { FlattenSimpleInterpolation } from 'styled-components';

export const mobile = {
	minWidth: 0,
	maxWidth: 720,
};

export const tablet = {
	minWidth: 721,
	maxWidth: 1080,
};

export const desktop = {
	minWidth: 1081,
};

export const min = (min: number, data: FlattenSimpleInterpolation) => {
	return `@media only screen and (min-width: ${min}px) {${data}}`;
};

export const max = (max: number, data: FlattenSimpleInterpolation) => {
	return `@media only screen and (max-width: ${max}px) {${data}}`;
};

export const custom = (
	min: number,
	max: number,
	data: FlattenSimpleInterpolation
) => {
	return `@media only screen and (min-width: ${min}px and max-width: ${max}px) {${data}}`;
};
