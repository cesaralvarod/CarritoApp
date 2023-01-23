import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import BluetoothScreen from '../screens/BluetoothScreen';
import {themeApp} from '../themes/themeApp';
import MainScreen from '../screens/MainScreen';

export type RootStackParams = {
  Bluetooth: undefined;
  Main: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export default function Navigator() {
  return (
    <Stack.Navigator
      initialRouteName="Bluetooth"
      screenOptions={{
        headerShown: true,
        cardStyle: {backgroundColor: themeApp.colors.appBg},
        headerStyle: {
          elevation: 1,
          shadowColor: 'black',
        },
      }}>
      <Stack.Screen
        name="Bluetooth"
        options={{headerShown: false}}
        component={BluetoothScreen}
      />
      <Stack.Screen
        name="Main"
        options={{title: 'Carrito'}}
        component={MainScreen}
      />
    </Stack.Navigator>
  );
}
