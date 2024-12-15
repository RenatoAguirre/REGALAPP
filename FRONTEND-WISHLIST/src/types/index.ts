/*
product:
  id
  whishlist
  name
  price
  bought
  description?
  image?
  link?
  order

user:
  email

savedwhishlist:
  user
  whishlist
  name

whishlist:
  UUID
  user
*/

export interface NewProduct {
  name: string;
  order: number;
  price?: number;
  image?: string;
  link?: string;
  description?: string;
}
export interface WishlistItem extends NewProduct {
  id: number;
}

export type User = {
  email: string;
};

export type SavedWishlist = {
  user: string;
  wishlist: string;
  name: string;
};

export type Wishlist = {
  UUID: string;
  user: string;
};

export type WishlistResponse = {
  wishlist: Wishlist;
  wishListItems: WishlistItem[];
};