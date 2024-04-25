import React from 'react';
import {View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import {TAuthScreenProps} from '@navigators/AuthNavigator';
import {FormikValues} from 'formik';

import {useNavigation} from '@react-navigation/native';
import {useAppTranslation, useFireBase} from '@hooks';
import {Button, Gap, ScreenWrapper, Text} from '@ui-kit';

import {useStyles} from './SignUpScreen.useStyles';
import {SignUpForm} from '@ui-modules';

const SignUpScreen = () => {
  const navigation = useNavigation<any>();

  //   const {t} = useAppTranslation();
  const x = useFireBase();
  const {styles} = useStyles();
  // const {defaultLogin, setDefaultLogin, resetDefaultLogin} =
  //   useDefaultSignInLogin();

  const handleSignup = async (values: FormikValues) => {
    const {email, password} = values;
    x?.createUserWithEmailAndPassword(email, password).catch(
      error => error.message,
    );
  };

  return (
    <ScreenWrapper statusBarType="white">
      <KeyboardAwareScrollView>
        <Gap gap={16} />
        <View style={styles.logoContainer}>
          {/* <LogoIcon height={70} width={70} />x */}
          <Text h2>{'Name App'}</Text>
        </View>
        <SignUpForm
          initialValues={{
            fullName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          // TODO  submitError -> I don't know yet
          // submitError={submitError}
          // defaultShouldRememberLogin={!!defaultLogin}
          // onSetShouldRememberLogin={setDefaultLogin}
          // onResetShouldRememberLogin={resetDefaultLogin}
          onSubmit={handleSignup}
        />

        <Button
          testID="submit-button"
          type="transparent"
          variant="small"
          title={`${'Already have an account?'}`}
        />

        <Button
          testID="submit-button"
          type="transparent"
          onPress={() => navigation.navigate('SignInScreen')}
          variant="medium"
          title={`${'Login for app'}`}
        />

        <Button
          testID="submit-button"
          type="outline"
          variant="medium"
          title={`${'Sign Up with Google'}`}
        />
      </KeyboardAwareScrollView>
    </ScreenWrapper>
  );
};

export default SignUpScreen;
