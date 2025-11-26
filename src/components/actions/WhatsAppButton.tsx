import { Button } from '@/components/ui/button'
import { MessageCircle } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/utils/constants'
import { Order } from '@/types/order'
import { CalculatedPrice } from '@/types/pricing'
import { PRICING_DATA } from '@/data/pricing-data'

interface WhatsAppButtonProps {
  order: Order
  price: CalculatedPrice
  className?: string
}

export function WhatsAppButton({ order, price, className }: WhatsAppButtonProps) {
  const generateMessage = () => {
    const serviceName = order.serviceType === 'website' 
      ? 'Website Development'
      : order.serviceType === 'mobileApp'
      ? 'Mobile App Development'
      : order.serviceType === 'consultancy'
      ? 'IT & Digital Consultancy'
      : 'Enterprise Systems'

    let packageInfo = ''
    if (order.package && order.serviceType === 'website') {
      const pkg = PRICING_DATA.websitePackages[order.package]
      packageInfo = `\nPackage: ${pkg?.name || order.package}`
    }

    let featuresInfo = ''
    if (order.customizations.addOns && order.customizations.addOns.length > 0) {
      featuresInfo = '\n\nSelected Features:'
      order.customizations.addOns.forEach((addOn) => {
        const formatted = addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
        featuresInfo += `\n• ${formatted}`
      })
    }

    const message = `Hello Byte&Berry! 👋

I'm interested in:
• Service: ${serviceName}${packageInfo}
• Total: K${price.totalZmw.toLocaleString()} (≈$${price.totalUsd.toFixed(0)})${featuresInfo}

Let's discuss this further!`

    return message
  }

  const handleClick = () => {
    const message = generateMessage()
    const encodedMessage = encodeURIComponent(message)
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`
    window.open(url, '_blank')
  }

  return (
    <Button
      onClick={handleClick}
      className={`bg-[#25D366] hover:bg-[#20BA5A] text-white ${className}`}
      size="lg"
    >
      <MessageCircle className="mr-2 h-5 w-5" />
      Proceed to WhatsApp Order
    </Button>
  )
}

