import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight, Linkedin, Facebook, Award, ExternalLink } from 'lucide-react'
import { getImagePath } from '@/utils/imageUtils'

export function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12 py-6 sm:py-8 md:py-12 lg:py-16 px-4 sm:px-6">
      {/* Hero Section */}
      <section className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          About <span className="text-primary">Byte&Berry</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto px-2">
          We're developers and strategists building technology that empowers African businesses.
        </p>
      </section>

      {/* Our Story */}
      <section className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Story</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Byte&Berry is a Zambian-based software studio specializing in custom digital solutions 
            for educational institutions and SMEs. Our solutions blend user-friendly design with robust 
            backends to help clients digitize operations, improve efficiency, and reduce costs.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mt-4">
            We believe that every business, regardless of size, deserves access to professional 
            technology solutions. That's why we focus on creating affordable, high-quality tools that 
            solve local challenges and drive sustainable growth.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Mission</h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Empower organizations with affordable, high-quality tools that solve local challenges 
          and drive sustainable growth.
        </p>
      </section>

      {/* Our Vision */}
      <section className="space-y-4 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our Vision</h2>
        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
          Be the trusted technology partner for SMEs and schools across Africa, known for innovation 
          and reliability.
        </p>
      </section>

      {/* Founders Section */}
      <section className="space-y-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Meet Our Founders</h2>
          <p className="text-muted-foreground mt-2">The visionaries behind Byte&Berry</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Simon Mulenga */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img 
                src={getImagePath('Founders/Simon Mulenga-Co-founder_marketing manager.jpg')}
                alt="Simon Mulenga"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground p-4 text-center text-sm">Image not available</div>'
                  }
                }}
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold">Simon Mulenga</h3>
                  <p className="text-sm text-muted-foreground">Co-founder & Marketing Manager</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I am a Business Administration graduate with a specialization in Economics, passionate about building innovative and practical technology solutions for real-world business challenges. My background gives me a strong foundation in financial management, business strategy, and market analysis, which I apply to develop impactful digital tools for SMEs and organizations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a focus on efficiency, cost reduction, and data-driven decision-making, I work at the intersection of business and technology to create solutions that drive sustainable growth and empower organizations across Africa.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/simon-mulenga-307a63190/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Samuel Kamanga */}
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[4/3] overflow-hidden bg-muted">
              <img 
                src={getImagePath('Founders/Samuel Kamanga -Co-founder_CTO.png')}
                alt="Samuel Kamanga"
                className="w-full h-full object-cover"
                loading="lazy"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  const parent = target.parentElement
                  if (parent) {
                    parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-muted-foreground p-4 text-center text-sm">Image not available</div>'
                  }
                }}
              />
            </div>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="text-2xl font-bold">Samuel Kamanga</h3>
                  <p className="text-sm text-muted-foreground">Co-founder & CTO</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Samuel Kamanga is a visionary entrepreneur, developer, and creative technologist based in Lusaka, Zambia. At just 21 years old, he has already made significant strides in building innovative digital products and platforms that blend functionality, design, and user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Samuel is the founder behind projects such as Aether, a smart AI business co-pilot, Pushr, a community-driven delivery platform, and Byte & Berry, a hub for app development and creative solutions. His work focuses on leveraging technology to solve real-world problems, streamline business operations, and empower small businesses and creators.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Driven by ambition and a desire to create meaningful impact, Samuel combines technical expertise with a keen eye for design and user experience. He is passionate about building products that not only perform but also delight users with clean, modern, and intuitive interfaces.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond technology, Samuel is motivated by a long-term vision: to build scalable businesses that generate substantial economic value while fostering innovation, creativity, and opportunity across Africa and beyond.
                </p>
                <div className="pt-2">
                  <a
                    href="https://www.linkedin.com/in/skamanga/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-semibold"
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certification & Social Proof */}
      <section className="space-y-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Certification & Social Proof</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PACRA Certification */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/15 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">PACRA Certified</h3>
                  <p className="text-muted-foreground">
                    Byte&Berry is certified by the Patents and Companies Registration Agency (PACRA), 
                    ensuring our business operations meet the highest standards of legal compliance and 
                    corporate governance in Zambia.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/company/byte-berry/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors group"
                >
                  <Linkedin className="h-5 w-5 text-[#0077B5] group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-medium">Company LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Follow our updates</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
                <a
                  href="https://web.facebook.com/p/ByteBerry-61575125536198/?_rdc=1&_rdr#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border hover:bg-muted transition-colors group"
                >
                  <Facebook className="h-5 w-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                  <div className="flex-1">
                    <p className="font-medium">Facebook Page</p>
                    <p className="text-sm text-muted-foreground">Join our community</p>
                  </div>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-8 border-t animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild 
            size="lg" 
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/50 transition-all duration-200"
          >
            <Link to="/services" className="flex items-center gap-2">
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            size="lg" 
            className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 font-semibold"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

