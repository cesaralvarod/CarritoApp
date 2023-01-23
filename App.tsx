import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigator from './src/navigator/Navigator';
import {themeApp} from './src/themes/themeApp';
import UIProvider from './src/context/ui/UIProvider';
import BluetoothProvider from './src/context/bluetooth/BluetoothProvider';

const Providers: React.FC<any> = ({children}: {children: React.ReactNode}) => (
  <BluetoothProvider>
    <UIProvider>
      <SafeAreaProvider>{children}</SafeAreaProvider>
    </UIProvider>
  </BluetoothProvider>
);

export default function App() {
  return (
    <Providers>
      <SafeAreaView style={styles.appTheme}>
        <StatusBar
          backgroundColor={themeApp.statusBar.bg}
          barStyle="dark-content"
        />
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </SafeAreaView>
    </Providers>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  appTheme: {
    flex: 1,
    backgroundColor: themeApp.colors.appBg,
  },
});
