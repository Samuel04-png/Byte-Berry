import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, MapPin, Calendar, ExternalLink } from 'lucide-react'
import { CALENDLY_URL } from '@/utils/constants'
import { CalendlyWidget } from '@/components/CalendlyWidget'

export function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
          Let's discuss your project and see how we can help bring your vision to life.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Mail className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Email Us</CardTitle>
            <CardDescription>Send us a message anytime</CardDescription>
          </CardHeader>
          <CardContent>
            <a 
              href="mailto:hello@byteandberry.com"
              className="text-primary hover:underline font-medium"
            >
              hello@byteandberry.com
            </a>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <Calendar className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Book a Call</CardTitle>
            <CardDescription>Schedule a meeting with us</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="w-full">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Open Calendly
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <MapPin className="h-8 w-8 text-primary mb-2" />
            <CardTitle>Location</CardTitle>
            <CardDescription>Based in Zambia</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Zambian-based software studio serving clients across Africa
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Calendly Embed Section */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Schedule a Meeting</h2>
          <p className="text-lg text-muted-foreground">
            Choose a time that works for you and let's discuss your project
          </p>
        </div>
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <CalendlyWidget />
          </CardContent>
        </Card>
      </section>

      {/* Additional Information */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Card>
          <CardHeader>
            <CardTitle>What to Expect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              During our call, we'll discuss:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Your project goals and requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Timeline and budget considerations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Technical approach and recommendations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span>Next steps and project planning</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Response Time</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-muted-foreground">
              We typically respond to inquiries within 24-48 hours. For urgent matters, 
              please mention it in your message or during the call booking.
            </p>
            <p className="text-muted-foreground">
              Our business hours are Monday through Friday, 9 AM - 5 PM CAT (Central African Time).
            </p>
          </CardContent>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="pt-8 border-t text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <p className="text-lg text-muted-foreground">
          Not ready for a call? Explore our services and case studies first.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
          >
            <Link to="/services">View Services</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
          >
            <Link to="/case-studies">View Case Studies</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

