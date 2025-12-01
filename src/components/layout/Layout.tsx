import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { AppBar } from './AppBar'
import { StepWizard } from './StepWizard'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

const serviceFlowPaths = ['/services', '/customize', '/summary', '/contract']

export function Layout({ children }: LayoutProps) {
  const location = useLocation()
  const showStepWizard = serviceFlowPaths.includes(location.pathname)

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AppBar />
      <main id="main-content" className="flex-1">
        {showStepWizard && <StepWizard />}
        <div className={showStepWizard ? "container mx-auto px-4 py-8" : "w-full"}>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

