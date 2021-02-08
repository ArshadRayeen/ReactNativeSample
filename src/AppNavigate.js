import React, {Component} from 'react';
import {YellowBox} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PostList from './screens/PostList';
import PostDetails from './screens/PostDetails';

YellowBox.ignoreWarnings(['Setting a timer']); 
const Stack = createStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Restaurants List" component={PostList} />
        <Stack.Screen name="Restaurants Details" component={PostDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Router;
