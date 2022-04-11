class AddIngredientIdToRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    add_column :recipe_ingredients, :ingredient_id, :integer
    add_index  :recipe_ingredients, :ingredient_id
  end
end
