import React, {createRef, useState} from 'react';

import {View, type TextInput, TouchableWithoutFeedback} from 'react-native';

import {Formik} from 'formik';

import {Button, CheckboxInput, Gap, Input, Text, UserIcon} from '@ui-kit';

import {TSignInForm, signInFormSchema} from './SignInForm.schema';
import EyeIcon from 'react-native-vector-icons/FontAwesome6';

import {useStyles} from './SignInForm.useStyles';

// Input refs.
const passwordFieldRef = createRef<TextInput>();

const SignInForm = ({
  initialValues,
  submitError,
  defaultShouldRememberLogin = false,
  onSetShouldRememberLogin,
  onResetShouldRememberLogin,
  onSubmit,
  onTermsPressed,
}: ISignInFormProps) => {
  //   const {t} = useTranslation();
  const {styles, placeholderIconColor, focusedIconColor} = useStyles();
  const [seePassword, setSeePassword] = useState(true);

  const [focusedField, setFocusedField] = useState<keyof TSignInForm | null>(
    null,
  );
  const [shouldRememberLogin, setShouldRememberLogin] = useState(
    defaultShouldRememberLogin,
  );

  return (
    <Formik<TSignInForm>
      initialValues={initialValues as TSignInForm}
      validationSchema={signInFormSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={values => onSubmit(values)}>
      {({
        values,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        submitForm,
        validateForm,
      }) => {
        const submit = async () => {
          return await submitForm();
          // const validateErrors = await validateForm();
          // if (validateErrors === null) {
          //   console.warn(0);
          //   if (shouldRememberLogin) onSetShouldRememberLogin(values.email);
          //   else onResetShouldRememberLogin();
          //   return await submitForm();
          // }
        };
        return (
          <>
            <View style={styles.header}>
              <Text h4>{'Sign In'}</Text>
            </View>
            {submitError ? (
              <>
                {/* <InlineModal
                  title={submitError.title}
                  subtitle={submitError.subtitle}
                  type="error"
                  testID="submit-error"
                /> */}
                <Gap gap={16} />
              </>
            ) : null}
            <Input
              value={values?.email}
              placeholder={'email'}
              autoCapitalize="none"
              autoComplete="email"
              errorMessage={errors.email}
              testID="login-field"
              onChangeText={handleChange('email')}
              onFocus={() => {
                setFocusedField('email');
              }}
              onBlur={event => {
                setFocusedField(null);
                handleBlur('email')(event);
              }}
              onSubmitEditing={() => passwordFieldRef.current?.focus()}
            />
            <Input
              ref={passwordFieldRef}
              value={values?.password}
              placeholder={'Password'}
              autoComplete="password"
              autoCapitalize="none"
              // leftIcon={<LockIcon name="eye" size={20} />}
              secureTextEntry={seePassword}
              errorMessage={errors.password}
              testID="password-field"
              onChangeText={handleChange('password')}
              onFocus={() => {
                setFocusedField('password');
              }}
              onBlur={event => {
                setFocusedField(null);
                handleBlur('password')(event);
              }}
              onSubmitEditing={submit}
              rightIcon={
                <TouchableWithoutFeedback
                  onPress={() => setSeePassword(!seePassword)}>
                  <View style={styles.passwordToggleWrap}>
                    <Text style={styles.passwordToggleText}>
                      {/* {seePassword ? 'Show password' : 'Hide password'} */}
                    </Text>
                    {!seePassword ? (
                      <EyeIcon name="eye" size={24} />
                    ) : (
                      <EyeIcon name="eye-slash" size={24} />
                    )}
                  </View>
                </TouchableWithoutFeedback>
              }
            />

            <CheckboxInput
              label={'Remember me'}
              size="medium"
              value={shouldRememberLogin}
              testID="remember-me-checkbox"
              onChange={setShouldRememberLogin}
            />
            <Gap gap={16} />
            <View style={styles.linkContainer}>
              <Text style={styles.textAccept}>
                {'By continuing, you agree to our'}{' '}
                <Text
                  onPress={onTermsPressed}
                  style={styles.textTermsAndCondition}>
                  {'Terms and Conditions'}
                </Text>
              </Text>
            </View>
            <Gap gap={16} />
            <Button
              title={'Sign In'}
              variant="medium"
              type="outline"
              loading={isSubmitting}
              testID="submit-button"
              onPress={submit}
            />
          </>
        );
      }}
    </Formik>
  );
};

export type ISignInFormSubmitError = {
  title: string;
  subtitle: string;
};

export interface ISignInFormProps {
  initialValues: TSignInForm;
  defaultShouldRememberLogin?: boolean;
  submitError?: ISignInFormSubmitError | null;
  onSetShouldRememberLogin: (login: string) => void;
  onResetShouldRememberLogin: () => void;
  onSubmit: (values: TSignInForm) => void;
  onTermsPressed?: () => void;
}

export default SignInForm;
