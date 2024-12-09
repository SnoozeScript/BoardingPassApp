
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import EventsScreen from '../screens/EventsScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="QRCode" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
