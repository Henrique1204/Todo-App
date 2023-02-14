import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { LazyRoute } from 'Components';

const MyPages = {
	Home: React.lazy(() => import('./index')),
};

const HomeRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<LazyRoute>{<MyPages.Home />}</LazyRoute>} />
		</Routes>
	);
};

export default HomeRoutes;
