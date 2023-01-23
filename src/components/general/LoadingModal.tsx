import React from 'react';
import {
  ActivityIndicator,
  Modal,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {useUI} from '../../hooks/useUI';
import StyledText from './StyledText';

interface Props {}

export default function LoadingModal(_: Props) {
  const {loading} = useUI();

  return (
    <>
      {loading && <StatusBar backgroundColor="rgba(0,0,0,.6)" />}

      <Modal animationType="fade" visible={loading} transparent>
        <View style={styles.container}>
          <ActivityIndicator />
          <StyledText style={styles.text}>Cargando...</StyledText>
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
    backgroundColor: 'rgba(0,0,0,.6)',
  },
  text: {
    color: 'rgba(255,255,255,.7)',
    paddingTop: 15,
  },
});
