import axios from 'axios';

import { Product } from '../models/product';
import { environnement } from '../utils/environnement';

const productsService = {
  async getProducts(): Promise<Product[]> {
    const data = await axios.get(`${environnement.url}products`);

    return data.data;
  },
  async getElectronicsProducts(): Promise<Product[]> {
    const data = await axios.get(
      `${environnement.url}products/category/electronics`
    );

    return data.data;
  },
};

export default productsService;
