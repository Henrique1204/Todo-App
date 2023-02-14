import { FlattenSimpleInterpolation } from "styled-components";

import { GlobalProps } from "./styles";

type Repeat =
  | "repeat"
  | "repeat-x"
  | "repeat-y"
  | "no-repeat"
  | "space"
  | "round"
  | GlobalProps;

type Position =
  | "left"
  | "top"
  | "right"
  | "bottom"
  | "center"
  | "left top"
  | "left center"
  | "left bottom"
  | "right top"
  | "right center"
  | "right bottom"
  | "center top"
  | "center center"
  | "center bottom";

export interface IBackgroundImageProps {
  url: string;
  repeat?: Repeat;
  size?: "cover" | "contain" | string;
  position?: Position;
}

export interface IHoverProps {
  active?: boolean;
  transitionProp?: string;
  transitionTime?: string;
  selector?: string;
  backgroundColor?: string;
  color?: string;
  fill?: string;
  borderColor?: string;
  opacity?: number;
  custom?: FlattenSimpleInterpolation;
}
