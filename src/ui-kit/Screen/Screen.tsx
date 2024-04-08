import {useSetStatusBar} from './useSetStatusBar';
import {ErrorFallback} from './ErrorFallback';
import type {ViewProps} from 'react-native';

import React, {
  ReactNode,
  cloneElement,
  isValidElement,
  useCallback,
  useLayoutEffect,
} from 'react';

import {ErrorBoundary} from 'react-error-boundary';

import {styles} from './Screen.styles';
import {useNavigation} from '@react-navigation/native';
import {QueryErrorResetBoundary} from '@tanstack/react-query';

const emptyProps = {}; // persisted object to avoid re-run useEffect within hooks.

function Screen({
  children,
  title,
  statusBarType,
  navigationBar = emptyProps,
  passScreenStyles = false,
}: IScreen) {
  useSetStatusBar(statusBarType);

  //   useNavigationBar(navigationBar);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    if (title) navigation.setOptions({title: toString(title)});
  }, [title]);

  const handleError = useCallback((error: Error) => error, []);
  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={handleError}
          onReset={reset}>
          {passScreenStyles && isValidElement(children)
            ? cloneElement(children, {
                style: styles.screen,
                contentContainerStyle: styles.screenContent,
              } as ViewProps)
            : children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export type TStatusBatType =
  | 'white'
  | 'darkGrey'
  | 'primaryDarkGray'
  | 'translucent';
export interface IScreen {
  children: ReactNode;
  title?: string;
  statusBarType: TStatusBatType;
  navigationBar?: INavigationBarProps;
  passScreenStyles?: boolean;
}

export default Screen;
