import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appdrawer } from './src/navigation'
import { Loginscreen } from './src/screens'
const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="Loginscreen" component={Loginscreen} />
        <Stack.Screen name="Appdrawer" component={Appdrawer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
