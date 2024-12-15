class User < ApplicationRecord
  has_many :wishlists, dependent: :destroy
  validates :auth0_id, presence: true, uniqueness: true
end