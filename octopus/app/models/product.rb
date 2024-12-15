class Product < ApplicationRecord
  belongs_to :wishlist
  validates :name, presence: true
  validates :link, presence: true
  validates :wishlist_id, presence: true
end
