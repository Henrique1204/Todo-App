import "styled-components";

import {
  BreakpointsValues,
  PaletteValues,
  ScreensMethods,
  MixinsValues,
} from "./themeEnum";

declare module "styled-components" {
  export interface DefaultTheme {
    palette: PaletteValues;
    breakpoints: BreakpointsValues;
    screens: ScreensMethods;
    mixins: MixinsValues;
  }
}
