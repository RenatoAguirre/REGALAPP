import React, { useState } from "react";
import { FaTrash, FaSnowflake, FaPlus } from "react-icons/fa";

type WishlistItem = {
  id: number;
  name: string;
  price: string;
  image: string;
  link: string;
  description: string;
};

type NewProduct = Omit<WishlistItem, "id">;

const ChristmasWishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [newProduct, setNewProduct] = useState<NewProduct>({
    name: "",
    price: "",
    image: "",
    link: "",
    description: "",
  });

  const addProduct = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const product: WishlistItem = {
      id: Date.now(),
      ...newProduct,
    };
    setWishlistItems([...wishlistItems, product]);
    setNewProduct({
      name: "",
      price: "",
      image: "",
      link: "",
      description: "",
    });
    setIsModalOpen(false);
  };

  const removeFromWishlist = (productId: number): void => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== productId));
  };

  return (
    <div className="min-h-screen bg-red-50 rounded-md ">
      {/* Snowflake Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <FaSnowflake
            key={i}
            className="text-white/30 absolute animate-fall"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-red-600 text-white py-6 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center font-serif">
            Christmas Wishlist
          </h1>
          <p className="text-center mt-2 text-red-100">
            Make your holiday dreams come true!
          </p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Add Product Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-8 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
        >
          <FaPlus /> Add New Item to Wishlist
        </button>

        {/* Add Product Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-md">
              <h2 className="text-2xl font-bold mb-4 text-green-800">
                Add New Item
              </h2>
              <form onSubmit={addProduct} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <input
                    type="text"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    value={newProduct.price}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, price: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Image URL
                  </label>
                  <input
                    type="url"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    value={newProduct.image}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, image: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Product Link
                  </label>
                  <input
                    type="url"
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    value={newProduct.link}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, link: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    required
                    className="mt-1 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    rows={3}
                    value={newProduct.description}
                    onChange={(e) =>
                      setNewProduct({
                        ...newProduct,
                        description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  >
                    Add to Wishlist
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 bg-gray-200 text-gray-800 py-2 rounded-md hover:bg-gray-300 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Wishlist Section */}
        <section>
          <h2 className="text-2xl font-bold mb-6 text-green-800">
            My Wishlist
          </h2>
          {wishlistItems.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow">
              <p className="text-gray-500">
                Your wishlist is empty. Start adding some holiday magic!
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
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
                    <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                    <p className="text-green-600 font-bold mb-2">
                      {item.price}
                    </p>
                    <p className="text-gray-600 mb-4 text-sm">
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
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="text-red-500 hover:text-red-700 transition"
                        aria-label="Remove from wishlist"
                      >
                        <FaTrash size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default ChristmasWishlist;
