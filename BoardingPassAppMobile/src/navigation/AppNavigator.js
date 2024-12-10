import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignupScreen';
import EventsScreen from '../screens/EventsScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4f4f4',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Log In' }}
        />
        <Stack.Screen 
          name="Events" 
          component={EventsScreen} 
          options={{ 
            title: 'My Events',
            headerLeft: null // Prevents going back to login/signup
          }}
        />
        <Stack.Screen 
          name="QRCode" 
          component={QRCodeScreen} 
          options={{ title: 'QR Code Scanner' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}