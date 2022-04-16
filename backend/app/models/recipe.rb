class Recipe < ApplicationRecord
  has_many :recipe_ingredients

  def self.search_by_ingredients(ingredients)
    # Find recipes that match one of the ingredients
    ingredients_with_wildcards = ingredients.map { |ingredient| "%#{ingredient}%" }
    ingredients_sql_query = Array.new(ingredients_with_wildcards.length) { "name ILIKE ?" }.join(' OR ')

    found_ingredients = Ingredient.where(ingredients_sql_query, *ingredients_with_wildcards)
    found_ingredients_ids = found_ingredients.map(&:id).uniq

    recipe_ingredients = RecipeIngredient.where(ingredient_id: found_ingredients_ids)
    recipe_ingredients_ids = recipe_ingredients.map(&:recipe_id).uniq

    Recipe.where(id: recipe_ingredients_ids)
  end

  def self.search_by_all_ingredients(ingredients)
    # Find recipes that match all the ingredients
    ingredients_with_wildcards = ingredients.map { |ingredient| "%#{ingredient}%" }
    ingredients_sql_query = Array.new(ingredients_with_wildcards.length) { "name ILIKE ?" }.join(' OR ')

    found_ingredients = Ingredient.where(ingredients_sql_query, *ingredients_with_wildcards)
    found_ingredients_ids = found_ingredients.map(&:id).uniq.sort

    recipe_ingredients = RecipeIngredient.where(ingredient_id: found_ingredients_ids)
    recipes_ids_ingredients_names = recipe_ingredients.map{ |recipe_ingredient| [recipe_ingredient.recipe_id, recipe_ingredient.name] }
    recipes_must_have_ingredients = {}

    recipes_ids_ingredients_names.each do |recipe_id_ingredient_name|
      recipe_id, ingredient_name = recipe_id_ingredient_name
      recipes_must_have_ingredients[recipe_id] ||= []
      recipes_must_have_ingredients[recipe_id] << ingredient_name
    end

    selected_recipes_ids = recipes_must_have_ingredients.select! { |_, ingredient_names|
      ingredients.all? { |ingredient|
        ingredient_names.any? { |ingredient_name|
          ingredient_name.include?(ingredient)
        }
      }
    }

    if selected_recipes_ids.nil?
      Recipe.none
    else
      recipes_ids = selected_recipes_ids.keys
      Recipe.where(id: recipes_ids)
    end
  end
end
