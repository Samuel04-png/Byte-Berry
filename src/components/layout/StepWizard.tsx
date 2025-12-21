import { useLocation, useNavigate } from 'react-router-dom'
import { Check, Circle } from 'lucide-react'
import { useAtomValue } from 'jotai'
import { selectedServiceAtom, selectedPackageAtom } from '@/store/order-store'
import { cn } from '@/lib/utils'

const steps = [
  { id: 1, name: 'Service Selection', path: '/services' },
  { id: 2, name: 'Feature Customization', path: '/customize' },
  { id: 3, name: 'Pricing Summary', path: '/summary' },
  { id: 4, name: 'Contract & Invoice', path: '/contract' },
  { id: 5, name: 'Order via WhatsApp', path: '/contract' },
]

export function StepWizard() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedService = useAtomValue(selectedServiceAtom)
  const selectedPackage = useAtomValue(selectedPackageAtom)

  const currentStep = steps.findIndex(step => step.path === location.pathname)
  const activeStep = currentStep >= 0 ? currentStep + 1 : 1

  const isStepCompleted = (stepId: number) => {
    if (stepId === 1) return selectedService !== null
    if (stepId === 2) return selectedPackage !== null
    return activeStep > stepId
  }

  const canNavigateToStep = (stepId: number) => {
    if (stepId === 1) return true
    if (stepId === 2) return selectedService !== null
    if (stepId === 3) return selectedPackage !== null
    return activeStep >= stepId
  }

  const handleStepClick = (step: typeof steps[0]) => {
    if (canNavigateToStep(step.id)) {
      navigate(step.path)
    }
  }

  return (
    <div className="w-full bg-background border-b py-3 sm:py-4">
      <div className="container mx-auto px-3 sm:px-4">
        {/* Desktop: Horizontal */}
        <div className="hidden md:flex items-center justify-between">
          {steps.map((step, index) => {
            const isActive = activeStep === step.id
            const isCompleted = isStepCompleted(step.id)
            const canNavigate = canNavigateToStep(step.id)

            return (
              <div key={step.id} className="flex items-center flex-1">
                <button
                  onClick={() => handleStepClick(step)}
                  disabled={!canNavigate}
                  className={cn(
                    "flex items-center space-x-2 transition-colors",
                    canNavigate ? "cursor-pointer hover:text-primary" : "cursor-not-allowed opacity-50"
                  )}
                  aria-label={`Step ${step.id}: ${step.name}`}
                >
                  <div className={cn(
                    "flex items-center justify-center w-8 h-8 rounded-full border-2 transition-colors",
                    isActive && "border-primary bg-primary text-primary-foreground",
                    isCompleted && !isActive && "border-primary bg-primary/10 text-primary",
                    !isCompleted && !isActive && "border-muted-foreground bg-background text-muted-foreground"
                  )}>
                    {isCompleted ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Circle className="h-4 w-4" />
                    )}
                  </div>
                  <span className={cn(
                    "text-sm font-medium",
                    isActive && "text-primary",
                    isCompleted && !isActive && "text-primary",
                    !isCompleted && !isActive && "text-muted-foreground"
                  )}>
                    {step.name}
                  </span>
                </button>
                {index < steps.length - 1 && (
                  <div className={cn(
                    "flex-1 h-0.5 mx-4 transition-colors",
                    isCompleted ? "bg-primary" : "bg-muted"
                  )} />
                )}
              </div>
            )
          })}
        </div>

        {/* Mobile: Simplified */}
        <div className="md:hidden flex items-center justify-center space-x-2">
          <div className="text-sm font-medium text-muted-foreground">
            Step {activeStep} of {steps.length}
          </div>
          <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${(activeStep / steps.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

