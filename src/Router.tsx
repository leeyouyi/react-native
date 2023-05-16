/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './view/Home';
import Details from './view/Details';

export type RootStackParamList = {
  Home: undefined;
  Details: {
    itemId: string;
    otherParam: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function Router(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'My home',
          }}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
