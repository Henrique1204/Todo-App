import { createGlobalStyle, css } from 'styled-components';

import desktopDarkBg from './Core/Assets/images/bg-desktop-dark.jpg';
import mobileDarkBg from './Core/Assets/images/bg-mobile-dark.jpg';

import desktopLightBg from './Core/Assets/images/bg-desktop-light.jpg';
import mobileLightBg from './Core/Assets/images/bg-mobile-light.jpg';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: inherit;

    outline: none;
  }

  h1,
  h2,
  h3,
  h4 {
    line-height: 1.3;
  }

  p,
  a,
  ul,
  li,
  small,
  textarea {
    line-height: 1.5;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    max-width: 100%;
    display: block;
  }


  html, body, #root {
    width: 100%;
    height: 100vh;
    border: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  button, a {
    cursor: pointer;
  }

  body.lightMode {
    ${({
			theme: {
				palette: { lightMode },
				screens,
				breakpoints,
			},
		}) => css`
			background: ${`${lightMode.veryLightest} url('${desktopLightBg}') no-repeat`};
			background-size: 100% 300px;

			${screens.max(
				breakpoints.mobile.maxWidth,
				css`
					background: ${`${lightMode.veryLightest} url('${mobileLightBg}') no-repeat`};
					background-size: 100% 200px;
				`
			)}
		`}
  }

  body.darkMode {
    ${({
			theme: {
				palette: { darkMode },
				screens,
				breakpoints,
			},
		}) => css`
			background: ${`${darkMode.veryDarkest} url('${desktopDarkBg}') no-repeat`};
			background-size: 100% 300px;

			${screens.max(
				breakpoints.mobile.maxWidth,
				css`
					background: ${`${darkMode.veryDarkest} url('${mobileDarkBg}') no-repeat`};
					background-size: 100% 200px;
				`
			)}
		`}
  }
`;
