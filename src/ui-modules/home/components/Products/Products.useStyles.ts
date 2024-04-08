import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';
import {size} from '@assets/fonts/size';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.grey3,
    },
    title: {
      width: '100%',
      fontSize: size.typography_24,
      margin: 15,
    },
  });

  return {
    styles,
  };
}
