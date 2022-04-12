export const API_BASE_URL = '/api/v1'

export const recipes = (recipeId?: string | number, page?: string | number) =>
  `${API_BASE_URL}/recipes${recipeId ? `/${recipeId}` : ''}${
    page ? `?page=${page}` : ''
  }`
