/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRoutes} from 'enums';
import {AppNavigator} from 'navigation';
import {NavigationContainer} from '@react-navigation/native';

console.disableYellowBox = true;

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator initialRouteName={AppRoutes.HOME} />
    </NavigationContainer>
  );
}
