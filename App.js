import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './assets/files/mainScreen';
import HomeScreen from './assets/files/home';
import { SessionProvider } from './assets/files/session';
import { SettingsScreen, ShareScreen, AboutScreen } from './assets/files/system';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SessionProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={MainScreen} />
          <Stack.Screen name="Voting Panel" component={HomeScreen} />
          <Stack.Screen name="About" component={AboutScreen} />
          <Stack.Screen name="Share" component={ShareScreen} />
          <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
      </SessionProvider>
    </NavigationContainer>
  );
};

