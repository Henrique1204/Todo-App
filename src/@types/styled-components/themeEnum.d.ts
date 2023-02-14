import * as Theme from 'Assets/theme';

export type TextColorsValues = typeof Theme.text;
export type TextColorsEnum = keyof TextColorsValues;

export type ColorsValues = typeof Theme.palette.colors;
export type ColorsEnum = keyof ColorsValues;

export type PrimaryColorsyValues = typeof Theme.primary;
export type PrimaryColorsEnum = keyof PrimaryColorsyValues;

export type SuccessColorsValues = typeof Theme.success;
export type SuccessColorsEnum = keyof SuccessColorsValues;

export type WarningColorsValues = typeof Theme.warning;
export type WarningColorsEnum = keyof WarningColorsValues;

export type DangerColorsValues = typeof Theme.danger;
export type DangerColorsEnum = keyof DangerColorsValues;

export type InfoColorsValues = typeof Theme.info;
export type InfoColorsEnum = keyof InfoColorsValues;

export type PaletteValues = typeof Theme.palette;
export type PaletteEnum = keyof PaletteValues;

export type MobileBreakValues = typeof Theme.mobile;
export type MobileBreakEnum = keyof MobileBreakValues;

export type TabletBreakValues = typeof Theme.tablet;
export type TabletBreakEnum = keyof TabletBreakValues;

export type DesktopBreakValues = typeof Theme.desktop;
export type DesktopBreakEnum = keyof DesktopBreakValues;

export type BreakpointsValues = typeof Theme.breakpoints;
export type BreakpointsEnum = keyof BreakpointsValues;

export type ScreensMethods = typeof Theme.screens;
export type ScreensMethodsEnum = keyof ScreensMethods;

export type MixinsValues = typeof Theme.mixins;
export type MixinsValuesEnum = keyof MixinsValues;
