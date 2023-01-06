import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from '../scenes/MainScreen';

const MainNavigation = createStackNavigator(
  {
    MainScreen: {
      screen: MainScreen,
    },
  },
  {
    initialRouteName: 'MainScreen',
    defaultNavigationOptions: {
      headerShown: false,
      headerTitle: null,
    },
  },
);

export default MainNavigation;
