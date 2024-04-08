import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container_board: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'red',
    },
    dot: {
      height: 6,
      marginHorizontal: 3,
      width: 6,
    },
    font_size: {
      fontSize: 16,
    },
    margin_horizontal: {
      marginHorizontal: 10,
    },
  });

  return {
    styles,
  };
}
