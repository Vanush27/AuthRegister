import {Schema} from 'yup';
import * as yup from 'yup';

export const signInFormSchema: Schema<TSignInForm> = yup?.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
  // email: yup.string().min(2, 'Too Short!').required('Обязательное поле'),
  // password: yup
  //   .string()
  //   .min(10, 'Description should be at least 10 characters')
  //   .required('Обязательное поле'),
});

export type TSignInForm = {
  email: string;
  password: string;
};
