import React, {useState} from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import StyledText from '../general/StyledText';

export default function SwitchTurnOn() {
  const [turnOn, setTurnOn] = useState(false);

  const handleToggleTurnOn = () => setTurnOn(!turnOn);

  return (
    <View style={styles.container}>
      <StyledText>{turnOn ? 'Encendido' : 'Apagado'}</StyledText>
      <Switch value={turnOn} onValueChange={handleToggleTurnOn} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
