import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    header: {
      alignItems: 'center',
      marginBottom: 16,
    },
    passwordToggleWrap: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'flex-end',
      marginTop: -10,
    },
    passwordToggleText: {
      color: theme.colors?.grey4,
      fontSize: 16,
      marginRight: 8,
    },
    linkContainer: {
      alignItems: 'center',
      flexDirection: 'row',
    },
    textAccept: {
      fontFamily: 'Karla_400Regular',
      fontSize: 15,
    },
    textTermsAndCondition: {
      fontFamily: 'Karla_400Regular',
      fontSize: 16,
      marginBottom: 10,
      marginLeft: 1,
      textDecorationLine: 'underline',
    },
  });

  const placeholderIconColor = theme.colors?.grey1;
  const focusedIconColor = theme.colors?.grey4;

  return {styles, theme, focusedIconColor, placeholderIconColor};
}
