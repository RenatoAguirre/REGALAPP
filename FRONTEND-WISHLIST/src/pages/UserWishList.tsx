import React from 'react';
import getWishlist from '../services/getWishlist.service';
import { useEffect, useState } from "react";
import { WishlistItem } from "../types";
import ChristmasWishlist from '../components/ChristmasWishlist';
import { useParams } from 'react-router-dom';

const UserWishlist: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [wishListItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    if (userId) {
        getWishlist(userId).then((response) => {
            setWishlistItems(response.wishListItems);
        });
    }
    
  }, [userId]);

  return (
    <ChristmasWishlist isDarkMode={isDarkMode} wishListItems={wishListItems} isOwner={false} />
  );
};

export default UserWishlist;