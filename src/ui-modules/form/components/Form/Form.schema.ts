import {Schema} from 'yup';
import * as yup from 'yup';

export const validationSchema: Schema<TSignInForm> = yup.object().shape({
  name: yup.string().min(2, 'Too Short!').required('Обязательное поле'),
  description: yup
    .string()
    .min(10, 'Description should be at least 10 characters')
    .required('Обязательное поле'),
});

export type TSignInForm = {
  name: string;
  description: string;
};
