import {useSetStatusBar} from './useSetStatusBar';
import {ErrorFallback} from './ErrorFallback';

import React, {ReactNode, useCallback} from 'react';

import {ErrorBoundary} from 'react-error-boundary';

import {QueryErrorResetBoundary} from '@tanstack/react-query';

function ScreenWrapper({children, statusBarType}: IScreen) {
  useSetStatusBar(statusBarType);

  // useNavigationBar(navigationBar);

  const handleError = useCallback((error: Error) => error, []);
  return (
    <QueryErrorResetBoundary>
      {({reset}) => (
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onError={handleError}
          onReset={reset}>
          {children}
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
  statusBarType: TStatusBatType;
}

export default ScreenWrapper;
