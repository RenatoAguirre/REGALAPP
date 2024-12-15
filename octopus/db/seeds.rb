# Create wishlists

first_wishlist = Wishlist.create();
second_wishlist = Wishlist.create();

# Create products

Product.create(name: "iPhone 14", price: 669990, bought: false, description: "The best phone ever", image: "Some image", link: "https://www.apple.com/iphone-14/", wishlist_id: first_wishlist.id);
Product.create(name: "MacBook Pro M1", price: 129990, bought: false, description: "The best MacBook ever", image: "Some image", link: "https://www.apple.com/macbook-pro-m1/", wishlist_id: first_wishlist.id);
Product.create(name: "Apple Watch Series 9", price: 49990, bought: false, description: "The best watch ever", image: "Some image", link: "https://www.apple.com/apple-watch-series-9/", wishlist_id: first_wishlist.id);

Product.create(name: "iPhone 15", price: 799990, bought: false, description: "The best phone ever", image: "Some image", link: "https://www.apple.com/iphone-15/", wishlist_id: second_wishlist.id);
Product.create(name: "MacBook Pro M2", price: 199990, bought: false, description: "The best MacBook ever", image: "Some image", link: "https://www.apple.com/macbook-pro-m2/", wishlist_id: second_wishlist.id);
Product.create(name: "Apple Watch Series 6", price: 39990, bought: false, description: "The best watch ever", image: "Some image", link: "https://www.apple.com/apple-watch-series-6/", wishlist_id: second_wishlist.id);