import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { FileText, Receipt, Loader2 } from 'lucide-react'
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
  const [loading, setLoading] = useState(false)

  const handleExport = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setLoading(true)
    try {
      if (type === 'contract') {
        await generateContract(order, price, customTerms)
      } else {
        await generateInvoice(order, price)
      }
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Failed to generate PDF. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const label = type === 'contract' ? 'Download Contract' : 'Download Invoice'
  const Icon = type === 'contract' ? FileText : Receipt

  return (
    <Button
      type="button"
      onClick={handleExport}
      variant={variant}
      size={size}
      className="w-full"
      disabled={loading}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </>
      )}
    </Button>
  )
}

