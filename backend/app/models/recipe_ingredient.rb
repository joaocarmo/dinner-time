class RecipeIngredient < ApplicationRecord
  has_many :ingredients
  belongs_to :recipe

  def name
    Ingredient.find(self.ingredient_id).name
  end
end
