import { useCallback, useState } from 'react'
import Find from './Find'
import Search from './Search'
import Recipes from './Recipes'

const App = () => {
  const [searchEnabled, setSearchEnabled] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleOnFindClick = useCallback(() => {
    setSearchEnabled(true)
  }, [])

  const handleOnSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value)
    },
    [],
  )

  return (
    <div className="container p-8 my-14 mx-auto max-w-screen-lg">
      {searchEnabled ? (
        <Search value={searchValue} onChange={handleOnSearchChange} />
      ) : (
        <Find onClick={handleOnFindClick} />
      )}
      <Recipes query={searchValue} />
    </div>
  )
}

export default App
