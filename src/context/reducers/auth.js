import {SIGNUP_LOADING} from '../../constants/actionTypes';

const auth = (state, {type, payload}) => {
  switch (type) {
    case SIGNUP_LOADING:
      console.log('STATE', state);

      return state;
    default:
      return state;
  }
};
export default auth;
