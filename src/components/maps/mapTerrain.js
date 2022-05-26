import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
export default function map({mapLocation, mapMarkers, mapZoom}) {
  return (
    <View style={styles.container}>
      {/*Render our MapView*/}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLocation.lat,
          longitude: mapLocation.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <Marker
          key={mapLocation.description}
          coordinate={{
            latitude: mapLocation.lat,
            longitude: mapLocation.long,
          }}
        />
      </MapView>
    </View>
  );
}
//create our styling code:
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    minHeight: Dimensions.get('window').height,
  },
});
