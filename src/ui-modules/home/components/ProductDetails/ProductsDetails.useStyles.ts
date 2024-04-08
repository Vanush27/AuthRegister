import {StyleSheet} from 'react-native';
import {useTheme} from '@rneui/themed';

export function useStyles() {
  const {theme} = useTheme();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
      backgroundColor: theme.colors.background,
      borderRadius: 10,
      elevation: 8,
    },
    wrapper: {
      backgroundColor: 'rgba(0,0,0,0)',
      width: 100,
      height: 100,
      margin: 8,
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    price_wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    price: {
      fontSize: 16,
      fontWeight: '800',
      color: theme.colors.success,
      marginRight: 4,
    },
    category: {
      fontSize: 14,
      color: theme.colors.grey0,
      padding: 10,
    },
    description: {
      fontSize: 14,
    },
  });

  return {
    styles,
  };
}
