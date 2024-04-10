import React, {useState} from 'react';
import {View} from 'react-native';

import MapView, {PROVIDER_DEFAULT, PROVIDER_GOOGLE} from 'react-native-maps';

const MapViews = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <MapView
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 40.1772,
          longitude: 44.50349,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default MapViews;
