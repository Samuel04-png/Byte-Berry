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
    <div className={cn("flex items-center justify-between space-x-4 py-3 border-b last:border-0", className)}>
      <div className="flex items-center space-x-3 flex-1">
        {Icon && (
          <div className={cn(
            "p-2 rounded-lg",
            checked ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
          )}>
            <Icon className="h-4 w-4" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Label htmlFor={id} className="text-sm font-medium cursor-pointer">
              {label}
            </Label>
            {showTooltip && tooltipText && (
              <InfoTooltip content={tooltipText} />
            )}
          </div>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      </div>
      <Switch
        id={id}
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={`Toggle ${label}`}
      />
    </div>
  )
}

