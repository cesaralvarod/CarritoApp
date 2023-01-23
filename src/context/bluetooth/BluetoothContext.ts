import {createContext} from 'react';
import {
  BluetoothActions,
  BluetoothState,
} from '../../interfaces/bluetooth.interface';

export type BluetoothContextProps = {
  bluetooth: BluetoothState;
  actions: BluetoothActions;
};

const BluetoothContext = createContext<BluetoothContextProps>(
  {} as BluetoothContextProps,
);

export default BluetoothContext;
