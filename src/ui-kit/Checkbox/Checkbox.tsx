import Icon from 'react-native-vector-icons/MaterialIcons';

import {useStyles} from './Checkbox.useStyles';
import CheckmarkIcon from '../CheckmarkIcon';
import {TouchableOpacity, View} from 'react-native';

const Checkbox = ({
  value: checked,
  onChange,
  variant = 'medium',
  testID = 'Checkbox',
  disabled = false,
  showHorizontalRule = false,
  error,
}: ICheckboxProps) => {
  const {styles, sizeStyleSet, checkMarkIconColor} = useStyles();

  return (
    <TouchableOpacity
      disabled={disabled}
      testID={testID}
      onPress={() => onChange(!checked)}>
      <View
        style={[
          styles.checkbox,
          sizeStyleSet[variant],
          error && styles.checkboxError,
          disabled && styles.disabled,
        ]}>
        {checked && !showHorizontalRule ? (
          <CheckmarkIcon
            width={12}
            height={12}
            color={checkMarkIconColor}
            testID="CheckmarkIcon"
          />
        ) : null}
        {showHorizontalRule && (
          <Icon size={15} name="horizontal-rule" color={checkMarkIconColor} />
        )}
      </View>
    </TouchableOpacity>
  );
};

export interface ICheckboxProps {
  value: boolean;
  variant?: 'medium' | 'small';
  testID?: string;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  error?: boolean;
  showHorizontalRule?: boolean;
}

export default Checkbox;
