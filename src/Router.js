// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Pages
import Login from 'pages/Login'
import Home from 'pages/Home'
import AddPost from 'pages/AddPost'
const Stack = createNativeStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="PostScreen" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;