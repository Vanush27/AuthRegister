import React from 'react';
import BottomNavigator from '../bottom-navigator/BottomNavigator';
import {OnBoardingScreen} from '@screens';
import {useLaunch} from '@hooks';
import {createStackNavigator} from '@react-navigation/stack';
import {MainNavigationRoutes} from '../../types/Navigation';

const Stack = createStackNavigator<MainNavigationRoutes>();

const AppNavigator = () => {
  const {isFirstLaunch} = useLaunch();

  return (
    <>
      {isFirstLaunch ? (
        <Stack.Navigator
          initialRouteName={'OnBoardingScreen'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="OnBoardingScreen"
            component={OnBoardingScreen}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName={'BottomNavigator'}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
        </Stack.Navigator>
      )}
    </>
  );
};

export default AppNavigator;
