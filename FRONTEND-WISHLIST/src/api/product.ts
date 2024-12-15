import { useAuth0 } from '@auth0/auth0-react';
import { Product } from '../types';
import api from './api';

export const useProducts = () => {
  const { getAccessTokenSilently } = useAuth0();
  const token = getAccessTokenSilently();

  const createProduct = async (product: Product) => {
    const response = await api.post('/products', product, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  }

  return { createProduct };
}
