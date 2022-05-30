import {
  View,
  SafeAreaView,
  LogBox,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/common/container';
import tw from 'twrnc';
import MapView from 'react-native-maps';
import MapboxGL from '@rnmapbox/maps';
import MapTerrain from '../../components/maps/mapTerrain';
import RNLocation from 'react-native-location';

LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

RNLocation.configure({
  distanceFilter: 0,
  desiredAccuracy: {
    ios: 'best',
    android: 'highAccuracy',
  },
  androidProvider: 'auto',
});

const NEXT_PUBLIC_MAPBOX_TOKEN =
  'pk.eyJ1IjoiZ3JlZ21jdyIsImEiOiJja3o5NTdnam0xcXNtMnZwNDI0M2tpYzkzIn0.Zuc52a4LvpFVe326i2YG8w';
MapboxGL.setAccessToken(NEXT_PUBLIC_MAPBOX_TOKEN);

const Explorer = () => {
  const [isInView, setIsInView] = useState(false);
  const [isPermitted, setIspermitted] = useState(false);
  const [mapLocation, setMapLocation] = useState({
    lat: 45.4315564,
    long: -75.7773873,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mapMarkers, setMapMarkers] = useState([]);
  const [mapZoom, setMapZoom] = useState(4);

  useEffect(() => {
    const getPermission = async () => {
      // check the status of permission
      let permission = await RNLocation.checkPermission({
        ios: 'whenInUse',
        android: {
          detail: 'fine',
        },
      });
      // If permission is false we ask a user a permission else we get his current lcation
      if (!permission) {
        permission = await RNLocation.requestPermission({
          ios: 'whenInUse',
          android: {
            detail: 'fine',
            rationale: {
              title: 'We need to access your location',
              message: 'We use your location to show where you are on the map',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          },
        });

        console.log(permission);

        if (permission) {
          let location = await RNLocation.getLatestLocation({timeout: 6000});
          console.log(location);
          setMapLocation({lat: location.latitude, long: location.longitude});
          setIsLoading(true);
        }
      } else {
        //let location = await RNLocation.getLatestLocation({timeout: 6000});
        RNLocation.subscribeToLocationUpdates(locations => {
          console.log(locations);
          setMapLocation({
            lat: locations[0].latitude,
            long: locations[0].longitude,
          });
          setIsLoading(true);
        });
      }
    };

    getPermission().catch(err => console.log(err));
  }, []);
  console.log(mapLocation);
  return (
    <SafeAreaView>
      {isLoading ? (
        <MapTerrain
          mapLocation={mapLocation}
          mapMarkers={mapMarkers}
          mapZoom={mapZoom}
        />
      ) : (
        <ActivityIndicator size="large" color="#00ff00" />
      )}
    </SafeAreaView>
  );
};
export default Explorer;
