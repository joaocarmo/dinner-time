import type { QueryFunctionContext } from 'react-query'
import { search as searchApi, recipes as recipesApi } from './'

export type Ingredient = {
  id: number
  amount: string
  name: string
  unit: string
}

export type Recipe = {
  id: number
  title: string
  cook_time: number
  prep_time: number
  recipe_ingredients?: Ingredient[]
  ratings: string | number
  cuisine: string
  category: string
  author: string
  image: string
  created_at?: string
  updated_at?: string
}

export type RecipeResponse = {
  recipes: Recipe[]
}

export type RecipeKey = [
  string,
  string | number | undefined,
  {
    query: string
    page: string | number
  },
]

const fetchRecipes = async ({
  queryKey,
}: QueryFunctionContext<RecipeKey>): Promise<Recipe> => {
  const [, recipeId, { query, page }] = queryKey
  const whichApi = query ? searchApi(query) : recipesApi(recipeId, page)
  const response = await fetch(whichApi)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json()
}

export default fetchRecipes
