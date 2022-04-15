class SearchController < ApplicationController
  # GET /search
  def index
    query = params[:q]

    if query.nil?
      ingredients = []
    else
      ingredients = query.split(',').map(&:strip)
    end

    @recipes = Recipe.search_by_ingredients(ingredients).order(:title).page params[:page]
    count = Recipe.count

    serialized_recipes = ActiveModel::Serializer::CollectionSerializer.new(@recipes, each_serializer: RecipeSerializer)

    render json: { recipes: serialized_recipes, page: params[:page] || 1, per_page: @recipes.count, count: count }, each_serializer: RecipeSerializer
  end
end
