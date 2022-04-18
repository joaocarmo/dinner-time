import { useCallback, useRef } from 'react'

type URLParams = {
  mustContainAll: boolean
  page: number
  query: string
}

type UpdateURLParams = (params: URLParams) => void

const getParams = () => {
  const params = new URLSearchParams(window.location.search)

  const mustContainAll = params.get('mustContainAll') !== 'false'
  const page = parseInt(params.get('page') || '1', 10)
  const query = params.get('query') || ''

  return { mustContainAll, page, query }
}

const useUrlParams = (): [URLParams, UpdateURLParams] => {
  const params = useRef<URLParams>(getParams())

  const updateParams = useCallback((params: URLParams) => {
    const url = new URL(window.location.href)

    url.searchParams.set('mustContainAll', params.mustContainAll.toString())
    url.searchParams.set('page', params.page.toString())
    url.searchParams.set('query', params.query)

    window.history.pushState(null, '', url.toString())
  }, [])

  return [params.current, updateParams]
}

export default useUrlParams
