class UserIngredient < ApplicationRecord
  has_many :ingredients
  belongs_to :user

  def name
    if self.ingredient_id
      Ingredient.find(self.ingredient_id).name
    else
      ""
    end
  end
end
