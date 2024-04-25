import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScreenWrapper, Text} from '@ui-kit';

import {useStyles} from './Login.useStyles';
import {SignInForm} from '@ui-modules';
import {FormikValues} from 'formik';
import {useFireBase} from '@hooks';

const Login = () => {
  const {styles} = useStyles();

  const x = useFireBase();

  const handleLogin = (values: FormikValues) => {
    const {login, password} = values;
    // signInWithEmailAndPassword(auth, login, password).catch(
    //   error => error.message,
    // );
  };

  const handleSignUp = async (values: FormikValues) => {
    const {email, password} = values;

    x?.createUserWithEmailAndPassword(email, password);
  };

  const initialValues = {
    email: '',
    password: '',
  };

  return (
    <ScreenWrapper statusBarType={'primaryDarkGray'}>
      <Text style={styles.profile_wrapper}>{'Login screen'}</Text>

      <SignInForm
        initialValues={initialValues}
        onSetShouldRememberLogin={function (login: string): void {
          throw new Error('Function not implemented.');
        }}
        onResetShouldRememberLogin={function (): void {
          throw new Error('Function not implemented.');
        }}
        onSubmit={handleSignUp}
      />
    </ScreenWrapper>
  );
};

export default Login;
