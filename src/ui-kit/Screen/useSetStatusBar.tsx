import {useMemo} from 'react';

import type {StatusBarProps} from 'react-native';
import type {TStatusBatType} from './ScreenWrapper';
import {useTheme} from '@rneui/themed';
import {useStatusBar} from '@hooks';

export const useSetStatusBar = (statusBarType: TStatusBatType) => {
  const {theme} = useTheme();

  const statusBar: StatusBarProps = useMemo<StatusBarProps>(
    function pickUpStatusBarProps() {
      switch (statusBarType) {
        case 'white':
          return {
            backgroundColor: theme.colors?.white,
            barStyle: 'dark-content',
          };
        case 'primaryDarkGray':
          return {
            backgroundColor: theme.colors?.success,
            barStyle: 'dark-content',
          };
        case 'translucent':
          return {translucent: true};
        case 'darkGrey':
        default:
          return {
            backgroundColor: theme.colors?.disabled,
            barStyle: 'light-content',
          };
      }
    },
    [statusBarType],
  );

  useStatusBar(statusBar);
};
