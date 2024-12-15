import React, { useState } from "react";
import { WishlistItem, NewProduct } from "../types";
import SnowflakeBackground from "../components/SnowflakeBackground";
import WishlistItemCard from "../components/WishlistItemCard";
import WishlistFormModal from "../components/WishlistFormModal";

export type ChristmasWishlistProps = {
  isDarkMode: boolean;
  wishListItems: WishlistItem[];
};

const ChristmasWishlist: React.FC<ChristmasWishlistProps> = ({
  isDarkMode, wishListItems
}) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(wishListItems);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addProduct = (product: NewProduct) => {
    setWishlistItems([...wishlistItems, { id: Date.now(), ...product }]);
  };

  const removeFromWishlist = (id: number) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  }; 

  return (
    <div className={`min-h-screen ${isDarkMode ? "bg-gray-900" : "bg-red-50"}`}>
      <SnowflakeBackground isDarkMode={isDarkMode} />

      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className={`mb-8 ${
            isDarkMode ? "bg-green-700" : "bg-green-600"
          } text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition`}
        >
          Add New Item
        </button>
        {isModalOpen && (
          <WishlistFormModal
            isDarkMode={isDarkMode}
            onClose={() => setIsModalOpen(false)}
            onAdd={addProduct}
          />
        )}
        {wishlistItems.length === 0 ? (
          <div
            className={`text-center py-12 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-lg shadow`}
          >
            <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
              Your wishlist is empty. Start adding some holiday magic!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <WishlistItemCard
                key={item.id}
                item={item}
                isDarkMode={isDarkMode}
                onRemove={removeFromWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChristmasWishlist;
