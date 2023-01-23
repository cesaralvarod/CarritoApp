import {useContext} from 'react';
import {Alert} from 'react-native';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import BluetoothContext from '../context/bluetooth/BluetoothContext';

export const useBluetooth = () => {
  const {bluetooth, actions} = useContext(BluetoothContext);
  const {devices, isEnable, currentDevice} = bluetooth;
  const {setEnable, setListDevices, setDevice} = actions;

  // NOTE: Ver como trabajar un arduino y como enviar informacion, se puede usar un BluetoothContext o sino se puede hacer una funcion en este hook para leer y enviar informacion al dispositivo conectado. Ver que manera funciona mejor.

  const enableBluetooth = async () => {
    try {
      const bluetoothEnabled = await BluetoothSerial.requestEnable();

      if (bluetoothEnabled) {
        setEnable(true);
      }

      return bluetoothEnabled;
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar habilitar el Bluetooth del dispositivo.',
      );
      console.log(error);
    }
  };

  const disableBluetooth = async () => {
    try {
      const bluetoothDisabled = await BluetoothSerial.disable();

      if (bluetoothDisabled) {
        await BluetoothSerial.stopScanning();
        setEnable(false);
        setListDevices([]);
      }

      return bluetoothDisabled;
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar deshabilitar el Bluetooth del dispositivo.',
      );
      console.log(error);
    }
  };

  const toggleActivateBluetooth = async () => {
    try {
      const statusBluetooth = await BluetoothSerial.isEnabled();

      if (!statusBluetooth) {
        await enableBluetooth();
        await getListDevices();
      } else {
        await disableBluetooth();
        setEnable(false);
      }
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar activar el Bluetooth del dispositivo.',
      );
      console.log(error);
    }
  };

  const isConnected = async (id: string) => {
    try {
      const myDevice = BluetoothSerial.device(id);

      if (!myDevice) {
        return;
      }

      const connected = await BluetoothSerial.isConnected(id);

      return connected;
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al verificar el estado de conexión del dispositivo.',
      );
      console.log(error);
    }
  };

  const getListDevices = async () => {
    try {
      const list = await BluetoothSerial.list();

      await BluetoothSerial.stopScanning();

      setListDevices(list);
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar obtener la lista de dispositivos Bluetooth.',
      );
      console.log(error);
    }
  };

  const connectDevice = async (id: string) => {
    try {
      const deviceConnected = await BluetoothSerial.connect(id);

      if (!deviceConnected) {
        Alert.alert('Error!', 'No se ha podido conectar al dispositivo');

        return false;
      }

      setDevice({id: deviceConnected.id, name: deviceConnected.name});

      Alert.alert('Excelente!', `Conexión a ${deviceConnected.name} con éxito`);

      return true;
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar conectar el dispositivo Bluetooth.',
      );
      console.log(error);
    }
  };

  const disconnectDevice = async (id: string) => {
    try {
      const deviceDisconnected = await BluetoothSerial.disconnect(id);

      if (!deviceDisconnected) {
        Alert.alert('Error!', 'No se ha podido desconectar el dispositvo');

        return false;
      }

      setDevice(null);

      Alert.alert('Excelente!', 'Se desconectó el dispositivo');

      return true;
    } catch (error) {
      Alert.alert(
        'Error!',
        'Ocurrió un error al intentar desconectar el dispositivo Bluetooth.',
      );
      console.log(error);
    }
  };

  const sendData = async (id: string) => {
    console.log(id);
  };

  return {
    isEnable,
    currentDevice,
    devices,
    enableBluetooth,
    disableBluetooth,
    toggleActivateBluetooth,
    isConnected,
    getListDevices,
    connectDevice,
    disconnectDevice,
    sendData,
  };
};
