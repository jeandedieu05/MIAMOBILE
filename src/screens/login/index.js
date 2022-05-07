import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Container from '../../components/common/container/index';
import LoginComponent from '../../components/login/login';
import AxiosInstance from '../../helpers/axiosConfig';
import envs from '../../config/env';

const Login = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [error, setError] = useState('hello');
  const baseURL = 'http://localhost:8000';
  //console.log(envs.PRIVATE_API_URL);
  // useEffect(() => {
  //   AxiosInstance.get('/api/v1/auth/login').catch(error => {
  //     console.log('err', error);
  //   });
  // }, []);

  const data = {
    username: 'omar',
    password: '12345678',
  };

  useEffect(() => {
    // console.log(baseURL);
    axios
      .post(`${baseURL}/api/v1/auth/login`, data, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .catch(error => {
        console.log('err', error);
      });
  });
  return (
    <Container>
      <LoginComponent />
    </Container>
  );
};
export default Login;
