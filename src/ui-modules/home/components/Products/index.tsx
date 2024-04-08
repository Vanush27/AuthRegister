import React, {useEffect, useState} from 'react';
import {View, FlatList} from 'react-native';
import {Text} from '@ui-kit';
import {getProducts} from '@api';
import {IProduct} from '../../types';
import ProductsDetails from '../ProductDetails';

import {useStyles} from './Products.useStyles';

const Products = () => {
  const {styles} = useStyles();

  const [products, setProducts] = useState<IProduct[]>([]);

  const getAllProduct = async () => {
    try {
      const allProduct = await getProducts();
      setProducts(allProduct);
    } catch (e) {
      console.error(e, 'Home Screen');
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clothes</Text>
      <FlatList
        data={products}
        numColumns={3}
        renderItem={({item}) => <ProductsDetails item={item} />}
        keyExtractor={item => item.id.toString()}
        onEndReachedThreshold={0.8}
      />
    </View>
  );
};

export default Products;
