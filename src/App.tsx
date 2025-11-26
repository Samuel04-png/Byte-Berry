import { Provider } from 'jotai'
import { BrowserRouter } from 'react-router-dom'
import { Suspense } from 'react'
import { Router } from './router'
import { TooltipProvider } from '@/components/ui/tooltip'
import { ErrorBoundary } from '@/components/ErrorBoundary'

function App() {
  return (
    <ErrorBoundary>
      <Provider>
        <TooltipProvider>
          <BrowserRouter>
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
              <Router />
            </Suspense>
          </BrowserRouter>
        </TooltipProvider>
      </Provider>
    </ErrorBoundary>
  )
}

export default App

