import axiosInstance from './axiosInstance';
import { WishlistResponse } from '../types';

async function getWishlist(userId: string): Promise<WishlistResponse> {
    try {
        const response = await axiosInstance.get<WishlistResponse>(`wishlists/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error retrieving wishlist:', error);
        throw error;
    }
}

export default getWishlist;