import { ReactNode } from 'react'
import { AppBar } from './AppBar'
import { StepWizard } from './StepWizard'
import { Footer } from './Footer'

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <AppBar />
      <main id="main-content" className="flex-1">
        <StepWizard />
        <div className="container mx-auto px-4 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

