import React, {useState} from 'react';
import Container from '../../components/common/container/index';
import SignUpComponent from '../../components/signUp/signUp';
import envs from '../../components/config/env';

const SignUp = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  // const [error, setError] = useState('hello');
  const {PRIVATE_API_URL} = envs;
  console.log(' PRIVATE_API_URL >> ', PRIVATE_API_URL);

  const onChange = ({name, value}) => {
    console.log(' onchange >> ', value);
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'This field need more than 8 characters'};
          });
        }
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      } else {
        setErrors(prev => {
          return {...prev, [name]: 'This field is required'};
        });
      }
    }
  };

  const onSubmit = () => {
    // console.log(' form >> ', form);
    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Please add a username'};
      });
    }
    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'Please add a first name'};
      });
    }
    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Please add a last name'};
      });
    }
    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Please add a email'};
      });
    }
    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Please add a password'};
      });
    }
  };
  return (
    <Container>
      <SignUpComponent
        onChange={onChange}
        onSubmit={onSubmit}
        form={form}
        errors={errors}
      />
    </Container>
  );
};
export default SignUp;
