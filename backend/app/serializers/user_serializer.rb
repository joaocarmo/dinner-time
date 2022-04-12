class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :user_ingredients
end
