import React, {useState} from 'react';
import Container from '../../components/common/container/index';
import {View, Text} from 'react-native';
import Input from '../../components/common/inputs/index';
import Button from '../../components/common/button/button';
import LoginComponent from '../../components/login/login';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('hello');
  return (
    <Container>
      <LoginComponent></LoginComponent>
    </Container>
  );
};
export default Login;
