import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Container from '../../components/common/container';
import tw from 'twrnc';
import image1 from '../../assets/images/project-image-00.jpg';
import Timeline from 'react-native-timeline-flatlist';
import MapView from 'react-native-maps';
import MapboxGL from '@rnmapbox/maps';
import Video from 'react-native-video';
import InView from '../../helpers/inView';
import MapTerrain from '../../components/maps/mapTerrain';
import Chapter1 from '../../components/chapters/chapter-1';

const NEXT_PUBLIC_MAPBOX_TOKEN =
  'pk.eyJ1IjoiZ3JlZ21jdyIsImEiOiJja3o5NTdnam0xcXNtMnZwNDI0M2tpYzkzIn0.Zuc52a4LvpFVe326i2YG8w';
MapboxGL.setAccessToken(NEXT_PUBLIC_MAPBOX_TOKEN);

const Story1 = () => {
  const [isInView, setIsInView] = useState(false);
  const [mapLocation, setMapLocation] = useState({
    lat: 45.4315564,
    long: -75.7773873,
  });
  const [mapMarkers, setMapMarkers] = useState([]);
  const [mapZoom, setMapZoom] = useState(4);

  const checkVisible = isVisible => {
    if (isVisible) {
      setIsInView(isVisible);
    } else {
      setIsInView(isVisible);
    }
  };
  // console.log(isInView);
  // const data = [
  //   {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
  //   {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
  //   {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
  //   {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
  //   {time: '16:30', title: 'Event 5', description: 'Event 5 Description'},
  // ];

  return (
    <SafeAreaView>
      <MapTerrain
        mapLocation={mapLocation}
        mapMarkers={mapMarkers}
        mapZoom={mapZoom}
        isInView={isInView}
      />
    </SafeAreaView>
  );
};
export default Story1;
