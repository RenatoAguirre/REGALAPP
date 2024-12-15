class AddDefaultToBoughtColumn < ActiveRecord::Migration[7.0]
  def change
    change_column_default :products, :bought, false
  end
end
