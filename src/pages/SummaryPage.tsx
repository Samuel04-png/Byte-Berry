import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { Suspense } from 'react'
import { PricingSummaryPanel } from '@/components/pricing/PricingSummaryPanel'
import { PricingBottomSheet } from '@/components/pricing/PricingBottomSheet'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { orderSummaryAtom } from '@/store/order-store'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { PRICING_DATA } from '@/data/pricing-data'

export function SummaryPage() {
  const navigate = useNavigate()
  const orderSummary = useAtomValue(orderSummaryAtom)
  
  // Show loading if no service selected
  if (!orderSummary.serviceType) {
    return (
      <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-lg font-medium">Please select a service first</div>
          <Button onClick={() => navigate('/services')} className="mt-4 shadow-lg">
            Go to Service Selection
          </Button>
        </div>
      </div>
    )
  }

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        <div className="flex-1 space-y-8">
          <div className="text-center lg:text-left space-y-4 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Review Your <span className="text-primary">Order</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Please review your selections and pricing before proceeding
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Service Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="text-sm font-medium text-muted-foreground">Service Type</div>
                <div className="text-lg font-semibold mt-1">{getServiceName()}</div>
              </div>
              {getPackageName() && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Package</div>
                  <div className="text-lg font-semibold mt-1">{getPackageName()}</div>
                </div>
              )}
              {orderSummary.customizations.pages && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Pages</div>
                  <div className="text-lg font-semibold mt-1">{orderSummary.customizations.pages}</div>
                </div>
              )}
              {orderSummary.customizations.platform && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Platform</div>
                  <div className="text-lg font-semibold mt-1">
                    {orderSummary.customizations.platform === 'both' 
                      ? 'iOS & Android' 
                      : orderSummary.customizations.platform === 'ios'
                      ? 'iOS Only'
                      : 'Android Only'}
                  </div>
                </div>
              )}
              {orderSummary.customizations.numberOfUsers && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Number of Users</div>
                  <div className="text-lg font-semibold mt-1">{orderSummary.customizations.numberOfUsers}</div>
                </div>
              )}
              {orderSummary.customizations.modules && orderSummary.customizations.modules.length > 0 && (
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Selected Modules</div>
                  <div className="text-lg font-semibold mt-1">
                    {orderSummary.customizations.modules.map(m => m.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())).join(', ')}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {orderSummary.customizations.addOns && orderSummary.customizations.addOns.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Selected Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {orderSummary.customizations.addOns.map((addOn) => {
                    const addOnData = Object.entries(PRICING_DATA.addOns).find(
                      ([key]) => key === addOn
                    )?.[1]
                    return (
                      <li key={addOn} className="flex items-center justify-between py-2 border-b last:border-0">
                        <span className="text-sm">
                          {addOnData ? addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) : addOn}
                        </span>
                        <span className="text-sm font-medium">
                          {typeof addOnData?.priceZmw === 'number'
                            ? `K${addOnData.priceZmw.toLocaleString()}`
                            : addOnData?.priceZmw.min
                            ? `K${addOnData.priceZmw.min.toLocaleString()}+`
                            : ''}
                        </span>
                      </li>
                    )
                  })}
                </ul>
              </CardContent>
            </Card>
          )}

          {orderSummary.customizations.hosting && (
            <Card>
              <CardHeader>
                <CardTitle>Hosting & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  {orderSummary.customizations.hostingType === 'website' ? 'Website Hosting' : 'App Maintenance'}:{' '}
                  {orderSummary.customizations.hosting}
                </div>
              </CardContent>
            </Card>
          )}

          {orderSummary.projectDescription && (
            <Card>
              <CardHeader>
                <CardTitle>Project Description</CardTitle>
                <CardDescription>Your project requirements and goals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground whitespace-pre-wrap">
                  {orderSummary.projectDescription}
                </p>
              </CardContent>
            </Card>
          )}

          <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button variant="outline" onClick={() => navigate('/customize')} className="shadow-md min-h-[50px]">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={() => navigate('/contract')} size="lg" className="shadow-xl min-h-[50px]">
              Continue to Contract
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <Suspense fallback={null}>
          <PricingSummaryPanel />
        </Suspense>
        <Suspense fallback={null}>
          <PricingBottomSheet />
        </Suspense>
      </div>
    </div>
  )
}

