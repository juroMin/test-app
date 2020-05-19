import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AppRoutes} from 'enums';
import * as Screens from 'screens';
import {BottomNavigator} from '../BottomNavigator';

const Stack = createStackNavigator();

const AppNavigator = (props) => (
  <Stack.Navigator {...props} headerMode="none">
    <Stack.Screen name={AppRoutes.NEWS} component={Screens.NewsScreen} />
    <Stack.Screen
      name={AppRoutes.PRODUCTS}
      component={Screens.ProductsScreen}
    />
    <Stack.Screen name={AppRoutes.HOME} component={BottomNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;
