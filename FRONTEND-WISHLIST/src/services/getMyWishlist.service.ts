import axiosInstance from './axiosInstance';
import { WishlistResponse } from '../types';

async function getMyWishlist(token: string): Promise<WishlistResponse> {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.get<WishlistResponse>(`me/wishlist`, { headers });
        
        return response.data;
    } catch (error) {
        console.error('Error retrieving wishlist:', error);
        throw error;
    }
}

export default getMyWishlist;