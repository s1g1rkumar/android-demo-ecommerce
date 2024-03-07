/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Favorites, Home, Product, Profile} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Index(): React.JSX.Element {
  const Tab = createBottomTabNavigator();

  const screenOptions = ({route}: any) => ({
    tabBarIcon: ({focused, color, size}: any) => {
      let iconName;
      if (route.name === 'Home') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Product') {
        iconName = focused ? 'bag' : 'bag-outline';
      } else if (route.name === 'Favorites') {
        iconName = focused ? 'heart' : 'heart-outline';
      } else if (route.name === 'More') {
        iconName = focused ? 'home' : 'home-outline';
      } else if (route.name === 'Profile') {
        iconName = focused ? 'person-circle' : 'person-circle-outline';
      } else {
        iconName = focused ? 'alert-circle' : 'alert-circle-outline';
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Catalog',
          headerShown: false,
        }}
        component={Home}
      />
      <Tab.Screen
        name="Product"
        options={{
          tabBarLabel: 'Product',
        }}
        component={Product}
      />
      <Tab.Screen
        name="Favorites"
        options={{
          tabBarLabel: 'Favorites',
        }}
        component={Favorites}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Index;
