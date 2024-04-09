import React from 'react';
import {SafeAreaView} from 'react-native';
import {ScreenWrapper, Text} from '@ui-kit';

import {useStyles} from './Login.useStyles';
import {SignInForm} from '@ui-modules';

const Login = () => {
  const {styles} = useStyles();

  const initialValues = {
    login: '',
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
        onSubmit={function (values: any): void {
          throw new Error('Function not implemented.');
        }}
      />
    </ScreenWrapper>
  );
};

export default Login;
