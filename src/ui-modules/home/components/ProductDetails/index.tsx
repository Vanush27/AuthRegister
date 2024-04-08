import React, {memo} from 'react';
import {View, Image} from 'react-native';
import {useTheme} from '@rneui/themed';
import {Text} from '@ui-kit';

import RUBIcon from 'react-native-vector-icons/FontAwesome';

import {IProduct} from '../../types';
import {useStyles} from './ProductsDetails.useStyles';

interface IProductsDetailsProps {
  item: IProduct;
}
const ProductsDetails = ({item}: IProductsDetailsProps) => {
  const {styles} = useStyles();
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description} ellipsizeMode="tail" numberOfLines={2}>
        {item.description}
      </Text>
      <View style={styles.price_wrapper}>
        <Text style={styles.price}>{item.price}</Text>
        <RUBIcon color={theme.colors.success} name="ruble" size={16} />
      </View>

      <Text style={styles.category}>{item.category}</Text>
    </View>
  );
};

export default memo(ProductsDetails);
