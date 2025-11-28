import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { InfoTooltip } from './InfoTooltip'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FeatureToggleProps {
  id: string
  label: string
  description?: string
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  icon?: LucideIcon
  showTooltip?: boolean
  tooltipText?: string
  className?: string
}

export function FeatureToggle({
  id,
  label,
  description,
  checked,
  onCheckedChange,
  icon: Icon,
  showTooltip,
  tooltipText,
  className,
}: FeatureToggleProps) {
  return (
    <div className={cn("flex items-center justify-between space-x-3 sm:space-x-4 py-3 sm:py-4 border-b last:border-0 min-h-[60px] sm:min-h-[auto]", className)}>
      <div className="flex items-center space-x-2 sm:space-x-3 flex-1 min-w-0">
        {Icon && (
          <div className={cn(
            "p-1.5 sm:p-2 rounded-lg flex-shrink-0",
            checked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
          )}>
            <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-1.5 sm:space-x-2 flex-wrap">
            <Label htmlFor={id} className="text-xs sm:text-sm font-medium cursor-pointer break-words">
              {label}
            </Label>
            {showTooltip && tooltipText && (
              <InfoTooltip content={tooltipText} />
            )}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-relaxed break-words">{description}</p>
          )}
        </div>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={`Toggle ${label}`}
        className="flex-shrink-0"
      />
    </div>
  )
}

