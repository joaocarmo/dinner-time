class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :author, :category, :cook_time, :cuisine, :image, :prep_time, :ratings, :title

  has_many :recipe_ingredients

  def recipe_ingredients
    object.recipe_ingredients.map do |recipe_ingredient|
      {
        id: recipe_ingredient.id,
        ingredient: {
          id: recipe_ingredient.ingredient_id,
          name: recipe_ingredient.name
        },
        amount: recipe_ingredient.amount,
        unit: recipe_ingredient.unit
      }
    end
  end
end
