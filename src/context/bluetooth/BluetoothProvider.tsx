import React, {useReducer} from 'react';
import {BluetoothState} from '../../interfaces/bluetooth.interface';
import BluetoothContext from './BluetoothContext';
import {bluetoothReducer} from './bluetoothReducer';
import {Device} from '../../interfaces/bluetooth.interface';

const INITIAL_STATE: BluetoothState = {
  currentDevice: null,
  devices: [],
  isEnable: false,
};

interface Props {
  children: React.ReactNode;
}

export default function BluetoothProvider({children}: Props) {
  const [bltState, dispatch] = useReducer(bluetoothReducer, INITIAL_STATE);

  // Actions

  const setEnable = (enable: boolean) =>
    dispatch({type: 'setEnable', payload: enable});

  const setDevice = (device: Device) =>
    dispatch({type: 'setDevice', payload: device});

  const setListDevices = (devices: Device[]) =>
    dispatch({type: 'setListDevices', payload: devices});

  return (
    <BluetoothContext.Provider
      value={{
        bluetooth: bltState,
        actions: {setEnable, setDevice, setListDevices},
      }}>
      {children}
    </BluetoothContext.Provider>
  );
}
