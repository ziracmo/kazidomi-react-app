import axios from 'axios';

import { environnement } from '../utils/environnement';

const productsService = {
  async getProducts() {
    const data = await axios.get(`${environnement.url}products`);

    return data.data;
  },
  async getElectronicsProducts() {
    const data = await axios.get(
      `${environnement.url}products/category/electronics`
    );

    return data.data;
  },
};

export default productsService;
