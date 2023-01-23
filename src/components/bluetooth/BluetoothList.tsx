import React from 'react';
import {FlatList} from 'react-native';
import DeviceItem from './DeviceItem';
import Empty from './Empty';

import ToggleBluetooth from './ToggleBluetooth';
import Subtitle from './Subtitle';
import {useBluetooth} from '../../hooks/useBluetooth';
import LoadingModal from '../general/LoadingModal';

export default function BluetoothtList() {
  const {isEnable, devices, toggleActivateBluetooth, connectDevice} =
    useBluetooth();

  const renderEmpty = () => <Empty text="No hay dispositivos" />;
  const renderItem = ({item}: any) => (
    <DeviceItem name={item.name} id={item.id} connect={connectDevice} />
  );

  return (
    <>
      <ToggleBluetooth
        value={isEnable}
        onValueChange={toggleActivateBluetooth}
      />
      <Subtitle title="Lista de dispositivos" />
      <FlatList
        data={devices}
        ListEmptyComponent={renderEmpty}
        renderItem={renderItem}
      />
      <LoadingModal />
    </>
  );
}
