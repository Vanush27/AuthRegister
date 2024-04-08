import {TouchableOpacity, View} from 'react-native';
import {Text} from '@ui-kit';
import {color} from '@rneui/base';

import {useStyles} from './OnBoardingItems.useStyles';

export const Dots = ({selected}: color) => {
  const {styles} = useStyles();
  const backgroundColor = selected
    ? 'rgba(0, 0, 0, 0.8)'
    : 'rgba(0, 0, 0, 0.3)';

  return <View style={[styles.dot, {backgroundColor}]} />;
};

export const Skip = ({...props}) => {
  const {styles} = useStyles();
  return (
    <TouchableOpacity style={styles.margin_horizontal} {...props}>
      <Text style={styles.font_size}>{'Skip'}</Text>
    </TouchableOpacity>
  );
};

export const Next = ({...props}) => {
  const {styles} = useStyles();
  return (
    <TouchableOpacity style={styles.margin_horizontal} {...props}>
      <Text style={styles.font_size}>{'Next'}</Text>
    </TouchableOpacity>
  );
};

export const Done = ({...props}) => {
  const {styles} = useStyles();
  return (
    <TouchableOpacity style={styles.margin_horizontal} {...props}>
      <Text style={styles.font_size}>{'Done'}</Text>
    </TouchableOpacity>
  );
};
