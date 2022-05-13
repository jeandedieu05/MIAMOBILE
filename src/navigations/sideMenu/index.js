import {
  SafeAreaView,
  Text,
  Image,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import tw from 'twrnc';
import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {Avatar, Title} from 'react-native-paper';
import profileImage from '../../assets/images/blank-profile-picture.png';
import Container from '../../components/common/container';
import logoutUser from '../../context/actions/auth/logoutUser';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
export default function SideMenu({navigation, authDispatch}) {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout', 'Are you sure you want to logout', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Ok',
        onPress: () => {
          logoutUser()(authDispatch);
        },
      },
    ]);
  };
  const menuItems = [
    {
      icon: <Icon size={17} name="home" />,
      name: 'Home',
      onPress: () => {
        navigation.navigate('Home');
      },
    },
    {
      icon: <Icon size={17} name="settings" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate('Settings');
      },
    },
    {
      icon: <Icon size={17} name="logout" />,
      name: 'Logout',
      onPress: () => {
        handleLogout();
      },
    },
  ];

  return (
    <SafeAreaView>
      <Container>
        <View style={tw`flex-row mt-12 mb-4`}>
          <Avatar.Image size={48} source={profileImage} style={tw``} />
          <Text style={tw`pl-2 mt-3 text-black`}>John Chafi</Text>
        </View>

        <View style={tw`pl-2 pt-6 text-black`}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity
              key={name}
              style={tw`flex-row py-1`}
              onPress={onPress}>
              {icon}
              <Text style={tw`pl-2 text-black font-sans font-bold`}>
                {name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
}
