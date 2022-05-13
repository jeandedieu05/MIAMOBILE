import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, View} from 'react-native';

const Home = () => {
  return (
    <View>
      <Text> Hello stories</Text>
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
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Settings" component={Settings} />
    </HomeStack.Navigator>
  );
};
export default HomeNavigator;
