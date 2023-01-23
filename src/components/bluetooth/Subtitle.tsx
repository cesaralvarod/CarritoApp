import React from 'react';
import {StyleSheet, View} from 'react-native';
import {themeApp} from '../../themes/themeApp';
import StyledText from '../general/StyledText';

interface Props {
  title: string;
}

export default function Subtitle({title}: Props) {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>{title}</StyledText>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: themeApp.fontSizes.small,
    color: 'gray',
    fontWeight: 'bold',
  },
  line: {
    flex: 1,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginTop: 3,
    borderColor: '#eceff1',
  },
});
