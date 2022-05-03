import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Profile = () => {
  return (
    <View>
      <Text> Hello profile</Text>
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
const HomeNavigator = () => {
  const HomeStack = createStackNavigator();
  return (
    <HomeStack.Navigator initialRouteName="Profile">
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
