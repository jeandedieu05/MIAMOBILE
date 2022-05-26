import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, Dimensions, View, ScrollView} from 'react-native';
//import {, MapView} from 'react-native-maps';

export default function mapTerrain({mapLocation, mapMarkers, mapZoom}) {
  const styles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue',
      position: 'relative',
    },
    mapStyle: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      minHeight: Dimensions.get('window').height,
    },
  });

  return (
    <View style={styles.containerStyle}>
      <MapView
        style={styles.mapStyle}
        //specify our coordinates.
        initialRegion={{
          latitude: mapLocation.lat,
          longitude: mapLocation.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {mapMarkers.map(mapMarker => (
          <Marker
            key={mapMarker.description}
            coordinate={{
              latitude: mapMarker.lat,
              longitude: mapMarker.long,
            }}
          />
        ))}
      </MapView>
    </View>
  );
}
