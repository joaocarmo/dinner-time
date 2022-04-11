class AddRecipeIdToRecipeIngredients < ActiveRecord::Migration[7.0]
  def change
    add_column :recipe_ingredients, :recipe_id, :integer
    add_index  :recipe_ingredients, :recipe_id
  end
end
