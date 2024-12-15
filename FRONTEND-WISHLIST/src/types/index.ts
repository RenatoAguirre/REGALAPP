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
  price: string;
  image: string;
  link: string;
  description: string;
}
export interface WishlistItem extends NewProduct {
  id: number;
}

export type Product = {
  id: number;
  wishlist: string;
  name: string;
  price: string;
  bought: boolean;
  description?: string;
  image?: string;
  link?: string;
  order: number;
};

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
