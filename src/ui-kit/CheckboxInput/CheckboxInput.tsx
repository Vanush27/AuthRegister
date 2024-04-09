import Row from '../Row';
import Checkbox from '../Checkbox';
import Gap from '../Gap';

import {View} from 'react-native';
import {styles} from './CheckboxInput.styles';

import type {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {ICheckboxProps} from '../Checkbox/Checkbox';
import React from 'react';
import InputLabel from '../InputLabel';

/** Controlled checkbox input ready to use with Form Manager like a Formik. */
const CheckboxInput = ({
  value: checked,
  size = 'medium',
  label,
  error,
  onChange,
  onLabelPress,
  testID,
  labelStyles,
  customLabelContainerStyles,
  showHorizontalRule = false,
  disabled,
}: ICheckboxInputProps) => {
  return (
    <Row>
      <Checkbox
        value={checked}
        variant={size}
        testID={testID}
        showHorizontalRule={showHorizontalRule}
        disabled={disabled}
        error={error}
        onChange={onChange}
      />
      <Gap gap={8} horizontal />
      <View style={[styles.labelBox, customLabelContainerStyles]}>
        <InputLabel
          disabled={disabled && !onLabelPress}
          labelStyles={labelStyles}
          label={label}
          onPress={() => {
            !disabled && onChange(!checked);
            onLabelPress?.();
          }}
        />
      </View>
    </Row>
  );
};

export interface ICheckboxInputProps {
  label?: string;
  value: boolean;
  error?: boolean;
  showHorizontalRule?: boolean;
  size?: ICheckboxProps['variant'];
  testID?: string;
  labelStyles?: StyleProp<TextStyle>;
  customLabelContainerStyles?: StyleProp<ViewStyle>;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
  onLabelPress?: () => void;
}

export default CheckboxInput;
