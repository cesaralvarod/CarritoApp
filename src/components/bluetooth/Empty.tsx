import React from 'react';
import {StyleSheet} from 'react-native';
import StyledText from '../general/StyledText';

interface Props {
  text: string;
}

export default function Empty({text}: Props) {
  return <StyledText style={styles.text}>{text}</StyledText>;
}

const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
  },
});
