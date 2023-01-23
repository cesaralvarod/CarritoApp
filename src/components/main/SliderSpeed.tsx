import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider} from 'react-native-elements';
import StyledText from '../general/StyledText';

export default function SliderSpeed() {
  const [value, setValue] = useState(100);

  return (
    <View style={styles.container}>
      <Slider
        value={value}
        onValueChange={val => setValue(val)}
        maximumValue={100}
        minimumValue={0}
        step={10}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        animateTransitions={true}
      />
      <StyledText>Velocidad: {value}%</StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
  track: {
    height: 6,
  },
  thumb: {
    height: 30,
    width: 30,
    backgroundColor: '#fc4',
  },
});
