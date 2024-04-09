import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    label: {
      marginBottom: 4,
    },
  });

  return {styles, theme};
}
