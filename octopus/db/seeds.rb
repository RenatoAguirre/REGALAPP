# Create Users
first_user = User.create(name: "John Doe", auth0_id: "123456789")
second_user = User.create(name: "Jane Smith", auth0_id: "987654321")

# Create Wishlists
first_wishlist = Wishlist.create(user: first_user)
second_wishlist = Wishlist.create(user: second_user)

# Create Products for the first wishlist
Product.create!(name: "iPhone 14", price: 669990, bought: false, description: "The best phone ever", image: "Some image", link: "https://www.apple.com/iphone-14/", wishlist: first_wishlist)

Product.create!(
  name: "MacBook Pro M1", 
  price: 129990, 
  bought: false, 
  description: "The best MacBook ever", 
  image: "Some image", 
  link: "https://www.apple.com/macbook-pro-m1/", 
  wishlist: first_wishlist
)

Product.create!(
  name: "Apple Watch Series 9", 
  price: 49990, 
  bought: false, 
  description: "The best watch ever", 
  image: "Some image", 
  link: "https://www.apple.com/apple-watch-series-9/", 
  wishlist: first_wishlist
)

# Create Products for the second wishlist
Product.create(
  name: "iPhone 15", 
  price: 799990, 
  bought: false, 
  description: "The best phone ever", 
  image: "Some image", 
  link: "https://www.apple.com/iphone-15/", 
  wishlist: second_wishlist
)

Product.create(
  name: "MacBook Pro M2", 
  price: 199990, 
  bought: false, 
  description: "The best MacBook ever", 
  image: "Some image", 
  link: "https://www.apple.com/macbook-pro-m2/", 
  wishlist: second_wishlist
)

Product.create(
  name: "Apple Watch Series 6", 
  price: 39990, 
  bought: false, 
  description: "The best watch ever", 
  image: "Some image", 
  link: "https://www.apple.com/apple-watch-series-6/", 
  wishlist: second_wishlist
)
