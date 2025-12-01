import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Check, ArrowRight } from 'lucide-react'

type Currency = 'ZMW' | 'USD'

export function ServicesPage() {
  const [currency, setCurrency] = useState<Currency>('ZMW')

  const services = [
    {
      title: 'Web Development',
      description: 'Responsive, fast, secure websites—from landing pages to portals.',
      price: currency === 'ZMW' ? 'K6,000+' : '$300+',
      features: [
        '3–5 Pages',
        'Contact Form & SEO',
        'Mobile-First Design'
      ]
    },
    {
      title: 'Mobile App Development',
      description: 'Native iOS & Android with clean UI/UX and offline capability.',
      price: currency === 'ZMW' ? 'K15,000+' : '$750+',
      features: [
        'iOS & Android',
        'User Authentication',
        'Push Notifications'
      ]
    },
    {
      title: 'IT & Digital Consultancy',
      description: 'Tech stack advisory, project roadmapping, cloud & security reviews.',
      price: 'Project-Based',
      features: [
        'Architecture & Planning',
        'Digital Transformation Strategy',
        'Vendor Selection'
      ]
    }
  ]

  const additionalServices = [
    {
      title: 'Payment Gateway Integration',
      description: 'Integrate local mobile money (MTN, Airtel) and card payments (e.g., Stripe). Pricing is quote-based.'
    },
    {
      title: 'Hosting & Maintenance',
      description: `Website Hosting: ${currency === 'ZMW' ? 'K500/month' : '$25/month'}. App Maintenance: Covers Play Store (${currency === 'ZMW' ? 'K500 one-time' : '$25 one-time'}) & App Store (${currency === 'ZMW' ? 'K2,000/yr' : '$99/yr'}) plus WhatsApp Business line upkeep. From ${currency === 'ZMW' ? 'K4,000/yr' : '$200/yr'}.`
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Services & <span className="text-primary">Pricing</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
          Transparent, flexible pricing for solutions that scale with your business.
        </p>
      </section>

      {/* Currency Selector */}
      <section className="flex justify-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">Currency:</span>
          <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ZMW">ZMW</SelectItem>
              <SelectItem value="USD">USD</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      {/* Main Services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button asChild className="mt-auto w-full">
                <Link to="/services">Get Started</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Additional Services */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-3xl md:text-4xl font-bold text-center">Additional Services & Costs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {additionalServices.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Project Estimator */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Quick Project Estimator</h2>
          <p className="text-lg text-muted-foreground">
            Pick features for a rough estimate. We'll refine after a call.
          </p>
        </div>
        <div className="flex justify-center">
          <Button 
            asChild 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-200"
          >
            <Link to="/services" className="flex items-center gap-2">
              Use Project Estimator
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 border-t text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <p className="text-lg text-muted-foreground">
          Need a custom solution? Let's discuss your project.
        </p>
        <Button 
          asChild 
          size="lg" 
          variant="outline"
          className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
        >
          <Link to="/contact">Contact Us</Link>
        </Button>
      </section>
    </div>
  )
}

