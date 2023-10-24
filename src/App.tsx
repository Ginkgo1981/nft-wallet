import React, { useMemo } from 'react'
import './App.css'
import { Routers } from './routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const App: React.FC = () => {
  const queryClient = useMemo(() => {
    return new QueryClient()
  }, [])
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  )
}

export default App
