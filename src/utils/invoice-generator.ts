import jsPDF from 'jspdf'
import { Order } from '@/types/order'
import { CalculatedPrice } from '@/types/pricing'
import { PRICING_DATA } from '@/data/pricing-data'

export function generateInvoice(order: Order, price: CalculatedPrice): void {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - 2 * margin
  let yPos = margin

  // Header
  doc.setFontSize(24)
  doc.setTextColor(139, 0, 75) // Deep berry red
  doc.text('Byte&Berry Invoice', margin, yPos)
  yPos += 15

  // Invoice Number and Date
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text(`Invoice #: INV-${order.id.slice(-8).toUpperCase()}`, margin, yPos)
  yPos += 5
  doc.text(`Date: ${new Date(order.timestamp).toLocaleDateString()}`, margin, yPos)
  yPos += 5
  doc.text(`Due Date: ${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}`, margin, yPos)
  yPos += 20

  // Service Details
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Service Details', margin, yPos)
  yPos += 10

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  const serviceName = order.serviceType === 'website' 
    ? 'Website Development'
    : order.serviceType === 'mobileApp'
    ? 'Mobile App Development'
    : order.serviceType === 'consultancy'
    ? 'IT & Digital Consultancy'
    : 'Enterprise Systems'

  doc.text(`Service: ${serviceName}`, margin, yPos)
  yPos += 7

  if (order.package) {
    let pkg
    switch (order.serviceType) {
      case 'website':
        pkg = PRICING_DATA.websitePackages[order.package]
        break
      case 'mobileApp':
        pkg = PRICING_DATA.mobileAppPackages[order.package]
        break
      case 'consultancy':
        pkg = PRICING_DATA.consultancyPackages[order.package]
        break
      case 'enterprise':
        pkg = PRICING_DATA.enterprisePackages[order.package]
        break
    }
    const packageName = pkg?.name || order.package || 'N/A'
    doc.text(`Package: ${packageName}`, margin, yPos)
    yPos += 7
  }

  if (order.customizations.pages) {
    doc.text(`Pages: ${order.customizations.pages}`, margin, yPos)
    yPos += 7
  }

  if (order.customizations.platform) {
    const platformText = order.customizations.platform === 'both' 
      ? 'iOS & Android' 
      : order.customizations.platform === 'ios'
      ? 'iOS Only'
      : 'Android Only'
    doc.text(`Platform: ${platformText}`, margin, yPos)
    yPos += 7
  }

  if (order.customizations.numberOfUsers) {
    doc.text(`Users: ${order.customizations.numberOfUsers}`, margin, yPos)
    yPos += 7
  }

  if (order.customizations.modules && order.customizations.modules.length > 0) {
    const modulesText = order.customizations.modules
      .map(m => m.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()))
      .join(', ')
    doc.text(`Modules: ${modulesText}`, margin, yPos)
    yPos += 7
  }

  yPos += 10

  // Itemized Billing
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Itemized Billing', margin, yPos)
  yPos += 10

  // Table Header
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Description', margin, yPos)
  doc.text('Amount', pageWidth - margin - 40, yPos, { align: 'right' })
  yPos += 8
  doc.line(margin, yPos, pageWidth - margin, yPos)
  yPos += 5

  // Base Package
  doc.setFont('helvetica', 'normal')
  doc.text('Base Package', margin, yPos)
  doc.text(`K${price.breakdown.base.zmw.toLocaleString()}`, pageWidth - margin - 40, yPos, { align: 'right' })
  yPos += 7

  // Add-ons
  if (order.customizations.addOns && order.customizations.addOns.length > 0) {
    order.customizations.addOns.forEach((addOn) => {
      const addOnData = PRICING_DATA.addOns[addOn as keyof typeof PRICING_DATA.addOns]
      if (addOnData) {
        const priceZmw = typeof addOnData.priceZmw === 'number' 
          ? addOnData.priceZmw 
          : addOnData.priceZmw.min || 0
        const formatted = addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
        doc.text(`${formatted}`, margin, yPos)
        doc.text(`K${priceZmw.toLocaleString()}`, pageWidth - margin - 40, yPos, { align: 'right' })
        yPos += 7
        if (yPos > 240) {
          doc.addPage()
          yPos = margin + 20
        }
      }
    })
  }

  // Hosting
  if (price.breakdown.hosting.zmw > 0) {
    const hostingType = order.customizations.hostingType === 'website' ? 'Website Hosting' : 'App Maintenance'
    doc.text(`${hostingType} (Monthly)`, margin, yPos)
    doc.text(`K${price.breakdown.hosting.zmw.toLocaleString()}`, pageWidth - margin - 40, yPos, { align: 'right' })
    yPos += 7
  }

  yPos += 5
  doc.line(margin, yPos, pageWidth - margin, yPos)
  yPos += 8

  // Total
  doc.setFont('helvetica', 'bold')
  doc.setFontSize(12)
  doc.text('Total', margin, yPos)
  doc.text(`K${price.totalZmw.toLocaleString()} (≈$${price.totalUsd.toFixed(0)})`, pageWidth - margin - 40, yPos, { align: 'right' })
  yPos += 15

  // Payment Terms
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Payment Terms', margin, yPos)
  yPos += 7

  doc.setFont('helvetica', 'normal')
  const paymentTerms = `50% deposit required to begin work
50% upon completion

Payment Methods:
- Bank Transfer
- Mobile Money
- Contact us for other payment options`

  const splitTerms = doc.splitTextToSize(paymentTerms, contentWidth)
  splitTerms.forEach((line: string) => {
    if (yPos > 250) {
      doc.addPage()
      yPos = margin
    }
    doc.text(line, margin, yPos)
    yPos += 5
  })

  // Footer
  yPos = 280
  doc.setFontSize(8)
  doc.setTextColor(128, 128, 128)
  doc.text('Thank you for choosing Byte&Berry!', margin, yPos)
  doc.text('Email: hello@byteandberry.com | Phone: 0760 580 949', margin, yPos + 5)

  // Save PDF
  doc.save(`byteandberry-invoice-${order.id.slice(-8)}.pdf`)
}

