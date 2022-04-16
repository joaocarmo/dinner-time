export const API_BASE_URL = '/api/v1'

export const search = (
  query: string,
  page: string | number,
  mustContainAll: boolean,
) =>
  `${API_BASE_URL}/search${
    query
      ? `?q=${query}${page ? `&page=${page}` : ''}${
          mustContainAll ? `&must_contain_all=${mustContainAll}` : ''
        }`
      : ''
  }`

export const recipes = (recipeId?: string | number, page?: string | number) =>
  `${API_BASE_URL}/recipes${recipeId ? `/${recipeId}` : ''}${
    page ? `?page=${page}` : ''
  }`
