import { useNavigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/actions/WhatsAppButton'
import { PDFExportButton } from '@/components/actions/PDFExportButton'
import { calculatedPriceAtom, orderSummaryAtom } from '@/store/order-store'
import { saveOrder } from '@/services/storage-service'
import { Order } from '@/types/order'
import { CALENDLY_URL } from '@/utils/constants'
import { ArrowLeft, Calendar } from 'lucide-react'

export function ContractPage() {
  const navigate = useNavigate()
  const price = useAtomValue(calculatedPriceAtom)
  const orderSummary = useAtomValue(orderSummaryAtom)
  const [customTerms, setCustomTerms] = useState('')
  const [order, setOrder] = useState<Order | null>(null)

  useEffect(() => {
    if (!price || !orderSummary.serviceType) return

    // Create order object
    const newOrder: Order = {
      id: Date.now().toString(),
      timestamp: new Date().toISOString(),
      serviceType: orderSummary.serviceType,
      package: orderSummary.packageType || 'default',
      customizations: orderSummary.customizations,
      projectDescription: orderSummary.projectDescription || undefined,
      totalPrice: {
        zmw: price.totalZmw,
        usd: price.totalUsd,
      },
      exchangeRate: price.exchangeRate,
    }

    setOrder(newOrder)
    // Save to localStorage
    saveOrder(newOrder)
  }, [orderSummary, price])

  if (!orderSummary.serviceType) {
    return (
      <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-lg font-medium">Please complete your order first</div>
          <Button onClick={() => navigate('/summary')} className="mt-4 shadow-lg">
            Go to Summary
          </Button>
        </div>
      </div>
    )
  }

  if (!order || !price) {
    return (
      <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="text-lg font-medium">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Contract & <span className="text-primary">Invoice</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Review and download your contract and invoice, then proceed to place your order
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
          <CardDescription>Review your order details before proceeding</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-medium text-muted-foreground">Service</div>
              <div className="mt-1">
                {order.serviceType === 'website' 
                  ? 'Website Development'
                  : order.serviceType === 'mobileApp'
                  ? 'Mobile App Development'
                  : order.serviceType === 'consultancy'
                  ? 'IT & Digital Consultancy'
                  : 'Enterprise Systems'}
              </div>
            </div>
            <div>
              <div className="font-medium text-muted-foreground">Total Price</div>
              <div className="mt-1 font-semibold text-primary">
                K{order.totalPrice.zmw.toLocaleString()} (≈${order.totalPrice.usd.toFixed(0)})
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Contract Terms (Optional)</CardTitle>
          <CardDescription>
            Add any custom terms or notes to include in your contract
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="custom-terms">Additional Terms</Label>
            <Textarea
              id="custom-terms"
              placeholder="Enter any additional terms or notes here..."
              value={customTerms}
              onChange={(e) => setCustomTerms(e.target.value)}
              rows={6}
              className="resize-none"
            />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <PDFExportButton
          order={order}
          price={price}
          type="contract"
          customTerms={customTerms}
        />
        <PDFExportButton
          order={order}
          price={price}
          type="invoice"
        />
      </div>

      <Card className="border-2 border-primary bg-gradient-to-br from-primary/5 via-primary/3 to-transparent shadow-lg">
        <CardContent className="pt-8">
          <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Place Your Order?</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Click below to continue on WhatsApp and finalize your order with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <WhatsAppButton order={order} price={price} className="w-full md:w-auto shadow-xl" />
              <Button
                variant="outline"
                size="lg"
                className="w-full md:w-auto shadow-lg min-h-[56px]"
                onClick={() => window.open(CALENDLY_URL, '_blank')}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Book Discovery Call
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-start pt-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Button variant="outline" onClick={() => navigate('/summary')} className="shadow-md min-h-[50px]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Summary
        </Button>
      </div>
    </div>
  )
}

