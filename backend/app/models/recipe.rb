class Recipe < ApplicationRecord
  has_many :recipe_ingredients

  def self.search_by_ingredients(ingredients)
    # Find recipes that match one of the ingredients
    ingredients_with_wildcards = ingredients.map { |ingredient| "%#{ingredient}%" }
    sql_query = Array.new(ingredients_with_wildcards.length) { "name ILIKE ?" }.join(' OR ')
    found_ingredients = Ingredient.where(sql_query, *ingredients_with_wildcards)
    found_ingredients_ids = found_ingredients.map(&:id).uniq
    recipe_ingredients = RecipeIngredient.where(ingredient_id: found_ingredients_ids)
    recipe_ingredients_ids = recipe_ingredients.map(&:recipe_id).uniq
    Recipe.where(id: recipe_ingredients_ids)
  end

  def self.search_by_all_ingredients(ingredients)
    # Find recipes that match all the ingredients
    ingredients_with_wildcards = ingredients.map { |ingredient| "%#{ingredient}%" }
    sql_query = Array.new(ingredients_with_wildcards.length) { "name ILIKE ?" }.join(' OR ')
    found_ingredients = Ingredient.where(sql_query, *ingredients_with_wildcards)
    found_ingredients_ids = found_ingredients.map(&:id).uniq
    recipe_ingredients = RecipeIngredient.where(ingredient_id: found_ingredients_ids)
    recipe_ingredients_ids = recipe_ingredients.map(&:recipe_id).uniq
    Recipe.where(id: recipe_ingredients_ids)
  end
end
