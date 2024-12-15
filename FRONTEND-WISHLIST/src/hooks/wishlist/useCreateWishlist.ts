import { useWishlistsApi } from "../../api";

// La idea es usar alguna librería para manejar el estado de la aplicación, como Redux, React Query, etc.
export const useCreateWishlist = () => {
  const { createWishlist } = useWishlistsApi();
  return { createWishlist };
};
