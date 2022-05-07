import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import envs from '../config/env';

let headers = {};

//console.log('API', envs.PRIVATE_API_URL);
const AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000',
  headers,
});

AxiosInstance.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token');
    // const token =
    //   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2ZpZWxkIjoiODJhNjgzZTMtYzI4Yi00NDI5LTkwOTAtMDIzM2JhZWViN2NkMSIsImV4cCI6MTk2NTE2ODcyMzZ9.O7dBl8lyWGoQtJMvN1-jsWhO6ZxsHxZ8h4hSyRizgCg';
    if (token) {
      config.headers.Autorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  error => {
    Promise.reject(console.log(error));
  },
);
export default AxiosInstance;
