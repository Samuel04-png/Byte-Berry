import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PriceDisplay } from './PriceDisplay'
import { calculatedPriceAtom, orderSummaryAtom } from '@/store/order-store'
import { Separator } from '@/components/ui/separator'
import { PRICING_DATA } from '@/data/pricing-data'

function PricingSummaryContent() {
  const price = useAtomValue(calculatedPriceAtom)
  const orderSummary = useAtomValue(orderSummaryAtom)

  const getServiceName = () => {
    if (orderSummary.serviceType === 'website') {
      return 'Website Development'
    } else if (orderSummary.serviceType === 'mobileApp') {
      return 'Mobile App Development'
    } else if (orderSummary.serviceType === 'consultancy') {
      return 'IT & Digital Consultancy'
    } else if (orderSummary.serviceType === 'enterprise') {
      return 'Enterprise Systems'
    }
    return 'Service'
  }

  const getPackageName = () => {
    if (!orderSummary.packageType) return null
    
    let pkg
    switch (orderSummary.serviceType) {
      case 'website':
        pkg = PRICING_DATA.websitePackages[orderSummary.packageType]
        break
      case 'mobileApp':
        pkg = PRICING_DATA.mobileAppPackages[orderSummary.packageType]
        break
      case 'consultancy':
        pkg = PRICING_DATA.consultancyPackages[orderSummary.packageType]
        break
      case 'enterprise':
        pkg = PRICING_DATA.enterprisePackages[orderSummary.packageType]
        break
    }
    return pkg?.name || orderSummary.packageType
  }

  if (!price) {
    return (
      <div className="hidden lg:block lg:sticky lg:top-20 lg:self-start">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Loading...</div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="hidden lg:block lg:sticky lg:top-20 lg:self-start">
      <Card className="w-80">
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="text-sm font-medium">Service</div>
            <div className="text-sm text-muted-foreground">{getServiceName()}</div>
            {getPackageName() && (
              <>
                <div className="text-sm font-medium mt-3">Package</div>
                <div className="text-sm text-muted-foreground">{getPackageName()}</div>
              </>
            )}
          </div>

          <Separator />

          {orderSummary.customizations.addOns && orderSummary.customizations.addOns.length > 0 && (
            <>
              <div className="space-y-2">
                <div className="text-sm font-medium">Selected Features</div>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {orderSummary.customizations.addOns.map((addOn) => {
                    const addOnData = Object.entries(PRICING_DATA.addOns).find(
                      ([key]) => key === addOn
                    )?.[1]
                    return (
                      <li key={addOn} className="flex items-center">
                        <span className="mr-2">•</span>
                        {addOnData ? addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) : addOn}
                      </li>
                    )
                  })}
                </ul>
              </div>
              <Separator />
            </>
          )}

          <PriceDisplay
            priceZmw={price.totalZmw}
            priceUsd={price.totalUsd}
            exchangeRate={price.exchangeRate}
            showBreakdown={true}
            breakdown={price.breakdown}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export function PricingSummaryPanel() {
  return (
    <Suspense fallback={
      <div className="hidden lg:block lg:sticky lg:top-20 lg:self-start">
        <Card className="w-80">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Loading...</div>
          </CardContent>
        </Card>
      </div>
    }>
      <PricingSummaryContent />
    </Suspense>
  )
}

