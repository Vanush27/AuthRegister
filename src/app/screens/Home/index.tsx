import React from 'react';
import {SafeAreaView} from 'react-native';

import {useStyles} from './Home.useStyles';

import {MapViews, Products} from '@ui-modules';

const Home = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <MapViews />
    </SafeAreaView>
  );
};

export default Home;
