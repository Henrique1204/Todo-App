import React from 'react';

const NpmSvg: React.IComponent = ({
	testId = 'npm-svg',
	className = 'npm-svg',
}) => {
	return (
		<svg
			viewBox='0 0 32 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			data-testid={testId}
			className={className}
		>
			<circle cx='16' cy='16' r='16' fill='currentColor' />

			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M8.22222 26C6.99492 26 6 25.0051 6 23.7778V8.22222C6 6.99492 6.99492 6 8.22222 6H23.7778C25.0051 6 26 6.99492 26 8.22222V23.7778C26 25.0051 25.0051 26 23.7778 26H8.22222ZM9.33333 22.6667V9.33333H22.6667V22.6667H19.3333V12.6667H16V22.6667H9.33333Z'
				fill='white'
			/>
		</svg>
	);
};

export default NpmSvg;
