export const reactRouterMock = {
	useNavigate: jest.fn(),
	params: {},
};

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: () => reactRouterMock.params,
	useNavigate: () => reactRouterMock.useNavigate,
	Outlet: () => 'Outlet',
}));
