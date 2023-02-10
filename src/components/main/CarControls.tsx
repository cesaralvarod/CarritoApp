import React from 'react';
import {StyleSheet, View} from 'react-native';

import ControlButton from './ControlButton';

interface Props {
  onChange: (value: string) => Promise<void> | any;
}

export default function CarControls({onChange}: Props) {
  return (
    <View style={styles.container}>
      {/* <ControlButton icon="arrow-up" /> */}
      <View style={styles.leftRight}>
        <ControlButton icon="arrow-left" onPress={() => onChange('l')} />
        <View style={styles.separator} />
        <ControlButton icon="arrow-right" onPress={() => onChange('r')} />
      </View>
      {/* <ControlButton icon="arrow-down" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  separator: {
    width: 120,
    height: 120,
  },
});
