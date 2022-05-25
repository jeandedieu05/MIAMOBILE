import React from 'react';
import MapView from 'react-native-maps';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

export default function mapTerrain() {
  const styles = StyleSheet.create({
    container: {
      height: 350,
      width: 350,
      backgroundColor: 'tomato',
    },
    map: {
      flex: 1,
      height: 350,
      width: 350,
    },
  });
  return (
    <MapView
      style={styles.map}
      //specify our coordinates.
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
