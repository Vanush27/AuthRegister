import {ButtonProps} from '@rneui/base';
import {IGetComponentTheme} from '../interfaces/GetComponentTheme.interface';

export const getButtonTheme: IGetComponentTheme<Partial<ButtonProps>> = ({
  colors,
}) => ({
  buttonStyle: {
    backgroundColor: colors.yellow,
    paddingVertical: 4,
    borderRadius: 2,
  },
  containerStyle: {borderRadius: 2},
  titleStyle: {
    color: colors.primaryBlack,
    fontFamily: 'Inter_400Regular',
    fontSize: 16,
  },
});
