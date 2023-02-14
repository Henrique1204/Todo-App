import { css } from "styled-components";

import * as Types from "Types/styled-components/mixins";

const mixins = {
  scrollbar: () => css`
    ::-webkit-scrollbar {
      width: 5px;
    }
    ::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }
    ::-webkit-scrollbar-thumb {
      background: #e1e1e1;
      border: 0px none transparent;
      border-radius: 8px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #d1d1d1;
    }
    ::-webkit-scrollbar-thumb:active {
      background: #d1d1d1;
    }
    ::-webkit-scrollbar-track {
      border: 0px none transparent;
      border-radius: 0px;
    }
    ::-webkit-scrollbar-track:hover {
      background: transparent;
    }
    ::-webkit-scrollbar-track:active {
      background: transparent;
    }
    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  `,
  circle: (size: string) => css`
    width: ${size};
    height: ${size};
    border-radius: 100%;
  `,
  backgroundImage: ({
    url,
    repeat = "no-repeat",
    position = "center",
    size = "cover",
  }: Types.IBackgroundImageProps) => css`
    background: ${`url('${url}') ${repeat} ${position}`};
    background-size: ${size};
  `,
  hover: ({
    transitionProp = "all",
    transitionTime = "0.3s",
    active = true,
    selector = "&",
    backgroundColor,
    borderColor,
    color,
    opacity,
    custom,
    fill,
  }: Types.IHoverProps) => {
    if (!active) return "";

    return css`
      ${selector} {
        transition: ${transitionProp} ${transitionTime} ease;
        cursor: pointer;
      }

      ${selector}:hover, ${selector}:active, ${selector}:focus {
        ${backgroundColor && `background-color: ${backgroundColor};`}
        ${borderColor && `border-color: ${borderColor};`}
        ${color && `color: ${color};`}
        ${opacity && `opacity: ${opacity};`}

        svg, svg * {
          ${fill && `fill: ${fill};`}
        }

        ${custom && custom}
      }
    `;
  },
};

export default mixins;
