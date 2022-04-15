class SearchController < ApplicationController
  # GET /search
  def index
    query = params[:q]
    must_contain_all = params[:must_contain_all] == "true"

    if query.nil?
      ingredients = []
    else
      ingredients = query.split(',').map(&:strip)
    end

    if must_contain_all
      @recipes = Recipe.search_by_all_ingredients(ingredients).order(:title).page params[:page]
    else
      @recipes = Recipe.search_by_ingredients(ingredients).order(:title).page params[:page]
    end
    count = Recipe.count

    serialized_recipes = ActiveModel::Serializer::CollectionSerializer.new(@recipes, each_serializer: RecipeSerializer)

    render json: { recipes: serialized_recipes, page: params[:page] || 1, per_page: @recipes.count, count: count }, each_serializer: RecipeSerializer
  end
end
