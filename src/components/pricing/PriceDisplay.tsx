import { useMemo } from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

interface PriceDisplayProps {
  priceZmw: number
  priceUsd: number
  exchangeRate: number
  showBreakdown?: boolean
  breakdown?: {
    base: { zmw: number; usd: number }
    addOns: { zmw: number; usd: number }
    hosting: { zmw: number; usd: number }
  }
}

export function PriceDisplay({
  priceZmw,
  priceUsd,
  showBreakdown = true,
  breakdown,
}: PriceDisplayProps) {
  const formattedZmw = useMemo(() => {
    return new Intl.NumberFormat('en-ZM', {
      style: 'currency',
      currency: 'ZMW',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(priceZmw)
  }, [priceZmw])

  const formattedUsd = useMemo(() => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(priceUsd)
  }, [priceUsd])

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="text-3xl font-bold text-primary">{formattedZmw}</div>
        <div className="text-lg text-muted-foreground">≈ {formattedUsd}</div>
      </div>

      {showBreakdown && breakdown && (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="breakdown">
            <AccordionTrigger className="text-sm">View Price Breakdown</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Base Package</span>
                  <span className="font-medium">
                    {new Intl.NumberFormat('en-ZM', {
                      style: 'currency',
                      currency: 'ZMW',
                      minimumFractionDigits: 0,
                    }).format(breakdown.base.zmw)}
                  </span>
                </div>
                {breakdown.addOns.zmw > 0 && (
                  <>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Add-ons</span>
                      <span className="font-medium">
                        {new Intl.NumberFormat('en-ZM', {
                          style: 'currency',
                          currency: 'ZMW',
                          minimumFractionDigits: 0,
                        }).format(breakdown.addOns.zmw)}
                      </span>
                    </div>
                  </>
                )}
                {breakdown.hosting.zmw > 0 && (
                  <>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Hosting (Monthly)</span>
                      <span className="font-medium">
                        {new Intl.NumberFormat('en-ZM', {
                          style: 'currency',
                          currency: 'ZMW',
                          minimumFractionDigits: 0,
                        }).format(breakdown.hosting.zmw)}
                      </span>
                    </div>
                  </>
                )}
                <Separator />
                <div className="flex justify-between text-base font-semibold pt-2">
                  <span>Total</span>
                  <span className="text-primary">{formattedZmw}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  )
}

