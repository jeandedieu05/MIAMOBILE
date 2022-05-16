import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Text, View} from 'react-native';

const Hello = () => {
  return (
    <View>
      <Text> Hello stories</Text>
    </View>
  );
};
const Set = () => {
  return (
    <View>
      <Text> Hello settings</Text>
    </View>
  );
};
const HomeNavigator = () => {
  // const HomeStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Hello" component={Hello} />
      <Drawer.Screen name="Set" component={Set} />
    </Drawer.Navigator>
  );
};
export default HomeNavigator;
