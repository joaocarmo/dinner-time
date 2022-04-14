import type { MouseEventHandler } from 'react'

type FindProps = {
  onClick: MouseEventHandler<HTMLDivElement>
}

const Find = ({ onClick }: FindProps) => {
  return (
    <div
      className="flex mb-12 bg-white relative pointer-events-auto"
      onClick={onClick}
    >
      <button
        type="button"
        className="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="mr-3 flex-none"
        >
          <path
            d="m19 19-3.5-3.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <circle
            cx="11"
            cy="11"
            r="6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></circle>
        </svg>
        Find recipes...
        <span className="ml-auto pl-3 flex-none text-xs font-semibold">⌘K</span>
      </button>
    </div>
  )
}

export default Find
