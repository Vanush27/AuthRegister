import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Profile, Home} from '@screens';

import ProfileIcon from 'react-native-vector-icons/FontAwesome';
import SearchIcon from 'react-native-vector-icons/FontAwesome';
import PhoneCallIcon from 'react-native-vector-icons/Feather';
import HomeIcon from 'react-native-vector-icons/AntDesign';
import {HomeNavigationRoutes} from '../../types/Navigation';
import {useTheme} from '@rneui/themed';

const homeIcon = (focused: boolean) => {
  return (
    <HomeIcon color={focused ? '#E37C07' : 'black'} name="home" size={24} />
  );
};

const searchIcon = (focused: boolean) => {
  return (
    <SearchIcon color={focused ? '#E37C07' : 'black'} name="search" size={24} />
  );
};

const phoneIcon = (focused: boolean) => {
  return (
    <PhoneCallIcon
      color={focused ? '#E37C07' : 'black'}
      name="phone-call"
      size={24}
    />
  );
};

const profileIcon = (focused: boolean) => {
  return (
    <ProfileIcon color={focused ? '#E68406' : 'black'} name="user" size={24} />
  );
};

const BottomTab = createBottomTabNavigator<HomeNavigationRoutes>();

const BottomNavigator = () => {
  const {theme} = useTheme();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colors.disabled,
          borderTopWidth: 0,
        },
      }}>
      <BottomTab.Screen
        component={Home}
        name="Home"
        options={() => ({
          tabBarIcon: ({focused}) => homeIcon(focused),
          title: 'Home',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
          backgroundColor: 'red',
        })}
      />

      {/* <BottomTab.Screen
        component={Catalog}
        name="Catalog"
        options={() => ({
          tabBarIcon: ({focused}) => searchIcon(focused),
          title: 'Catalog',
          headerShown: false,
          tabBarActiveTintColor: '#E68406',
        })}
      /> */}
      {/* <BottomTab.Screen
        component={CallCenter}
        name="CallCenter"
        options={() => ({
          tabBarIcon: ({focused}) => phoneIcon(focused),
          title: 'CallCenter',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      /> */}
      <BottomTab.Screen
        component={Profile}
        name="Profile"
        options={() => ({
          tabBarIcon: ({focused}) => profileIcon(focused),
          title: 'Profile',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigator;
