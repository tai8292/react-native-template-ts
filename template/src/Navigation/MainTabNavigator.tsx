import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Welcome from '../Screens/Welcome';

export const BottomTab = createBottomTabNavigator();

const MainTabNavigator: React.FC = (): React.ReactElement => {
  return (
    <BottomTab.Navigator initialRouteName={'Home'}>
      <BottomTab.Screen component={Home} name={'Home'} />
      <BottomTab.Screen component={Welcome} name={'Welcome'} />
    </BottomTab.Navigator>
  );
};

export default MainTabNavigator;
