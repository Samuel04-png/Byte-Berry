import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react'
import { getCaseStudyById, getOtherCaseStudies } from '@/data/caseStudies'
import { useState } from 'react'

export function CaseStudyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const caseStudy = id ? getCaseStudyById(id) : undefined
  const otherStudies = id ? getOtherCaseStudies(id) : []
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!caseStudy) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <p className="text-muted-foreground mb-8">The case study you're looking for doesn't exist.</p>
        <Button asChild>
          <Link to="/case-studies">View All Case Studies</Link>
        </Button>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % caseStudy.images.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + caseStudy.images.length) % caseStudy.images.length)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12 py-8 md:py-16">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={() => navigate('/case-studies')}
        className="animate-fade-in"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Case Studies
      </Button>

      {/* Hero Section */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div>
          <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">{caseStudy.category}</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-2">
            {caseStudy.title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mt-4 max-w-3xl">
            {caseStudy.shortDescription}
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      {caseStudy.images.length > 0 && (
        <section className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className={`relative overflow-hidden rounded-lg bg-muted group ${
            caseStudy.id === 'pushr' 
              ? 'max-w-md mx-auto aspect-[9/16]' 
              : 'aspect-video'
          }`}>
            <img 
              src={caseStudy.images[selectedImageIndex]} 
              alt={`${caseStudy.title} - Image ${selectedImageIndex + 1}`}
              className={`w-full h-full ${
                caseStudy.id === 'pushr' 
                  ? 'object-contain' 
                  : 'object-cover'
              }`}
              loading="lazy"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                const parent = target.parentElement
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground p-8 text-center">Image not available</div>'
                }
              }}
            />
            {caseStudy.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity touch-manipulation"
                  aria-label="Previous image"
                >
                  <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity touch-manipulation"
                  aria-label="Next image"
                >
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {selectedImageIndex + 1} / {caseStudy.images.length}
                </div>
              </>
            )}
          </div>
          
          {/* Thumbnail Grid */}
          {caseStudy.images.length > 1 && (
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2">
              {caseStudy.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`overflow-hidden rounded-md border-2 transition-all ${
                    caseStudy.id === 'pushr' 
                      ? 'aspect-[9/16]' 
                      : 'aspect-video'
                  } ${
                    selectedImageIndex === index 
                      ? 'border-primary ring-2 ring-[primary]' 
                      : 'border-transparent hover:border-muted-foreground/50'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-full h-full ${
                      caseStudy.id === 'pushr' 
                        ? 'object-contain' 
                        : 'object-cover'
                    }`}
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const parent = target.parentElement
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-xs text-muted-foreground">N/A</div>'
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Full Story */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-3xl md:text-4xl font-bold">The Story</h2>
        <div className="prose prose-lg max-w-none">
          {caseStudy.fullStory.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-lg text-muted-foreground leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Problem → Solution → Result */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Card className="border-l-4 border-l-red-500">
          <CardHeader>
            <h3 className="text-xl font-bold">The Problem</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{caseStudy.problem}</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardHeader>
            <h3 className="text-xl font-bold">The Solution</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{caseStudy.solution}</p>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-green-500">
          <CardHeader>
            <h3 className="text-xl font-bold">The Result</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{caseStudy.result}</p>
          </CardContent>
        </Card>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <Quote className="h-8 w-8 text-primary mb-4" />
              <blockquote className="text-lg italic text-foreground mb-4">
                "{caseStudy.testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-2">
                <div>
                  <p className="font-semibold">{caseStudy.testimonial.author}</p>
                  {caseStudy.testimonial.role && (
                    <p className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      )}

      {/* Project Details */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Project Investment</h3>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">{caseStudy.price}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <h3 className="text-xl font-bold">Live Project</h3>
          </CardHeader>
          <CardContent>
            <Button 
              asChild 
              className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <a href={caseStudy.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                Visit Live Site
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* More Projects */}
      {otherStudies.length > 0 && (
        <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">More Projects</h2>
            <p className="text-muted-foreground">Explore other case studies</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherStudies.map((study) => (
              <Card key={study.id} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className={`relative overflow-hidden bg-muted ${
                  study.id === 'pushr' 
                    ? 'h-56 sm:h-64' 
                    : 'h-40'
                }`}>
                  {study.images[0] && (
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
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground text-sm">Image not available</div>'
                        }
                      }}
                    />
                  )}
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {study.shortDescription}
                  </p>
                </CardHeader>
                <CardContent>
                  <Button 
                    asChild 
                    variant="outline" 
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
                  >
                    <Link to={`/case-studies/${study.id}`} className="flex items-center justify-center gap-2">
                      View Case Study
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="pt-8 border-t text-center space-y-4 animate-fade-in" style={{ animationDelay: '0.8s' }}>
        <p className="text-lg text-muted-foreground">
          Ready to start your own project?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild 
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Link to="/services">View Our Services</Link>
          </Button>
          <Button 
            asChild 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
          >
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

