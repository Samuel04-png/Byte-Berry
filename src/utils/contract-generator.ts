import jsPDF from 'jspdf'
import { Order } from '@/types/order'
import { CalculatedPrice } from '@/types/pricing'
import { PRICING_DATA } from '@/data/pricing-data'
import { generateDetailedContractTerms } from '@/services/gemini-service'

export async function generateContract(
  order: Order,
  price: CalculatedPrice,
  customTerms?: string
): Promise<void> {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const margin = 20
  const contentWidth = pageWidth - 2 * margin
  let yPos = margin

  // Header
  doc.setFontSize(24)
  doc.setTextColor(139, 0, 75) // Deep berry red
  doc.text('Byte&Berry Service Agreement', margin, yPos)
  yPos += 15

  // Date
  doc.setFontSize(10)
  doc.setTextColor(0, 0, 0)
  doc.text(`Generated on: ${new Date(order.timestamp).toLocaleDateString()}`, margin, yPos)
  yPos += 20

  // Service Details Section
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Service Details', margin, yPos)
  yPos += 10

  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  const serviceName = order.serviceType === 'website' 
    ? 'Website Development'
    : order.serviceType === 'mobileApp'
    ? 'Mobile App Development'
    : order.serviceType === 'consultancy'
    ? 'IT & Digital Consultancy'
    : 'Enterprise Systems'

  doc.text(`Service Type: ${serviceName}`, margin, yPos)
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
    doc.text(`Number of Pages: ${order.customizations.pages}`, margin, yPos)
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
    doc.text(`Number of Users: ${order.customizations.numberOfUsers}`, margin, yPos)
    yPos += 7
  }

  if (order.customizations.modules && order.customizations.modules.length > 0) {
    const modulesText = order.customizations.modules
      .map(m => m.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()))
      .join(', ')
    doc.text(`Selected Modules: ${modulesText}`, margin, yPos)
    yPos += 7
  }

  yPos += 10

  // Features Section
  if (order.customizations.addOns && order.customizations.addOns.length > 0) {
    doc.setFontSize(16)
    doc.setFont('helvetica', 'bold')
    doc.text('Selected Features', margin, yPos)
    yPos += 10

    doc.setFontSize(11)
    doc.setFont('helvetica', 'normal')
    order.customizations.addOns.forEach((addOn) => {
      const formatted = addOn.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
      doc.text(`• ${formatted}`, margin + 5, yPos)
      yPos += 7
      if (yPos > 250) {
        doc.addPage()
        yPos = margin
      }
    })
    yPos += 10
  }

  // Pricing Section
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Pricing Breakdown', margin, yPos)
  yPos += 10

  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  
  doc.text(`Base Package: K${price.breakdown.base.zmw.toLocaleString()}`, margin, yPos)
  yPos += 7

  if (price.breakdown.addOns.zmw > 0) {
    doc.text(`Add-ons: K${price.breakdown.addOns.zmw.toLocaleString()}`, margin, yPos)
    yPos += 7
  }

  if (price.breakdown.hosting.zmw > 0) {
    doc.text(`Hosting (Monthly): K${price.breakdown.hosting.zmw.toLocaleString()}`, margin, yPos)
    yPos += 7
  }

  doc.setFont('helvetica', 'bold')
  doc.text(`Total: K${price.totalZmw.toLocaleString()} (≈$${price.totalUsd.toFixed(0)})`, margin, yPos)
  yPos += 15

  // Terms and Conditions
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Terms and Conditions', margin, yPos)
  yPos += 10

  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  // Generate detailed terms using AI if not provided
  let terms = customTerms
  if (!terms) {
    try {
      terms = await generateDetailedContractTerms(order, price)
      // Add contact information at the end
      terms += `\n\nFor questions or clarifications, please contact:\nEmail: hello@byteandberry.com\nPhone: 0760 580 949\nWhatsApp: https://wa.me/0760580949`
    } catch (error) {
      console.error('Error generating AI terms, using fallback:', error)
      // Fallback to basic terms if AI fails
      terms = `This is a preliminary quote. Final pricing may vary based on specific requirements and project scope.

Payment Terms: 50% deposit required to begin work, 50% upon completion.

Delivery Timeline: Will be discussed and agreed upon during project kickoff.

For questions or clarifications, please contact:
Email: hello@byteandberry.com
Phone: 0760 580 949
WhatsApp: https://wa.me/0760580949`
    }
  }

  const splitTerms = doc.splitTextToSize(terms, contentWidth)
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
  doc.text('© Byte&Berry. All rights reserved.', margin, yPos)
  doc.text('This document is generated automatically and serves as a preliminary agreement.', margin, yPos + 5)

  // Save PDF
  doc.save(`byteandberry-contract-${order.id}.pdf`)
}

