class UserIngredientSerializer < ActiveModel::Serializer
  attributes :id, :amount, :name, :unit

  belongs_to :user
end
