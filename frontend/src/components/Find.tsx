import type { MouseEventHandler } from 'react'

type FindProps = {
  onClick: MouseEventHandler<HTMLDivElement>
}

const Find = ({ onClick }: FindProps) => {
  return (
    <div
      className="flex relative mb-12 bg-white pointer-events-auto"
      onClick={onClick}
    >
      <button
        type="button"
        className="flex items-center py-1.5 pr-3 pl-2 w-full text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 hover:ring-slate-300 shadow-sm"
      >
        <svg
          width="24"
          height="24"
          fill="none"
          aria-hidden="true"
          className="flex-none mr-3"
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
        <span className="flex-none pl-3 ml-auto text-xs font-semibold">⌘K</span>
      </button>
    </div>
  )
}

export default Find
