class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :author, :category, :cook_time, :cuisine, :image, :prep_time, :ratings, :title

  has_many :recipe_ingredients
end
