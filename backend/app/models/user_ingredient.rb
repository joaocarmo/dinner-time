class UserIngredient < ApplicationRecord
  has_many :ingredients
  belongs_to :user

  def name
    Ingredient.find(self.ingredient_id).name
  end
end
