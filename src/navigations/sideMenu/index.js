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
import Logo from '../../assets/images/logo-header-blue.png';
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
        <Image
          height={70}
          width={70}
          source={Logo}
          style={tw`self-center mt-12 mb-4`}
        />
        <View style={tw`px-18 pt-6`}>
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity key={name} style={tw`flex-row`} onPress={onPress}>
              {icon}
              <Text style={tw`pl-2`}>{name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </SafeAreaView>
  );
}
