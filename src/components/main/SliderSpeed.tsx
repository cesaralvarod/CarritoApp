import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Slider} from 'react-native-elements';
import StyledText from '../general/StyledText';

interface Props {
  speed: number;
  maxSpeed?: number;
  minSpeed?: number;
  step?: number;
  onChangeSpeed: (value: number) => Promise<void> | any;
}

export default function SliderSpeed({
  speed,
  maxSpeed = 100,
  minSpeed = 0,
  step = 10,
  onChangeSpeed,
}: Props) {
  const handleChange = (value: number) => onChangeSpeed(value);

  return (
    <View style={styles.container}>
      <Slider
        value={speed}
        onValueChange={handleChange}
        maximumValue={maxSpeed}
        minimumValue={minSpeed}
        step={step}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        animateTransitions={true}
      />
      <StyledText>Velocidad: {speed / 20}</StyledText>
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
