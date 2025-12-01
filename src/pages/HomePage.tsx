import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowRight, Sparkles, Code, Smartphone, Briefcase, Building2, Zap, Shield, Globe, Users, TrendingUp } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'
import { getImagePath } from '@/utils/imageUtils'

export function HomePage() {
  const featuredCaseStudies = caseStudies.slice(0, 3)

  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Responsive, fast, secure websites—from landing pages to portals.',
      link: '/services',
      color: 'text-blue-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native iOS & Android with clean UI/UX and offline capability.',
      link: '/services',
      color: 'text-green-500'
    },
    {
      icon: Briefcase,
      title: 'IT & Digital Consultancy',
      description: 'Tech stack advisory, project roadmapping, cloud & security reviews.',
      link: '/services',
      color: 'text-purple-500'
    },
    {
      icon: Building2,
      title: 'Enterprise Systems',
      description: 'ERP, POS, HR, or School Management Systems.',
      link: '/services',
      color: 'text-orange-500'
    },
  ]

  const features = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Agile development process ensuring quick time-to-market'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime guarantee'
    },
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'Built with cutting-edge technologies and best practices'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced developers and strategists at your service'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business needs'
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Tailored to your unique business requirements'
    },
  ]

  return (
    <div className="min-h-screen relative">
      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 particle-background"></div>
      </div>
      
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background/95 via-background/95 to-primary/10 py-20 md:py-32 backdrop-blur-sm">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border-2 border-primary/30 text-sm font-semibold text-primary mb-4 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>PACRA Certified • Trusted by 50+ Businesses</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Digital Solutions That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-purple-600">
                Drive Growth
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We build custom websites, mobile apps, and enterprise systems that help African businesses 
              digitize operations, improve efficiency, and scale sustainably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-200 text-base px-8 py-6"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 text-base px-8 py-6 font-semibold"
              >
                <Link to="/case-studies" className="flex items-center gap-2">
                  View Our Work
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 mt-12 border-t">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">99.9%</div>
                <div className="text-sm text-muted-foreground mt-1">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground mt-1">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Our <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="ghost" className="w-full group-hover:text-primary font-semibold">
                      <Link to={service.link} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center mt-12">
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50"
            >
              <Link to="/services" className="flex items-center gap-2">
                View All Services & Pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Why Choose <span className="text-primary">Byte&Berry</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${0.1 + index * 0.05}s` }}
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors shadow-sm">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped businesses transform their digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {featuredCaseStudies.map((study, index) => (
              <Card 
                key={study.id} 
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  {study.images[0] && (
                    <img 
                      src={getImagePath(study.images[0])} 
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement
                        target.style.display = 'none'
                        const parent = target.parentElement
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground">Image not available</div>'
                        }
                      }}
                    />
                  )}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors font-bold">
                    {study.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {study.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white font-semibold">
                    <Link to={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              asChild 
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold"
            >
              <Link to="/case-studies" className="flex items-center gap-2">
                View All Case Studies
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Let's discuss how we can help you achieve your digital goals. Get started with a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                asChild 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-200 text-base px-8 py-6"
              >
                <Link to="/services" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 text-base px-8 py-6 font-semibold"
              >
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

