import React, {useEffect, useRef, useState} from 'react';
import {Image, View, Text, PermissionsAndroid, Platform} from 'react-native';

import MapView, {
  Circle,
  Marker,
  PROVIDER_DEFAULT,
  PROVIDER_GOOGLE,
  Polyline,
} from 'react-native-maps';
import {ImagesAssets} from '@assets/images/ImagesAssets';
import {Callout} from 'react-native-maps';

import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_MAPS_API_KEY} from '@constants';
import MapViewDirections from 'react-native-maps-directions';

import GetLocation from 'react-native-get-location';

const MapViews = () => {
  const origin = {latitude: 40.2818, longitude: 44.5103};
  const destination = {latitude: 40.1818, longitude: 44.5203};

  const mapRef = useRef(null);
  const [markerList, setMarkerList] = useState([
    {
      id: 1,
      latitude: 40.1818,
      longitude: 44.5103,
      title: 'iiii',
      description: 'Team 1 ',
    },
    {
      id: 2,
      latitude: 40.1818,
      longitude: 44.5203,
      title: 'l;l;l;;l;;l',
      description: 'Team 2 ',
    },
  ]);

  const MyCustomMarkerView = () => {
    return <Image source={ImagesAssets.taxi} style={{width: 50, height: 50}} />;
  };

  const MyCustomCalloutView = () => {
    return (
      <View>
        <Text>This is simple example </Text>
      </View>
    );
  };

  useEffect(() => {
    getLocation();
  }, []);

  const getCurrentLocation = () => {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log(location, 'My loca');
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };
  const getLocation = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Location Perm',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log('Camera permission denied');
        }
      } catch (er) {
        console.error(er);
      }
    }
  };

  const moveToLocation = async (lat, lan) => {
    await mapRef.current?.animateToRegion(
      {
        lat,
        lan,
        latitudeDelta: 0.015,
        longitudeDelta: 0.0121,
      },
      2000,
    );
  };
  return (
    <View style={{flex: 1}}>
      <View style={{zIndex: 1, flex: 0.5}}>
        <GooglePlacesAutocomplete
          fetchDetails
          placeholder="Search"
          onPress={(data, details) => {
            moveToLocation(
              details?.geometry.location.lat,
              details?.geometry.location.lng,
            );
            // console.log(data, details);
            // console.log(JSON.stringify(details?.geometry.location));
          }}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          onFail={error => console.error(error)}
        />
      </View>
      <MapView
        ref={mapRef}
        style={{width: '100%', height: '100%'}}
        provider={PROVIDER_DEFAULT}
        initialRegion={{
          latitude: 40.1772,
          longitude: 44.50349,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker coordinate={{latitude: 40.1898, longitude: 44.5209}}>
          <MyCustomMarkerView />

          <Callout style={{width: 200, backgroundColor: 'blue'}}>
            <MyCustomCalloutView />
          </Callout>
        </Marker>

        {markerList?.map(marker => {
          return (
            <View key={marker.id}>
              <Marker
                draggable
                coordinate={{
                  latitude: marker.latitude,
                  longitude: marker.longitude,
                }}
                title={marker.title}
                description={marker.description}
                onDragEnd={e => console.log({x: e.nativeEvent.coordinate})}
              />
            </View>
          );
        })}

        <Circle
          center={{
            latitude: 40.1822,
            longitude: 44.5113,
          }}
          radius={1000}
          fillColor="#cc3d"
          strokeColor="red"
          strokeWidth={2}
        />

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_API_KEY}
        />

        <Polyline coordinates={markerList} strokeWidth={1} />
      </MapView>
    </View>
  );
};

export default MapViews;
