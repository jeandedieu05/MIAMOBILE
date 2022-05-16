import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'twrnc';
import Container from '../../components/common/container';
import StoryImage1 from '../../assets/images/project-image-00.jpg';
import StoryImage2 from '../../assets/images/project-image-14.jpg';

const Home = props => {
  return (
    <SafeAreaView>
      <Container>
        <View style={tw`mb-4`}>
          <Text style={tw`text-black font-bold`}>PUBLISHED STORIES</Text>
        </View>
        <TouchableOpacity onPress={() => props.navigation.navigate('Chapter1')}>
          <View style={tw`mb-2`}>
            <Text style={tw`text-black font-bold`}>PROJECT-5402</Text>
          </View>
          <View style={tw`flex-row mr-6`}>
            <Image style={{width: 150, height: 120}} source={StoryImage1} />
            <Text style={tw`ml-2 mr-28 text-black`}>
              {' '}
              &quot;The next Google can’t just be an input box that spits out
              links. We need new thinking to create something much better than
              what came before.&quot;
            </Text>
          </View>
        </TouchableOpacity>
        <View style={tw`mt-4`}>
          <View style={tw`mb-2`}>
            <Text style={tw`text-black font-bold`}> ICELAND-5402</Text>
          </View>
          <View style={tw`flex-row mr-6`}>
            <Image style={{width: 150, height: 120}} source={StoryImage2} />
            <Text style={tw`ml-2 mr-28 text-black`}>
              {' '}
              &quot;The next Google can’t just be an input box that spits out
              links. We need new thinking to create something much better than
              what came before.&quot;
            </Text>
          </View>
        </View>
      </Container>
    </SafeAreaView>
  );
};
export default Home;
