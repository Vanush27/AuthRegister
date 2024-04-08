import type {IThemeColors} from './ThemeColors.interface';

export interface IGetComponentTheme<T> {
  (props: {colors: IThemeColors}): T;
}
