import type { PropsWithChildren } from 'react'

type ErrorProps = {
  message?: string
  title?: string
}

const Error = ({ children, message, title }: PropsWithChildren<ErrorProps>) => (
  <div role="alert">
    <div className="py-2 px-4 font-bold text-white bg-red-500 rounded-t">
      {title}
    </div>
    <div className="py-3 px-4 text-red-700 bg-red-100 rounded-b border border-t-0 border-red-400">
      <p>{children || message}</p>
    </div>
  </div>
)

Error.defaultProps = {
  title: 'Error',
}

export default Error
