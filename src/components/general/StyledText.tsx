import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {themeApp} from '../../themes/themeApp';

interface Props {
  style?: {};
  children: React.ReactNode;
}

export default function StyledText({children, style}: Props) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: themeApp.colors.textColor,
    fontSize: themeApp.fontSizes.normal,
  },
});
