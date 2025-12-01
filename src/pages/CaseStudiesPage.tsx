import { Link } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { caseStudies } from '@/data/caseStudies'

export function CaseStudiesPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
          Case <span className="text-primary">Studies</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
          Explore our portfolio of successful projects and see how we've helped businesses grow.
        </p>
      </section>

      {/* Case Studies Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        {caseStudies.map((study, index) => (
          <Card 
            key={study.id} 
            className="group hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
            style={{ animationDelay: `${0.1 + index * 0.05}s` }}
          >
            <div className={`relative overflow-hidden bg-muted ${
              study.id === 'pushr' 
                ? 'h-64 sm:h-72 md:h-80' 
                : 'h-48 sm:h-56 md:h-48'
            }`}>
              {study.images[0] ? (
                <img 
                  src={study.images[0]} 
                  alt={study.title}
                  className={`w-full h-full group-hover:scale-110 transition-transform duration-300 ${
                    study.id === 'pushr' 
                      ? 'object-contain' 
                      : 'object-cover'
                  }`}
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
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
                  No image available
                </div>
              )}
            </div>
            <CardHeader>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {study.title}
              </CardTitle>
              <CardDescription className="line-clamp-2">
                {study.shortDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.slice(0, 3).map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Button 
                asChild 
                variant="outline" 
                className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 group-hover:shadow-md font-semibold"
              >
                <Link to={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2">
                  View Case Study
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="pt-8 border-t text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <p className="text-lg text-muted-foreground">
          Ready to start your project?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-200 font-semibold"
          >
            <Link to="/services" className="flex items-center gap-2">
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

