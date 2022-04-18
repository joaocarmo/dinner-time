export const API_BASE_URL = 'api/v1'

export const getSelfBaseUrl = () => {
  const url = new URL(window.location.href)
  return url.origin
}

export const search = (
  query: string,
  page: string | number,
  mustContainAll: boolean,
) => {
  const base = `${getSelfBaseUrl()}/${API_BASE_URL}`
  const url = new URL(`${base}/search`)

  url.searchParams.set('q', query)
  url.searchParams.set('page', page.toString())
  url.searchParams.set('must_contain_all', mustContainAll.toString())

  return url.toString()
}

export const recipes = (recipeId?: string | number, page?: string | number) => {
  const base = `${getSelfBaseUrl()}/${API_BASE_URL}`
  const url = new URL(`${base}/recipes${recipeId ? `/${recipeId}` : ''}`)

  if (page) {
    url.searchParams.set('page', page.toString())
  }

  return url.toString()
}
