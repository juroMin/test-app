import React from 'react';
import {AppRoutes} from 'enums';
import * as Screens from 'screens';
import * as Assets from 'assets';
import {Image, View} from 'react-native';
import {TabBar} from 'components';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTabs = createBottomTabNavigator();

const Icon = (name, params) => (
  <View>
    <Image
      source={name}
      resizeMode="contain"
      tintColor={params.tintColor}
      style={[params.size, {tintColor: params.tintColor}]}
    />
  </View>
);

export const BottomNavigator = () => {
  return (
    <BottomTabs.Navigator tabBar={(props) => <TabBar {...props} />}>
      <BottomTabs.Screen
        name={AppRoutes.HOME}
        component={Screens.HomeScreen}
        options={{
          tabBarIcon: (params) => Icon(Assets.globeIcon, params),
        }}
      />
      <BottomTabs.Screen
        name={AppRoutes.NEWS}
        component={Screens.NewsScreen}
        options={{
          tabBarIcon: (params) => Icon(Assets.listIcon, params),
        }}
      />
      <BottomTabs.Screen
        name={AppRoutes.PRODUCTS}
        component={Screens.ProductsScreen}
        options={{
          tabBarIcon: (params) => Icon(Assets.coinsIcon, params),
        }}
      />
    </BottomTabs.Navigator>
  );
};
