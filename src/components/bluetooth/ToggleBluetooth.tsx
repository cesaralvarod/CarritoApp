import React from 'react';
import {StyleSheet, Switch, View} from 'react-native';
import StyledText from '../general/StyledText';

interface Props {
  value: boolean;
  onValueChange: () => void;
}

export default function ToggleBluetooth({value, onValueChange}: Props) {
  return (
    <View style={styles.container}>
      <StyledText>{value ? 'ON' : 'OFF'}</StyledText>
      <Switch onValueChange={onValueChange} value={value} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  switch: {
    padding: 0,
  },
});
