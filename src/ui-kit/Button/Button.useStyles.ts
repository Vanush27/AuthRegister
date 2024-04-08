import {useTheme} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export const containerStyles = StyleSheet.create({
  loading: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export function useStyles() {
  const {theme} = useTheme();

  const variantStyleSet = {
    default: StyleSheet.create({
      buttonStyle: {
        height: 22,
        maxHeight: 22,
        minHeight: 22,
      },
      titleStyle: {
        color: theme.colors.grey0,
      },
    }),
    small: StyleSheet.create({
      buttonStyle: {
        height: 32,
        maxHeight: 32,
        minHeight: 32,
      },
      titleStyle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 12,
      },
    }),
    medium: StyleSheet.create({
      buttonStyle: {
        height: 56,
        maxHeight: 56,
        minHeight: 56,
        borderRadius: 5,
      },
      titleStyle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
        fontWeight: '700',
      },
    }),
    large: StyleSheet.create({
      buttonStyle: {
        height: 60,
        maxHeight: 60,
        minHeight: 60,
      },
      titleStyle: {
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
      },
    }),
  };

  const typeStyleSet = {
    solid: StyleSheet.create({
      buttonStyle: {
        backgroundColor: theme.colors.yellow,
        borderWidth: 0.5,
        borderColor: '#CCC',
        fontSize: 14,
        fontFamily: 'Inter_700Bold',
        fontWeight: 500,
        paddingHorizontal: 12,
      },
      titleStyle: {
        color: theme.colors?.primaryBlack,
        fontFamily: 'Inter_400Regular',
        fontSize: 14,
        textTransform: 'uppercase',
      },
      disabledStyle: {
        borderColor: theme.colors?.primaryBlack,
      },
      disabledTitleStyle: {},
    }),
    outline: StyleSheet.create({
      buttonStyle: {
        backgroundColor: theme.colors?.white,
        borderColor: theme.colors?.primaryBlack,
        borderWidth: 1,
        paddingHorizontal: 12,
      },
      titleStyle: {
        color: theme.colors?.primaryBlack,
        fontFamily: 'Inter_400Regular',
        fontWeight: 'bold',
      },
      disabledStyle: {
        backgroundColor: theme.colors?.white,
        opacity: 0.5,
      },
      disabledTitleStyle: {
        color: theme.colors?.primaryBlack,
      },
    }),
    clear: StyleSheet.create({
      buttonStyle: {
        backgroundColor: 'transparent',
        borderBottomColor: theme.colors?.link,
        borderBottomWidth: 1,
        paddingBottom: 0,
        paddingHorizontal: 1,
        paddingVertical: 0,
      },
      titleStyle: {
        color: theme.colors?.link,
      },
      disabledStyle: {},
      disabledTitleStyle: {},
    }),
    transparent: StyleSheet.create({
      buttonStyle: {
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
        paddingVertical: 4,
      },
      titleStyle: {
        color: theme.colors?.primaryBlack,
      },
      disabledStyle: {
        backgroundColor: 'transparent',
      },
      disabledTitleStyle: {},
    }),
    blurred: StyleSheet.create({
      titleStyle: {
        color: theme.colors?.white,
      },
      buttonStyle: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
      },
      disabledStyle: {
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        borderColor: 'rgba(51, 51, 51, 0.5)',
      },
      disabledTitleStyle: {
        color: theme.colors?.white,
      },
    }),
    grey: StyleSheet.create({
      titleStyle: {
        color: theme.colors?.primaryBlack,
        fontFamily: 'Inter_400Regular',
        fontSize: 16,
      },
      buttonStyle: {
        backgroundColor: theme.colors?.paleGrey,
        borderColor: theme.colors?.paleGrey,
      },
      disabledStyle: {
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        borderColor: 'rgba(51, 51, 51, 0.5)',
      },
      disabledTitleStyle: {
        color: theme.colors?.white,
      },
    }),
  };

  const blockStyleSet = {
    fit: StyleSheet.create({
      buttonStyle: {},
    }),
    inline: StyleSheet.create({
      buttonStyle: {
        minWidth: 60,
        width: 60,
      },
    }),
  };

  const loadingColor = theme.colors?.platform;

  return {
    styleSets: variantStyleSet,
    blockStyleSet,
    typeStyleSet,
    theme,
    loadingColor,
  };
}
