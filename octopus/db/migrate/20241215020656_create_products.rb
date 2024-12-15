class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.boolean :bought
      t.text :description, null: true
      t.string :image, null: true
      t.string :link, null: true
      t.integer :order

      t.timestamps
    end
  end
end
