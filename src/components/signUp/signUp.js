import React, {useState} from 'react';
import {Image, View, Text, TouchableOpacity} from 'react-native';
import tw from 'twrnc';
import Container from '../../components/common/container/index';
import Input from '../../components/common/inputs/index';
import Button from '../../components/common/button/button';
import Logo from '../../assets/images/logo-header-blue.png';
import {useNavigation} from '@react-navigation/native';

const SignUpComponent = ({onChange, onSubmit, form, errors}) => {
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  //   const [error, setError] = useState('hello');
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
          Create an account
        </Text>
        <Input
          label="UserName"
          //  value={username}
          onChangeText={text => onChange({name: 'userName', text})}
          placeholder="Enter Username"
          error={errors.userName}
        />
        <Input
          label="First Name"
          //  value={username}
          onChangeText={text => onChange({name: 'firstName', text})}
          placeholder="Enter First name"
          error={errors.firstName}
        />
        <Input
          label="Last Name"
          //  value={password}
          onChangeText={text => onChange({name: 'lastName', text})}
          placeholder="Enter Last name"
          error={errors.lastName}
        />
        <Input
          label="Email"
          //  value={password}
          onChangeText={text => onChange({name: 'email', text})}
          placeholder="Enter Email"
          error={errors.email}
        />
        <Input
          label="Password"
          //  value={password}
          onChangeText={text => onChange({name: 'password', text})}
          secureTextEntry={true}
          placeholder="Enter Password"
          error={errors.password}
        />
        <Button
          onPress={onSubmit}
          title="Submit"
          loading={true}
          disabled={false}
        />

        <View style={tw`flex flex-row mt-4`}>
          <Text style={tw``}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigate('Login')}>
            <Text style={tw`text-blue-500 pl-2`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};
export default SignUpComponent;
