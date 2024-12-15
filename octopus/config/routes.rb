Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :products
  resources :wishlists

  get 'me/wishlist', to: 'wishlists#me_wishlist'
  put 'me/wishlist', to: 'wishlists#update'
  get 'wishlist/:id', to: 'wishlists#other_usher_wishlist'
end
