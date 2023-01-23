import React, {useEffect} from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import {StyleSheet, View} from 'react-native';

// Components
import StyledText from '../components/general/StyledText';
import CarControls from '../components/main/CarControls';
import SliderSpeed from '../components/main/SliderSpeed';
import SwitchTurnOn from '../components/main/SwitchTurnOn';

// Custom hooks
import {useBluetooth} from '../hooks/useBluetooth';

import {themeApp} from '../themes/themeApp';

import {RootStackParams} from '../navigator/Navigator';

interface Props extends StackScreenProps<RootStackParams, 'Main'> {}

export default function MainScreen(_: Props) {
  const {currentDevice, disconnectDevice} = useBluetooth();

  // NOTE: Set currentDevice to null when we exit this screen
  useEffect(() => {
    return () => {
      const disconnect = async () =>
        await disconnectDevice(currentDevice?.id || '');

      disconnect();
    };
  }, []);

  return (
    <View style={styles.container}>
      <StyledText style={styles.textDevice}>
        Dispositivo conectado: {currentDevice?.name}
      </StyledText>
      <SwitchTurnOn />
      <CarControls />
      <SliderSpeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: themeApp.padding.horizontal,
    paddingVertical: themeApp.padding.vertical,
  },
  textDevice: {
    paddingBottom: 15,
  },
});
