import {Schema} from 'yup';
import * as yup from 'yup';

export const signInFormSchema: Schema<TSignInForm> = yup?.object().shape({
  login: yup.string().min(2, 'Too Short!').required('Обязательное поле'),
  password: yup
    .string()
    .min(10, 'Description should be at least 10 characters')
    .required('Обязательное поле'),
});

export type TSignInForm = {
  login: string;
  password: string;
};
