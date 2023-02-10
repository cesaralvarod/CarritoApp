import React, {useCallback, useEffect, useState} from 'react';
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
import {useNavigation} from '@react-navigation/native';

interface Props extends StackScreenProps<RootStackParams, 'Main'> {}

export default function MainScreen(_: Props) {
  const [deviceProps, setDeviceProps] = useState({
    on: false,
    direction: 'r',
  });
  const [speedState, setSpeed] = useState(0);
  const {currentDevice, disconnectDevice, sendData} = useBluetooth();

  const navigation = useNavigation();

  const handleToggleOn = useCallback(() => {
    if (!currentDevice) {
      return;
    }

    let msg = 'e';

    if (deviceProps.on) {
      msg = 'a';
    }

    sendData(currentDevice?.id, msg);
    setDeviceProps({...deviceProps, on: !deviceProps.on});
  }, [currentDevice, deviceProps, sendData]);

  const handleChangeSpeed = (speed: number) => {
    if (!currentDevice) return;

    const msgSpeed = String(speed / 20);

    setSpeed(speed);
    sendData(currentDevice?.id, msgSpeed);
  };

  const handleChangeDirection = (value: string) => {
    if (!currentDevice) return;

    setDeviceProps({...deviceProps, direction: value});
    sendData(currentDevice?.id, value);
  };

  useEffect(() => {
    return () => {
      const disconnect = async () => {
        await disconnectDevice(currentDevice?.id || '');
        navigation.navigate('Bluetooth' as never);
      };

      sendData(currentDevice?.id, '0'); // Turn off motor
      disconnect();
    };
  }, []);

  if (!currentDevice) return null;

  return (
    <View style={styles.container}>
      <StyledText style={styles.textDevice}>
        Dispositivo conectado: {currentDevice?.name}
      </StyledText>
      <SwitchTurnOn on={deviceProps.on} onChange={handleToggleOn} />
      {deviceProps.on && <CarControls onChange={handleChangeDirection} />}
      {deviceProps.on && (
        <SliderSpeed
          speed={speedState}
          step={20}
          onChangeSpeed={handleChangeSpeed}
        />
      )}
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
