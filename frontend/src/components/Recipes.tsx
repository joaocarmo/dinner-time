import { useQuery } from 'react-query'
import Error from './Error'
import Loading from './Loading'
import RecipeCard from './RecipeCard'
import fetchRecipes from '../api/fetchRecipes'
import type { RecipeKey, RecipeResponse } from '../api/fetchRecipes'

type RecipesProps = {
  mustContainAll: boolean
  page: number
  query: string
}

const Recipes = ({ mustContainAll, page, query }: RecipesProps) => {
  const { isLoading, data } = useQuery<
    unknown,
    unknown,
    RecipeResponse,
    RecipeKey
  >(['recipes', undefined, { mustContainAll, page, query }], fetchRecipes)
  const searchWords = query.split(',').map((word) => word.trim())

  if (isLoading) {
    return <Loading />
  }

  if (!data?.recipes?.length) {
    return (
      <Error>
        No{page > 1 ? ' more' : ''} recipes available
        {query ? ` for ${query}` : ''}.
      </Error>
    )
  }

  return (
    <>
      {data.recipes.map((recipe) => (
        <RecipeCard key={recipe.id} data={recipe} searchWords={searchWords} />
      ))}
    </>
  )
}

export default Recipes
