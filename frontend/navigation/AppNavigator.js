import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import HomeScreen from '../components/HomeScreen';
import ControlScreen from '../components/ControlScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Control" component={ControlScreen} />
    </Stack.Navigator>
  );
}
