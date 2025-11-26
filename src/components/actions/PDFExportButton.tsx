import { Button } from '@/components/ui/button'
import { FileText, Receipt } from 'lucide-react'
import { Order } from '@/types/order'
import { CalculatedPrice } from '@/types/pricing'
import { generateContract } from '@/utils/contract-generator'
import { generateInvoice } from '@/utils/invoice-generator'

interface PDFExportButtonProps {
  order: Order
  price: CalculatedPrice
  type: 'contract' | 'invoice'
  customTerms?: string
  variant?: 'default' | 'outline'
  size?: 'default' | 'sm' | 'lg' | 'icon'
}

export function PDFExportButton({
  order,
  price,
  type,
  customTerms,
  variant = 'outline',
  size = 'default',
}: PDFExportButtonProps) {
  const handleExport = () => {
    if (type === 'contract') {
      generateContract(order, price, customTerms)
    } else {
      generateInvoice(order, price)
    }
  }

  const label = type === 'contract' ? 'Download Contract' : 'Download Invoice'
  const Icon = type === 'contract' ? FileText : Receipt

  return (
    <Button
      onClick={handleExport}
      variant={variant}
      size={size}
      className="w-full"
    >
      <Icon className="mr-2 h-4 w-4" />
      {label}
    </Button>
  )
}

