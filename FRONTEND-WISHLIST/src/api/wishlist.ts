import { useAuth0 } from '@auth0/auth0-react';
import { Product } from '../types';
import api from './api';

export const useWishlistsApi = () => {
  const { getAccessTokenSilently } = useAuth0();
  const token = getAccessTokenSilently();

  const getWishlist = async (uuid: string) => {
    const response = await api.get('/wishlists', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        uuid: uuid,
      },
    });
    return response.data;
  };

  const createWishlist = async (products: Product[]) => {
    const response = await api.post('/wishlists', { products });
    return response.data;
  }

  return { getWishlist, createWishlist };
}
