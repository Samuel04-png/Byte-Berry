import { ServiceType } from '@/types/service'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Globe, Smartphone, Briefcase, Building2 } from 'lucide-react'

interface ServiceCardProps {
  serviceType: ServiceType
  name: string
  description: string
  selected: boolean
  onSelect: (type: ServiceType) => void
}

const icons = {
  website: Globe,
  mobileApp: Smartphone,
  consultancy: Briefcase,
  enterprise: Building2,
}

export function ServiceCard({ serviceType, name, description, selected, onSelect }: ServiceCardProps) {
  const Icon = icons[serviceType]

  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-lg hover:scale-105",
        selected && "ring-2 ring-primary border-primary"
      )}
      onClick={() => onSelect(serviceType)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(serviceType)
        }
      }}
      aria-pressed={selected}
    >
      <CardHeader>
        <div className="flex items-center space-x-3">
          <div className={cn(
            "p-3 rounded-lg",
            selected ? "bg-primary text-primary-foreground" : "bg-muted"
          )}>
            <Icon className="h-6 w-6" />
          </div>
          <CardTitle className="text-xl">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

