import jsPDF from 'jspdf'
import { Order } from '@/types/order'
import { CalculatedPrice } from '@/types/pricing'
import { PRICING_DATA } from '@/data/pricing-data'
import { generateDetailedInvoiceDescription } from '@/services/gemini-service'

export async function generateInvoice(order: Order, price: CalculatedPrice): Promise<void> {
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

  // Generate detailed descriptions using AI
  let baseDescription = 'Base Package - Complete development service including design, development, testing, and deployment'
  let hostingDescription = ''
  
  try {
    const aiDescription = await generateDetailedInvoiceDescription(order, price)
    // The AI returns a comprehensive description, use it for the base package
    if (aiDescription && aiDescription.trim().length > 0) {
      // Extract the base package description (usually the first paragraph)
      const lines = aiDescription.split('\n').filter(line => line.trim().length > 0)
      if (lines.length > 0) {
        baseDescription = lines[0].trim()
        // If there are more lines, use them for additional context
        if (lines.length > 1 && lines[1].includes('hosting') || lines[1].includes('Hosting')) {
          hostingDescription = lines[1].trim()
        }
      } else {
        baseDescription = aiDescription.trim()
      }
    }
  } catch (error) {
    console.error('Error generating AI descriptions, using basic descriptions:', error)
  }

  // Base Package with detailed description
  doc.setFont('helvetica', 'normal')
  const baseLines = doc.splitTextToSize(baseDescription, contentWidth - 50)
  baseLines.forEach((line: string, index: number) => {
    if (index === 0) {
      doc.text(line, margin, yPos)
    } else {
      doc.text(line, margin + 5, yPos)
    }
    yPos += 5
    if (yPos > 250) {
      doc.addPage()
      yPos = margin + 20
    }
  })
  doc.text(`K${price.breakdown.base.zmw.toLocaleString()}`, pageWidth - margin - 40, yPos - (baseLines.length * 5), { align: 'right' })
  yPos += 2

  // Add-ons with detailed descriptions
  if (order.customizations.addOns && order.customizations.addOns.length > 0) {
    order.customizations.addOns.forEach((addOn) => {
      const addOnData = PRICING_DATA.addOns[addOn as keyof typeof PRICING_DATA.addOns]
      if (addOnData) {
        const priceZmw = typeof addOnData.priceZmw === 'number' 
          ? addOnData.priceZmw 
          : addOnData.priceZmw.min || 0
        const formatted = addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
        const addOnDescription = `${formatted} - Additional feature enhancement`
        const addOnLines = doc.splitTextToSize(addOnDescription, contentWidth - 50)
        addOnLines.forEach((line: string, index: number) => {
          if (index === 0) {
            doc.text(line, margin, yPos)
          } else {
            doc.text(line, margin + 5, yPos)
          }
          yPos += 5
          if (yPos > 250) {
            doc.addPage()
            yPos = margin + 20
          }
        })
        doc.text(`K${priceZmw.toLocaleString()}`, pageWidth - margin - 40, yPos - (addOnLines.length * 5), { align: 'right' })
        yPos += 2
      }
    })
  }

  // Hosting with detailed description
  if (price.breakdown.hosting.zmw > 0) {
    const hostingType = order.customizations.hostingType === 'website' ? 'Website Hosting' : 'App Maintenance'
    const hostingDesc = hostingDescription || `${hostingType} (Monthly) - Includes server maintenance, security updates, backups, and technical support`
    const hostingLines = doc.splitTextToSize(hostingDesc, contentWidth - 50)
    hostingLines.forEach((line: string, index: number) => {
      if (index === 0) {
        doc.text(line, margin, yPos)
      } else {
        doc.text(line, margin + 5, yPos)
      }
      yPos += 5
      if (yPos > 250) {
        doc.addPage()
        yPos = margin + 20
      }
    })
    doc.text(`K${price.breakdown.hosting.zmw.toLocaleString()}`, pageWidth - margin - 40, yPos - (hostingLines.length * 5), { align: 'right' })
    yPos += 2
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

