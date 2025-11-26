import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { PriceDisplay } from './PriceDisplay'
import { calculatedPriceAtom, orderSummaryAtom } from '@/store/order-store'
import { PRICING_DATA } from '@/data/pricing-data'
import { ShoppingCart } from 'lucide-react'

function PricingBottomSheetContent() {
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

  const formattedTotal = price
    ? new Intl.NumberFormat('en-ZM', {
        style: 'currency',
        currency: 'ZMW',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(price.totalZmw)
    : 'K0'

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            className="w-full rounded-none h-16 text-lg font-semibold"
            size="lg"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            View Summary: {formattedTotal}
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-[80vh]">
          <SheetHeader>
            <SheetTitle>Order Summary</SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Service</div>
              <div className="text-sm text-muted-foreground">{getServiceName()}</div>
            </div>

            {orderSummary.customizations.addOns && orderSummary.customizations.addOns.length > 0 && (
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
            )}

            {price ? (
              <PriceDisplay
                priceZmw={price.totalZmw}
                priceUsd={price.totalUsd}
                exchangeRate={price.exchangeRate}
                showBreakdown={true}
                breakdown={price.breakdown}
              />
            ) : (
              <div className="text-sm text-muted-foreground">Loading...</div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export function PricingBottomSheet() {
  return (
    <Suspense fallback={null}>
      <PricingBottomSheetContent />
    </Suspense>
  )
}

