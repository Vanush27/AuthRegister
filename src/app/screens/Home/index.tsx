import React from 'react';
import {SafeAreaView} from 'react-native';

import {useStyles} from './Home.useStyles';

import {Products} from '@ui-modules';

const Home = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Products />
    </SafeAreaView>
  );
};

export default Home;
