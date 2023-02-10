import React from 'react';
import {StyleSheet, View, Switch} from 'react-native';
import StyledText from '../general/StyledText';

interface Props {
  on: boolean;
  onChange: () => Promise<void> | any;
}

export default function SwitchTurnOn({on, onChange}: Props) {
  return (
    <View style={styles.container}>
      <StyledText>{on ? 'Encendido' : 'Apagado'}</StyledText>
      <Switch value={on} onValueChange={onChange} />
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
