import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

export const reactRouterMock = {
  useNavigate: jest.fn(),
  params: {},
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => reactRouterMock.params,
  useNavigate: () => reactRouterMock.useNavigate,
  Outlet: () => "Outlet",
}));
