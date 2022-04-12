import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import './index.css'
import App from './components/App'

const container = document.getElementById('root')

if (container) {
  const queryClient = new QueryClient()
  const root = createRoot(container)

  root.render(
    <StrictMode>
      {/* @ts-ignore */}
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </StrictMode>,
  )
}
