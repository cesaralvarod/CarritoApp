import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';

// Components
import BluetoothList from '../components/bluetooth/BluetoothList';
import StyledText from '../components/general/StyledText';

import {themeApp} from '../themes/themeApp';

import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'Bluetooth'> {}

export default function BluetoothScreen(_: Props) {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Bluetooth</StyledText>
      <BluetoothList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: themeApp.padding.vertical,
    paddingHorizontal: themeApp.padding.horizontal,
  },
  title: {
    fontSize: themeApp.fontSizes.large,
    fontWeight: '700',
    marginBottom: 20,
  },
});
