import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import getMyWishlist from "../services/getMyWishlist.service";
import { useEffect, useState } from "react";
import { WishlistItem } from "../types";
import ChristmasWishlist from '../components/ChristmasWishlist';

const MyWishlist: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [wishListItems, setWishlistItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then((token) => {
        getMyWishlist(token).then((response) => {
          setWishlistItems(response.wishListItems);
        });
      });
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  return (
    <ChristmasWishlist isDarkMode={isDarkMode} wishListItems={wishListItems} isOwner={true} />
  );
};

export default MyWishlist;