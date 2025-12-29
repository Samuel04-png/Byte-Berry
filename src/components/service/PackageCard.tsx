import { Package } from '@/types/package'
import { ServiceType } from '@/types/service'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { PriceDisplay } from '@/components/pricing/PriceDisplay'
import { DetailedDeliverables } from './DetailedDeliverables'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface PackageCardProps {
  package: Package
  selected: boolean
  onSelect: (packageId: string) => void
  serviceType?: ServiceType
}

export function PackageCard({ package: pkg, selected, onSelect, serviceType }: PackageCardProps) {
  return (
    <Card
      className={cn(
        "cursor-pointer transition-all duration-200 hover:shadow-lg",
        selected && "ring-2 ring-primary border-primary"
      )}
      onClick={() => onSelect(pkg.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onSelect(pkg.id)
        }
      }}
      aria-pressed={selected}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-2xl">{pkg.name}</CardTitle>
          {pkg.mostPopular && (
            <Badge variant="default" className="ml-2">Most Popular</Badge>
          )}
        </div>
        <CardDescription className="text-base mt-2">{pkg.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <PriceDisplay
            priceZmw={typeof pkg.priceZmw === 'object' ? pkg.priceZmw.min ?? pkg.priceZmw.fixed ?? 0 : pkg.priceZmw}
            priceUsd={typeof pkg.priceUsd === 'object' ? pkg.priceUsd.min ?? pkg.priceUsd.fixed ?? 0 : pkg.priceUsd}
            exchangeRate={25}
            showBreakdown={false}
          />
          {pkg.pages && (
            <div className="text-sm text-muted-foreground">
              {pkg.pages.max === 999 ? 'Custom Scope' : `Pages: ${pkg.pages.min} - ${pkg.pages.max}`}
            </div>
          )}
          <div className="space-y-2">
            <div className="text-sm font-medium">Features:</div>
            <ul className="space-y-1">
              {pkg.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-muted-foreground">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col space-y-2">
        {serviceType && (
          <DetailedDeliverables package={pkg} serviceType={serviceType} />
        )}
        {selected && (
          <Badge variant="outline" className="w-full justify-center">
            Selected
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}

