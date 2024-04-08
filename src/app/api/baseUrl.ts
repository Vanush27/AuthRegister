import axios from 'axios';

const productspiUrl = `https://fakestoreapi.com/products`;

export const baseUrl = axios.create({
  baseURL: productspiUrl,
});
