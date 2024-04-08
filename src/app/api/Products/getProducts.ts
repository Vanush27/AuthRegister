import {baseUrl} from '../baseUrl';

const getProducts = async () => {
  const {data} = await baseUrl.get('');
  return data;
};

export default getProducts;
