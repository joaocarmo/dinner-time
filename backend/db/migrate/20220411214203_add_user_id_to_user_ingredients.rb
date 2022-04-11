class AddUserIdToUserIngredients < ActiveRecord::Migration[7.0]
  def change
    add_column :user_ingredients, :user_id, :integer
    add_index  :user_ingredients, :user_id
  end
end
