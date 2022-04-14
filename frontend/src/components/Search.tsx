import { useEffect, useRef } from 'react'
import type { ChangeEventHandler } from 'react'

type SearchProps = {
  onChange?: ChangeEventHandler<HTMLInputElement>
  value?: string
}

const Search = ({ onChange, value }: SearchProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef?.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div className="flex mb-12 bg-white relative pointer-events-auto">
      <input
        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300"
        onChange={onChange}
        placeholder="Type ingredients separated by commas..."
        ref={inputRef}
        type="text"
        value={value}
      />
    </div>
  )
}

export default Search
