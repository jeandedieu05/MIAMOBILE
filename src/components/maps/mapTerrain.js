import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import DepartureImage from '../../assets/images/flag-blue.png';
export default function Map({mapLocation, mapMarkers, mapZoom}) {
  const [markers, setMarkers] = useState([]);
  var mapInstance;
  const SPACE = 0.01;
  const DEFAULT_PADDING = {top: 40, right: 40, bottom: 40, left: 40};

  const createMarker = (modifier = 1) => {
    return {
      latitude: mapLocation.latitude + SPACE * modifier,
      longitude: mapLocation.longitude - SPACE * modifier,
    };
  };

  const expandLocation = () => {
    // markers = markers.concat([
    //   createMarker(2),
    //   createMarker(3),
    //   createMarker(4),
    // ]);

    const arrayMarkers = [
      ...markers,
      createMarker(1),
      createMarker(2),
      createMarker(3),
      createMarker(4),
    ];
    setMarkers(arrayMarkers);
    mapInstance.fitToCoordinates([...arrayMarkers, mapLocation], {
      edgePadding: DEFAULT_PADDING,
      animated: true,
    });
  };
  return (
    <View style={styles.container}>
      <MapView
        ref={thismap => {
          mapInstance = thismap;
        }}
        liteMode
        style={styles.map}
        initialRegion={{
          latitude: mapLocation.latitude,
          longitude: mapLocation.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* <Marker
          coordinate={{
            latitude: mapLocation.lat,
            longitude: mapLocation.long,
          }}
          onPress={ExpandLocation}
        /> */}

        <Marker
          identifier="origin"
          coordinate={mapLocation}
          onPress={() => expandLocation()}
          // image={DepartureImage}
        />
        {markers.map((marker, i) => (
          <Marker key={i} identifier={`id${i}`} coordinate={marker} />
        ))}
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
