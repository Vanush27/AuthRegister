import {forwardRef, useState} from 'react';
import {StyleSheet} from 'react-native';
import {InputProps, Input as RNEInput} from '@rneui/themed';
import {useStyles} from './Input.useStyles';
import type {ForwardedRef} from 'react';
import type {TextInput, ViewStyle, TextStyle} from 'react-native';

const Input = (
  {
    type = 'normal',
    size = 'medium',
    required = false,
    label,
    inputContainerStyle,
    errorStyle,
    focusStyle,
    onFocus,
    onBlur,
    secureTextEntry = false,
    ...inputProps
  }: IInputProps,
  ref: ForwardedRef<TextInput>,
) => {
  const {styleSet, sizeStyleSet} = useStyles();
  const [isFocused, setIsFocused] = useState(false);
  const finalLabel = required ? `${label}*` : label;

  return (
    <RNEInput
      ref={ref}
      label={finalLabel}
      secureTextEntry={secureTextEntry}
      inputContainerStyle={StyleSheet.flatten([
        styleSet[type].inputContainerStyle,
        sizeStyleSet[size].inputContainerStyle,
        inputContainerStyle,
        inputProps.errorMessage && styleSet[type].errorInputContainerStyle,
        isFocused && type === 'normal' && styleSet[type].focusStyle,
        isFocused && focusStyle,
      ])}
      errorStyle={StyleSheet.flatten([
        styleSet[type].errorStyle as TextStyle,
        errorStyle,
      ])}
      autoCompleteType={undefined}
      onFocus={e => {
        onFocus && onFocus(e);
        setIsFocused(true);
      }}
      onBlur={e => {
        onBlur && onBlur(e);
        setIsFocused(false);
      }}
      {...inputProps}
    />
  );
};

export interface IInputProps extends InputProps {
  type?: 'normal' | 'borderless' | 'underlined';
  size?: 'medium' | 'small';
  required?: boolean;
  focusStyle?: ViewStyle;
  secureTextEntry?: boolean;
}

export default forwardRef(Input);
