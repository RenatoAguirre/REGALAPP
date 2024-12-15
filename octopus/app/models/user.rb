class User < ApplicationRecord
  has_many :wishlists, dependent: :destroy
end