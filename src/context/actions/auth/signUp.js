import AxiosInstance from '../../../helpers/axiosConfig';
import {
  SIGNUP_LOADING,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../../../constants/actionTypes';
export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
    role,
    tag,
  }) =>
  authDispatch => {
    authDispatch({
      type: SIGNUP_LOADING,
    });
    AxiosInstance.post('/api/v1/auth/signup')
      .then(res => {
        authDispatch({
          type: SIGNUP_SUCCESS,
          payload: res.data,
        });
      })
      .catch(err => {
        authDispatch({
          type: SIGNUP_FAIL,
          payload: err.response
            ? err.response.data
            : {error: 'something went wrong'},
        });
      });
  };
