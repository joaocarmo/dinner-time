class AddIngredientIdToUserIngredients < ActiveRecord::Migration[7.0]
  def change
    add_column :user_ingredients, :ingredient_id, :integer
    add_index  :user_ingredients, :ingredient_id
  end
end
