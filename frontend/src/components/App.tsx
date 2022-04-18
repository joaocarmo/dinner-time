import { useCallback, useMemo, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useDebounce } from 'usehooks-ts'
import Find from './Find'
import Footer from './Footer'
import MustContainAll from './MustContainAll'
import ChangePage from './ChangePage'
import Recipes from './Recipes'
import Search from './Search'
import Welcome from './Welcome'
import useUrlParams from '../hooks/useUrlParams'

const App = () => {
  const [urlParams, updateUrlParams] = useUrlParams()
  const {
    mustContainAll: urlMustContainAll,
    page: urlPage,
    query: urlQuery,
  } = urlParams
  const [searchEnabled, setSearchEnabled] = useState(false)
  const [query, setQuery] = useState(urlQuery)
  const [mustContainAll, setMustContainAll] = useState(urlMustContainAll)
  const [page, setPage] = useState(urlPage)
  const debouncedSearchValue = useDebounce<string>(query, 1500)
  const memoizedParams = useMemo(
    () => ({
      mustContainAll,
      page,
      query: debouncedSearchValue,
    }),
    [debouncedSearchValue, mustContainAll, page],
  )
  updateUrlParams(memoizedParams)

  const handleOnFindClick = useCallback(() => {
    setSearchEnabled(true)
  }, [])

  const handleOnSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
      setPage(1)
    },
    [],
  )

  const handleChangeContainAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMustContainAll(event.target.checked)
      setPage(1)
    },
    [],
  )

  const setNextPage = useCallback(() => {
    setPage((page) => page + 1)
  }, [])

  const setPreviousPage = useCallback(() => {
    setPage((page) => page - 1)
  }, [])

  return (
    <div className="container p-8 my-14 mx-auto max-w-screen-lg">
      <Welcome />
      {query || searchEnabled ? (
        <Search onChange={handleOnSearchChange} value={query} />
      ) : (
        <Find onClick={handleOnFindClick} />
      )}
      <MustContainAll
        checked={mustContainAll}
        onChange={handleChangeContainAll}
      />
      <Recipes
        mustContainAll={mustContainAll}
        page={page}
        query={debouncedSearchValue}
      />
      <ChangePage
        onNext={setNextPage}
        onPrevious={setPreviousPage}
        page={page}
      />
      <Footer />
    </div>
  )
}

export default App
