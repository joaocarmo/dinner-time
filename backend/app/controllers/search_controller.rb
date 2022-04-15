class SearchController < ApplicationController
  # GET /search
  def index
    query = params[:q]

    if query.nil?
      ingredients = []
    else
      ingredients = query.split(',').map(&:strip)
    end

    # Find recipes that match the ingredients
    ingredients_with_wildcards = ingredients.map { |ingredient| "%#{ingredient}%" }
    sql_query = Array.new(ingredients_with_wildcards.length) { "name ILIKE ?" }.join(' OR ')
    found_ingredients = Ingredient.where(sql_query, *ingredients_with_wildcards)
    @recipe_ingredients = RecipeIngredient.where(ingredient_id: found_ingredients.map(&:id))
    @recipes = Recipe.where(id: @recipe_ingredients.map(&:recipe_id)).order(:title).page params[:page]
    count = Recipe.count

    serialized_recipes = ActiveModel::Serializer::CollectionSerializer.new(@recipes, each_serializer: RecipeSerializer)

    render json: { recipes: serialized_recipes, page: params[:page] || 1, per_page: @recipes.count, count: count }, each_serializer: RecipeSerializer
  end
end
