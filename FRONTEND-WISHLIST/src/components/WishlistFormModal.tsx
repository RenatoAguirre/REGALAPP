import React, { useState } from "react";
import { NewProduct } from "../types";

interface WishlistFormModalProps {
  isDarkMode: boolean;
  onClose: () => void;
  onAdd: (product: NewProduct) => void;
}

const WishlistFormModal: React.FC<WishlistFormModalProps> = ({
  isDarkMode,
  onClose,
  onAdd,
}) => {
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    price: "",
    image: "",
    link: "",
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newProduct);
    setNewProduct({
      name: "",
      price: "",
      image: "",
      link: "",
      description: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div
        className={`${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white"
        } rounded-lg p-6 w-full max-w-md`}
      >
        <h2
          className={`text-2xl font-bold mb-4 ${
            isDarkMode ? "text-green-400" : "text-green-800"
          }`}
        >
          Add New Item
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields */}
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Product Name
            </label>
            <input
              type="text"
              required
              className={`mt-1 w-full rounded-md ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
          </div>
          {/* Add other fields like price, image, etc. */}
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Price
            </label>
            <input
              type="text"
              required
              className={`mt-1 w-full rounded-md ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Image URL
            </label>
            <input
              type="url"
              required
              className={`mt-1 w-full rounded-md ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Link
            </label>
            <input
              type="url"
              required
              className={`mt-1 w-full rounded-md ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={newProduct.link}
              onChange={(e) =>
                setNewProduct({ ...newProduct, link: e.target.value })
              }
            />
          </div>
          <div>
            <label
              className={`block text-sm font-medium ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Description
            </label>
            <textarea
              className={`mt-1 w-full rounded-md ${
                isDarkMode ? "bg-gray-700 border-gray-600" : "border-gray-300"
              } shadow-sm focus:border-green-500 focus:ring-green-500`}
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
            />
          </div>

          {/* Submit and Cancel buttons */}
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className={`${
                isDarkMode
                  ? "bg-gray-700 text-gray-200"
                  : "bg-gray-200 text-gray-800"
              } px-4 py-2 rounded-md mr-2`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default WishlistFormModal;
