// import {useNavigation} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useUI} from '../../hooks/useUI';
import {themeApp} from '../../themes/themeApp';
import StyledText from '../general/StyledText';

interface Props {
  name: string;
  id: string;
  connect: (id: string) => any;
}

const Separator = () => <View style={styles.separator} />;

export default function DeviceItem({name, id, connect}: Props) {
  const navigation = useNavigation();

  const {setLoading} = useUI();

  const handlePress = async () => {
    setLoading(true);

    const connected = await connect(id);

    if (connected) {
      navigation.navigate('Main', {id, name});
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        style={styles.wrapper}>
        <View style={styles.wrapperLeft}>
          <View style={styles.iconLeft}>
            <Icon name="bluetooth" size={20} />
          </View>
          <View>
            <StyledText>{name}</StyledText>
            <StyledText style={styles.id}>ID: {id}</StyledText>
          </View>
        </View>
        <View>
          <Icon name="cog" size={20} color="#587EC8" />
        </View>
      </TouchableOpacity>
      <Separator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapperLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconLeft: {
    borderRadius: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  id: {
    fontSize: themeApp.fontSizes.small,
    color: 'gray',
    paddingTop: 5,
  },

  separator: {
    flex: 1,
    borderTopWidth: 1,
    marginLeft: 50,
    marginTop: 10,
    borderColor: '#eceff1',
  },
});
