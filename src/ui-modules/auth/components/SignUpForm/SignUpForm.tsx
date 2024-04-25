import React from 'react';
import {View} from 'react-native';
import {useState} from 'reinspect';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {Button, Gap, Input} from '@ui-kit';

export {default as isEmpty} from 'lodash/isEmpty';

import {type TSignUpForm, signupValidationSchema} from './SignUpForm.schema';
import {ISignInFormSubmitError} from '../SignInForm';

import {useStyles} from './SignUpForm.useStyles';
import {Formik} from 'formik';

const SignUpForm = ({
  initialValues,
  submitError,
  defaultShouldRememberLogin = false,
  onSetShouldRememberLogin,
  onResetShouldRememberLogin,
  onSubmit,
}: ISignUpFormProps) => {
  //   const {t} = useAppTranslation();

  const {styles, theme} = useStyles();

  //   const {passwordVisibility} = useTogglePasswordVisibility();
  const [shouldRememberLogin] = useState(
    defaultShouldRememberLogin,
    'should-remember-login',
  );

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <Gap gap={16} />
        <Formik
          initialValues={initialValues as TSignUpForm}
          onSubmit={values => onSubmit(values)}
          validationSchema={signupValidationSchema}
          validateOnChange={false}
          validateOnBlur={false}>
          {({
            values,
            errors,
            handleChange,
            submitForm,
            handleBlur,
            validateForm,
          }) => {
            const submit = async () => {
              const validateErrors = await validateForm();
              if (isEmpty(validateErrors)) {
                if (shouldRememberLogin) onSetShouldRememberLogin(values.email);
                else onResetShouldRememberLogin();
                return await submitForm();
              }
            };
            return (
              <>
                <Input
                  value={values?.fullName}
                  placeholder={'Full name:*'}
                  autoCapitalize="none"
                  errorMessage={errors.fullName}
                  testID="name"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                />

                <Input
                  value={values?.email}
                  placeholder={'Email:*'}
                  autoCapitalize="none"
                  autoComplete="email"
                  errorMessage={errors.email}
                  testID="email-field"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />

                <Input
                  value={values?.password}
                  placeholder={'Password:*'}
                  autoComplete="password"
                  autoCapitalize="none"
                  //   secureTextEntry={passwordVisibility}
                  errorMessage={errors.password}
                  testID="password-field"
                  textContentType="newPassword"
                  onChangeText={handleChange('password')}
                  onBlur={event => {
                    handleBlur('password')(event);
                  }}
                  onSubmitEditing={submit}
                />

                <Input
                  value={values?.confirmPassword}
                  placeholder={'Confirm password:*'}
                  autoComplete="password"
                  autoCapitalize="none"
                  textContentType="password"
                  //   secureTextEntry={passwordVisibility}
                  errorMessage={errors.confirmPassword}
                  testID="password-field"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />

                <Button
                  buttonStyle={{backgroundColor: theme.colors?.error}}
                  variant="medium"
                  title={`${'Sign Up'}`}
                  onPress={submit}
                />
              </>
            );
          }}
        </Formik>
      </KeyboardAwareScrollView>
    </View>
  );
};

export interface ISignUpFormProps {
  initialValues: TSignUpForm;
  defaultShouldRememberLogin?: boolean;
  submitError?: ISignInFormSubmitError | null;
  onSetShouldRememberLogin: (login: string) => void;
  onResetShouldRememberLogin: () => void;
  onSubmit: (values: TSignUpForm) => void;
}

export default SignUpForm;
