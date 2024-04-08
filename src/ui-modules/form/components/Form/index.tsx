import React from 'react';
import {useState} from 'react';
import {View, TextInput, Alert, Image, Button} from 'react-native';
import {Text} from '@ui-kit';
import {ErrorMessage, Formik} from 'formik';

import {useStyles} from './Form.useStyles';
import {validationSchema} from './Form.schema';

const Form = () => {
  const {styles} = useStyles();

  const selectFile = async () => {
    // Opening Document Picker to select one file
    try {
    } catch (err) {}
  };
  const onSubmit = async values => {
    try {
      Alert.alert('Success', 'Form submitted successfully');
    } catch (error) {
      // Handle error
      Alert.alert('Error', 'Failed to submit form');
    }
  };

  const initialValues = {
    name: '',
    description: '',
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => onSubmit(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <>
            <TextInput
              style={styles.input}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              placeholder="Name"
            />

            <Text style={styles.error}>
              <ErrorMessage name="name" />
            </Text>

            <TextInput
              style={styles.input}
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              placeholder="Description"
            />
            <Text style={styles.error}>
              <ErrorMessage name="description" />
            </Text>

            <Button title="Выбрать изображение" onPress={selectFile} />

            <Button onPress={() => handleSubmit()} title="Отправить" />
          </>
        )}
      </Formik>
    </View>
  );
};

export default Form;
