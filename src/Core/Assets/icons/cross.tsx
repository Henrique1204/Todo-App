import React from 'react';

const CrossSvg: React.IComponent = ({
	testId = 'cross-svg',
	className = 'cross-svg',
}) => {
	return (
		<svg
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			data-testid={testId}
			className={className}
		>
			<path
				fill='currentColor'
				fill-rule='evenodd'
				d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
			/>
		</svg>
	);
};

export default CrossSvg;
