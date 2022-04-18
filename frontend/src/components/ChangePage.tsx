type ChangePageProps = {
  onNext: () => void
  onPrevious: () => void
  page: number
}

const nextArrow = (
  <svg
    className="overflow-visible ml-3 text-indigo-300 group-hover:text-indigo-400"
    width="3"
    height="6"
    viewBox="0 0 3 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0L3 3L0 6"></path>
  </svg>
)

const previousArrow = (
  <svg
    className="overflow-visible mr-3 text-indigo-300 group-hover:text-indigo-400 rotate-180"
    width="3"
    height="6"
    viewBox="0 0 3 6"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M0 0L3 3L0 6"></path>
  </svg>
)

const ChangePage = ({ onNext, onPrevious, page }: ChangePageProps) => (
  <div className="flex justify-center mt-8 space-x-4">
    {page > 1 && (
      <button
        onClick={onPrevious}
        className="group inline-flex items-center px-3 h-9 text-sm font-semibold text-indigo-600 hover:text-indigo-700 whitespace-nowrap bg-indigo-50 hover:bg-indigo-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {previousArrow}
        Previous
      </button>
    )}
    <span className="group inline-flex items-center px-3 h-9 text-sm font-semibold text-indigo-600">
      {page}
    </span>
    <button
      onClick={onNext}
      className="group inline-flex items-center px-3 h-9 text-sm font-semibold text-indigo-600 hover:text-indigo-700 whitespace-nowrap bg-indigo-50 hover:bg-indigo-200 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      Next
      {nextArrow}
    </button>
  </div>
)

export default ChangePage
