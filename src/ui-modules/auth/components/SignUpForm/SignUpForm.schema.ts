import {Schema} from 'yup';
import * as yup from 'yup';

export const signupValidationSchema: Schema<TSignUpForm> = yup.object().shape({
  fullName: yup.string().required().min(2),
  email: yup.string().required().email().label('Email'),
  password: yup.string().required().min(6).label('Password'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Confirm Password must match password.')
    .required('Confirm Password is required.'),
});

export const passwordResetSchema = yup.object().shape({
  email: yup
    .string()
    .required('Please enter a registered email')
    .label('Email')
    .email('Enter a valid email'),
});

export type TSignUpForm = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
