import { useQuery } from 'react-query'
import fetchRecipes from '../api/fetchRecipes'
import type { RecipeKey, RecipeResponse } from '../api/fetchRecipes'
import RecipeCard from './RecipeCard'

type RecipesProps = {
  query: string
}

const Recipes = ({ query }: RecipesProps) => {
  const page = 1
  const { isLoading, data } = useQuery<
    unknown,
    unknown,
    RecipeResponse,
    RecipeKey
  >(['recipes', undefined, { query, page }], fetchRecipes)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (!data?.recipes?.length) {
    return <div>No recipes</div>
  }

  return (
    <>
      {data.recipes.map((recipe) => (
        <RecipeCard key={recipe.id} data={recipe} />
      ))}
    </>
  )
}

export default Recipes
