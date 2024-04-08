import {View} from 'react-native';
import {OnBoarding} from '@ui-modules';

import {useStyles} from './OnBoarding.useStyles';

const OnBoardingScreen = () => {
  const {styles} = useStyles();
  return (
    <View style={styles.container}>
      <OnBoarding />
    </View>
  );
};

export default OnBoardingScreen;
