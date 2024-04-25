import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import {useStyles} from './Home.useStyles';

import {MapViews, Products} from '@ui-modules';

const Home = () => {
  const {styles} = useStyles();

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home </Text>
      {/* <MapViews /> */}
      {/* <MapViews /> */}
    </SafeAreaView>
  );
};

export default Home;
