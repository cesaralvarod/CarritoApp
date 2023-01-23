export type Device = {
  id: string;
  name: string;
} | null;

export interface BluetoothState {
  devices: Device[];
  currentDevice: Device;
  isEnable: boolean;
}

export interface BluetoothActions {
  setDevice: (device: Device) => void;
  setEnable: (enable: boolean) => void;
  setListDevices: (devices: Device[]) => void;
}
