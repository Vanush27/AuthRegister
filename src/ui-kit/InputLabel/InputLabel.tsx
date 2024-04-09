import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Text from '../Text';
import {useStyles} from './InputLabel.useStyles';

import type {StyleProp, TextStyle} from 'react-native';

const InputLabel = ({
  label,
  required = false,
  disabled = false,
  onPress,
  labelStyles,
}: IInputLabelProps) => {
  const {styles} = useStyles();
  const finalLabel = required ? `${label}*` : label;
  return label ? (
    <TouchableWithoutFeedback
      disabled={disabled}
      style={styles.label}
      onPress={onPress}>
      <Text style={labelStyles} numberOfLines={2} ellipsizeMode="tail">
        {finalLabel}
      </Text>
    </TouchableWithoutFeedback>
  ) : null;
};

export interface IInputLabelProps {
  label: string | undefined;
  required?: boolean;
  disabled?: boolean;
  labelStyles?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export default InputLabel;
