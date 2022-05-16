import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeNavigator from './homeNavigator';
import {createStackNavigator} from '@react-navigation/stack';
// import Container from '../components/common/container';
import {View, SafeAreaView, Text, Image} from 'react-native';
import Logo from '../assets/images/logo-header-blue.png';
import SideMenu from './sideMenu';
import {GlobalContext} from '../context/provider';
import Home from '../screens/home';
import Settings from '../screens/settings';
import Chapter1 from '../screens/chapters/chapter-1';
const getDrawerContent = (navigation, authDispatch, props) => {
  return (
    <SideMenu navigation={navigation} authDispatch={authDispatch} {...props} />
  );
};

const LogoTitle = () => {
  return <Image style={{width: 50, height: 50}} source={Logo} />;
};

// const Details = () => (
//   <View>
//     <Text>This is details page</Text>
//   </View>
// );
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
          backgroundColor: '#2D5182',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const Final = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Explorer" component={DrawerNavigator} />

      <Stack.Screen
        name="Chapter1"
        component={Chapter1}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};
export default Final;
