import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    checkbox: {
      alignItems: 'center',
      borderColor: theme.colors?.black,
      borderRadius: 2,
      borderWidth: 1,
      justifyContent: 'center',
    },
    disabled: {
      backgroundColor: theme.colors?.disabled,
      borderColor: theme.colors?.black,
    },
    checkboxError: {
      backgroundColor: theme.colors?.disabled,
      borderColor: theme.colors?.error,
    },
  });

  const sizeStyleSet = StyleSheet.create({
    medium: {
      height: 26,
      width: 26,
    },
    small: {
      height: 21,
      width: 21,
    },
  });

  const checkMarkIconColor = theme.colors?.black;

  return {styles, sizeStyleSet, theme, checkMarkIconColor};
}
