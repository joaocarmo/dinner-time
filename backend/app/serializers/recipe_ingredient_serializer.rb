class RecipeIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :name, :unit

  belongs_to :recipe
end
