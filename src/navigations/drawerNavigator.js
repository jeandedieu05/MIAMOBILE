import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
// import Container from '../components/common/container';
// import {View, SafeAreaView, Image} from 'react-native';
// import Logo from '../../assets/images/logo-header-blue.png';
import SideMenu from './sideMenu';
import {GlobalContext} from '../context/provider';

const getDrawerContent = (navigation, authDispatch) => {
  return <SideMenu navigation={navigation} authDispatch={authDispatch} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation}) =>
        getDrawerContent(navigation, authDispatch)
      }>
      <Drawer.Screen name="Home" component={HomeNavigator} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
