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
