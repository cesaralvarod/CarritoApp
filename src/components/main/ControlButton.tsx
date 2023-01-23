import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  icon: string;
}

export default function ControlButton({icon}: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <Icon name={icon} size={50} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
