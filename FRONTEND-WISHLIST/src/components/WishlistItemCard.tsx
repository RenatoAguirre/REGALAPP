import React from "react";
import { WishlistItem } from "../types";
import { FaTrash } from "react-icons/fa";

interface WishlistItemCardProps {
  item: WishlistItem;
  isDarkMode: boolean;
  onRemove?: (id: number) => void;
}

const WishlistItemCard: React.FC<WishlistItemCardProps> = ({
  item,
  isDarkMode,
  onRemove,
}) => {
  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-800" : "bg-white"
      } rounded-lg shadow-md overflow-hidden`}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover"
        onError={(e) => {
          (e.target as HTMLImageElement).src =
            "https://images.unsplash.com/photo-1513297887119-d46091b24bfa";
        }}
      />
      <div className="p-4">
        <h3
          className={`font-semibold text-lg mb-2 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          {item.name}
        </h3>
        <p className="text-green-600 font-bold mb-2">{item.price}</p>
        <p
          className={`${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          } mb-4 text-sm`}
        >
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm"
          >
            View Product
          </a>
          {onRemove && (
            <button
              onClick={() => onRemove(item.id)}
              className="text-red-500 hover:text-red-700 transition"
              aria-label="Remove from wishlist"
            >
              <FaTrash size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistItemCard;
