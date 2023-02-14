import React from 'react';

const CheckSvg: React.IComponent = ({
	testId = 'check-svg',
	className = 'check-svg',
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
				fill='none'
				stroke='currentColor'
				stroke-width='2'
				d='M1 4.304L3.696 7l6-6'
			/>
		</svg>
	);
};

export default CheckSvg;
