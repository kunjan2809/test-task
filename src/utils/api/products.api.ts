import axios from 'axios';
import type { ProductsResponse } from '../types/api';

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const productsApi = {
  getProducts: async (): Promise<ProductsResponse> => {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  },
};