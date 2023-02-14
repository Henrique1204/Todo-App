import React from 'react';

import LoadingSpin from '../LoadingSpin';

const Lazy: React.IComponent = ({ children }) => {
	return (
		<React.Suspense fallback={<LoadingSpin loading={true} />}>
			{children}
		</React.Suspense>
	);
};

export default Lazy;
