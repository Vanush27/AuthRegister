import React, {ReactNode, useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider as ReduxProvider} from 'react-redux';

import {getInitialSafeAreaMetrics} from './utils/getInitialSafeAreaMetrics';
import ThemeProvider from '../theme/ThemeProvider';
import {persist, store} from '@redux/store';
import SplashScreen from 'react-native-splash-screen';
import {useAsyncStorage} from '@hooks';
import {STORAGE_ITEMS} from '@constants';

function AppContextsProvider({children}: IAppContextsProviderProps) {
  const queryClient = new QueryClient();
  const {getItem, setItem} = useAsyncStorage();

  const getSplashscreenDelay = async () => {
    const delay = await getItem(STORAGE_ITEMS.SPLASH_SCREEN);
    if (delay === null) {
      setItem(STORAGE_ITEMS.SPLASH_SCREEN, 'true');
      setTimeout(() => {
        SplashScreen.hide();
      }, 3000);
    } else {
      SplashScreen.hide();
    }
  };

  useEffect(() => {
    getSplashscreenDelay();
  }, []);
  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <GestureHandlerRootView style={{flex: 1}}>
            <ReduxProvider store={store}>
              <PersistGate loading={null} persistor={persist}>
                <NavigationContainer>{children}</NavigationContainer>
              </PersistGate>
            </ReduxProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

interface IAppContextsProviderProps {
  children: ReactNode;
}

export default AppContextsProvider;
