import type { QueryFunctionContext } from 'react-query'
import { search as searchApi, recipes as recipesApi } from './'

export type Ingredient = {
  id: number
  name: string
}

export type RecipeIngredient = {
  id: number
  amount: string
  ingredient: Ingredient
  unit: string
}

export type Recipe = {
  id: number
  title: string
  cook_time: number
  prep_time: number
  recipe_ingredients: RecipeIngredient[]
  ratings: string | number
  cuisine: string
  category: string
  author: string
  image: string
}

export type RecipeResponse = {
  recipes: Recipe[]
}

export type RecipeKey = [
  string,
  string | number | undefined,
  {
    mustContainAll: boolean
    page: string | number
    query: string
  },
]

const fetchRecipes = async ({
  queryKey,
}: QueryFunctionContext<RecipeKey>): Promise<Recipe> => {
  const [, recipeId, { mustContainAll, page, query }] = queryKey
  const whichApi = query
    ? searchApi(query, page, mustContainAll)
    : recipesApi(recipeId, page)
  const response = await fetch(whichApi)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

export default fetchRecipes
