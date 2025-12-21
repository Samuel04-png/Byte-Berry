import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Info } from 'lucide-react'
import { Package } from '@/types/package'
import { ServiceType } from '@/types/service'

interface DetailedDeliverablesProps {
  package: Package
  serviceType: ServiceType
}

const deliverablesByService: Record<ServiceType, Record<string, string[]>> = {
  website: {
    starter: [
      '1-3 responsive web pages',
      'Mobile-friendly design',
      'WhatsApp integration',
      'Basic SEO optimization',
      'Contact form',
      'Social media integration',
      'Google Analytics setup',
      '1 month free hosting',
      'Basic training session',
    ],
    growth: [
      '4-7 responsive web pages',
      'Content Management System (CMS)',
      'Blog functionality',
      'Image gallery',
      'Contact & inquiry forms',
      'AI Chatbot integration',
      'Advanced SEO optimization',
      'Social media integration',
      'Google Analytics & Search Console',
      '1 month free hosting',
      'Training & documentation',
    ],
    pro: [
      '8-12 responsive web pages',
      'Custom dashboard',
      'Booking/reservation system',
      'User authentication',
      'Analytics dashboard',
      'AI Assistant integration',
      'Payment gateway integration (optional)',
      'Advanced SEO & performance optimization',
      'Email marketing integration',
      '3 months free hosting',
      'Comprehensive training',
    ],
    premium: [
      'Unlimited pages',
      'Custom web application',
      'Full e-commerce solution',
      'Payment gateway integration',
      'AI-powered features',
      'Automation workflows',
      'Advanced analytics & reporting',
      'Multi-user management',
      'API integrations',
      '6 months free hosting',
      'Priority support & training',
    ],
  },
  mobileApp: {
    starter: [
      'Native iOS & Android apps',
      'User authentication system',
      'Push notifications',
      'Basic UI/UX design',
      'App store submission support',
      'Basic backend integration',
      '1 month free maintenance',
    ],
    growth: [
      'Native iOS & Android apps',
      'Offline mode functionality',
      'Advanced analytics',
      'Payment integration',
      'Social login options',
      'Cloud sync',
      'Enhanced UI/UX design',
      'App store optimization',
      '3 months free maintenance',
    ],
    enterprise: [
      'Native iOS & Android apps',
      'Custom backend development',
      'Advanced security features',
      'Biometric authentication',
      'Real-time synchronization',
      'White-label solution',
      'Advanced analytics & reporting',
      'API integrations',
      '6 months free maintenance',
      'Dedicated support',
    ],
  },
  consultancy: {
    basic: [
      'Tech stack review & recommendations',
      'Architecture advice',
      'Vendor selection guidance',
      '1 consultation session (2 hours)',
      'Written recommendations report',
    ],
    standard: [
      'Digital transformation strategy',
      'Cloud migration planning',
      'Security audit & recommendations',
      'Technology roadmap',
      '3 consultation sessions (2 hours each)',
      'Comprehensive strategy document',
      'Implementation guidance',
    ],
    premium: [
      'Enterprise architecture design',
      'Ongoing strategic support',
      'Team training sessions',
      'Implementation guidance',
      'Unlimited consultation sessions',
      'Quarterly strategy reviews',
      'Dedicated consultant',
    ],
  },
  enterprise: {
    starter: [
      'Core system modules',
      'User management system',
      'Basic reporting & analytics',
      'Data backup & security',
      'User training',
      '3 months support',
    ],
    professional: [
      'All system modules',
      'Advanced analytics & reporting',
      'API integrations',
      'Custom workflows',
      'Multi-user management',
      'Priority support',
      '6 months support',
      'Advanced training',
    ],
    enterprise: [
      'Fully customized solution',
      'Multi-tenant architecture',
      'Advanced security features',
      'Dedicated support team',
      'Comprehensive training program',
      'Ongoing maintenance',
      'Custom integrations',
      '24/7 support',
    ],
  },
}

export function DetailedDeliverables({ package: pkg, serviceType }: DetailedDeliverablesProps) {
  const [open, setOpen] = useState(false)
  const deliverables = deliverablesByService[serviceType]?.[pkg.id] || []

  if (deliverables.length === 0) return null

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="w-full mt-2">
          <Info className="h-4 w-4 mr-2" />
          View Detailed Deliverables
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{pkg.name} - Detailed Deliverables</DialogTitle>
          <DialogDescription>
            A comprehensive list of what you'll receive with this package
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-lg">What's Included:</h4>
            <ul className="space-y-2">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pt-4 border-t">
            <p className="text-sm text-muted-foreground">
              All deliverables are subject to project scope and requirements. 
              Contact us for a detailed project proposal tailored to your specific needs.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

