import {InputProps} from '@rneui/themed';
import {IGetComponentTheme} from '../interfaces/GetComponentTheme.interface';

export const getInputTheme: IGetComponentTheme<Partial<InputProps>> = ({
  colors,
}) => ({
  inputStyle: {
    borderWidth: 0,
    fontFamily: 'Karla_400Regular',
    fontSize: 14,
    color: colors.primaryBlack,
  },
  inputContainerStyle: {
    borderWidth: 1,
    borderColor: colors.lightGrey,
    paddingHorizontal: 12,
    maxHeight: 42,
    height: 42,
  },
  containerStyle: {
    paddingHorizontal: 0,
    borderWidth: 0,
  },
  labelStyle: {
    fontFamily: 'Karla_400Regular',
    fontSize: 16,
    lineHeight: 21,
    color: colors.primaryBlack,
    marginBottom: 4,
    fontWeight: 'normal',
  },
  selectionColor: colors.lightGold,
  errorStyle: {
    margin: 0,
    marginVertical: 2,
    paddingHorizontal: 0,
    fontSize: 14,
    lineHeight: 14,
  },
  disableFullscreenUI: true,
  allowFontScaling: true,
  leftIconContainerStyle: {paddingRight: 8},
});
