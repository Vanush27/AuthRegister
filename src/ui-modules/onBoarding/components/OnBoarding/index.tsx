import React from 'react';
import {Image} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import Onboarding from 'react-native-onboarding-swiper';
import {ImagesAssets} from '@assets/images/ImagesAssets';
import {Done, Dots, Next, Skip} from '../OnBoardingItems';

const onboardingPages = [
  {
    backgroundColor: '#a6e4d0',
    image: <Image source={ImagesAssets.onboard_1} />,
    title: 'On boarding 1',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#5af6c4',
    image: <Image source={ImagesAssets.onboard_2} />,
    title: 'On boarding 2',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
  {
    backgroundColor: '#178060',
    image: <Image source={ImagesAssets.onboard_3} />,
    title: 'On boarding 3',
    subtitle: 'Done with React Native Onboarding Swiper',
  },
];

const OnBoarding = () => {
  const {navigate} =
    useNavigation<
      NativeStackNavigationProp<ParamListBase, 'MainNavigationRoutes'>
    >();

  const handleNavigate = () => {
    return navigate('BottomNavigator');
  };

  return (
    <Onboarding
      DoneButtonComponent={Done}
      DotComponent={Dots}
      NextButtonComponent={Next}
      SkipButtonComponent={Skip}
      pages={onboardingPages}
      onDone={handleNavigate}
      onSkip={handleNavigate}
    />
  );
};

export default OnBoarding;
