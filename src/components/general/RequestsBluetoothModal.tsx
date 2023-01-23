import React, {useEffect, useState} from 'react';
import {
  Modal,
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {useBluetooth} from '../../hooks/useBluetooth';
import {themeApp} from '../../themes/themeApp';
import StyledText from './StyledText';

export default function RequestsBluetoothModal() {
  const [modalVisible, setModalVisible] = useState<boolean>(true);
  const {enableBluetooth, enable} = useBluetooth();

  const handleCloseModal = () => {
    enableBluetooth();
  };

  useEffect(() => {
    if (enable) {
      setModalVisible(false);
    } else {
      setModalVisible(true);
    }
  }, [enable]);

  return (
    <>
      <StatusBar
        backgroundColor={themeApp.statusBar.bg}
        barStyle="dark-content"
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.container}>
          <StyledText style={styles.title}>Bluetooth es requerido</StyledText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.button}
              onPress={handleCloseModal}>
              <StyledText>Conectar</StyledText>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#fc4',
    padding: 10,
  },
});
