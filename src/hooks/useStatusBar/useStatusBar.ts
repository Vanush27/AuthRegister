import {useEffect} from 'react';
import {useIsFocused} from '@react-navigation/native';
import type {StatusBarProps} from 'react-native';
import {Platform, StatusBar} from 'react-native';

const defaultProps: Required<StatusBarProps> = Object.freeze({
  hidden: false,
  translucent: false,
  backgroundColor: 'black',
  animated: true,
  showHideTransition: 'slide',
  networkActivityIndicatorVisible: true,
  barStyle: 'dark-content',
});

/** Handles styles and behavior of status bar. */
export function useStatusBar(statusBarProps: StatusBarProps) {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const props = {...defaultProps, ...statusBarProps};
      StatusBar.setHidden(props.hidden);
      StatusBar.setBarStyle(props.barStyle ?? 'default');

      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(props.backgroundColor);
        StatusBar.setTranslucent(props.translucent);
      }
    }
  }, [isFocused]);
}
