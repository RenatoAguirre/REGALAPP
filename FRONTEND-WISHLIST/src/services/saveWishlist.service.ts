import axiosInstance from "./axiosInstance";
import { WishlistItem } from "../types";

async function saveWishlist(wishlist: WishlistItem[], token: string): Promise<void> {
    try {
        const headers = {
            Authorization: `Bearer ${token}`,
        };
        const response = await axiosInstance.post(`me/wishlist`, wishlist, { headers });

        // Handle the response if needed
        console.log('Wishlist saved successfully:', response.data);
    } catch (error) {
        // Handle any errors that occurred during the request
        console.error('Error saving wishlist:', error);
    }
}

export default saveWishlist;