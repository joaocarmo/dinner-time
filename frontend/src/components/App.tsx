import { useCallback, useState } from 'react'
import type { ChangeEvent } from 'react'
import { useDebounce } from 'usehooks-ts'
import Find from './Find'
import Footer from './Footer'
import MustContainAll from './MustContainAll'
import Recipes from './Recipes'
import Search from './Search'
import Welcome from './Welcome'

const App = () => {
  const [searchEnabled, setSearchEnabled] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const [mustContainAll, setMustContainAll] = useState(true)
  const debouncedSearchValue = useDebounce<string>(searchValue, 700)

  const handleOnFindClick = useCallback(() => {
    setSearchEnabled(true)
  }, [])

  const handleOnSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
    },
    [],
  )

  const handleChangeContainAll = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setMustContainAll(event.target.checked)
    },
    [],
  )

  return (
    <div className="container p-8 my-14 mx-auto max-w-screen-lg">
      <Welcome />
      {searchEnabled ? (
        <Search onChange={handleOnSearchChange} value={searchValue} />
      ) : (
        <Find onClick={handleOnFindClick} />
      )}
      <MustContainAll
        checked={mustContainAll}
        onChange={handleChangeContainAll}
      />
      <Recipes mustContainAll={mustContainAll} query={debouncedSearchValue} />
      <Footer />
    </div>
  )
}

export default App
