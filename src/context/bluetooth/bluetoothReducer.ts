import {BluetoothState, Device} from '../../interfaces/bluetooth.interface';

export type BluetoothAction =
  | {type: 'setDevice'; payload: Device}
  | {type: 'setEnable'; payload: boolean}
  | {
      type: 'setListDevices';
      payload: Device[];
    };

export const bluetoothReducer = (
  state: BluetoothState,
  action: BluetoothAction,
) => {
  switch (action.type) {
    case 'setDevice':
      return {...state, currentDevice: action.payload};

    case 'setEnable':
      return {...state, isEnable: action.payload};

    case 'setListDevices':
      return {...state, devices: action.payload};

    default:
      return state;
  }
};
