import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
// import Container from '../components/common/container';
import {View, SafeAreaView, Text, Image} from 'react-native';
import Logo from '../assets/images/logo-header-blue.png';
import SideMenu from './sideMenu';
import {GlobalContext} from '../context/provider';
const getDrawerContent = (navigation, authDispatch, props) => {
  return (
    <SideMenu navigation={navigation} authDispatch={authDispatch} {...props} />
  );
};

const Home = () => {
  return (
    <View>
      <Text> Road map to Heaven</Text>
    </View>
  );
};
const Settings = () => {
  return (
    <View>
      <Text> Hello settings</Text>
    </View>
  );
};

const LogoTitle = () => {
  return <Image style={{width: 50, height: 50}} source={Logo} />;
};
const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const {authDispatch} = useContext(GlobalContext);
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerContent={({navigation, props}) =>
        getDrawerContent(navigation, authDispatch, props)
      }
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#2596be',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      {/* <Drawer.Screen
        name="Home"
        component={HomeNavigator}
        screenOptions={{headerShown: false}}
      /> */}
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};
export default DrawerNavigator;
