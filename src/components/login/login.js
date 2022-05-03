import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import Container from '../../components/common/container/index';
import Input from '../../components/common/inputs/index';
import Button from '../../components/common/button/button';
import Logo from '../../assets/images/logo-header-blue.png';
import {useNavigation} from '@react-navigation/native';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('hello');
  const {navigate} = useNavigation();
  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={Logo}
        style={tw`self-center mt-12 mb-4`}
      />
      <View>
        <Text style={tw`text-center text-lg font-sans font-bold text-black`}>
          WELCOME TO MIA
        </Text>
        <Text style={tw`text-center font-sans font-bold text-black my-1`}>
          Please login here
        </Text>
        <Input
          label="Username"
          value={username}
          onChangeText={text => setUsername(text)}
          placeholder="Enter Username"
          // error="This field is required"
        />
        <Input
          label="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
          placeholder="Enter Password"
          // error="This field is required"
        />
        <Button title="Submit" loading={true} disabled={false} />

        <View style={tw`flex flex-row mt-4`}>
          <Text style={tw``}>Need a new account ? </Text>
          <TouchableOpacity onPress={() => navigate('SignUp')}>
            <Text style={tw`text-blue-500 pl-2`}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
export default LoginComponent;
