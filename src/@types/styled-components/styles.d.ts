import { GreyColorsEnum } from "types/styled-components/themeEnum";

export type GlobalProps = "inherit" | "initial" | "unset";

export interface ITextProp {
  content: string;
  color?: GreyColorsEnum;
}

export type Justify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "stretch"
  | GlobalProps;

export type Align =
  | "flex-start"
  | "flex-end"
  | "center"
  | "stretch"
  | GlobalProps;

export type Wrap = "nowrap" | "wrap" | "wrap-reverse" | GlobalProps;

export type Gap = GlobalProps | string;

export type Flex = {
  justify?: Justify;
  align?: Align;
  wrap?: Wrap;
  gap?: Gap;
};
