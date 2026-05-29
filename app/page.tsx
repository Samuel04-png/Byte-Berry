import type { Metadata } from 'next'
import { HeroSection } from '@/components/site/hero-section'
import { ContactFormSection } from '@/components/site/contact-form-section'
import { PackagesSection } from '@/components/site/packages-section'
import { PainSolutionSection } from '@/components/site/pain-solution-section'
import { ProcessSection } from '@/components/site/process-section'
import { ProofSection } from '@/components/site/proof-section'
import { ServicesSection } from '@/components/site/services-section'
import { WhatsAppCTASection } from '@/components/site/whatsapp-cta-section'
import { WorkSection } from '@/components/site/work-section'
import { siteConfig } from '@/data/site-data'

export const metadata: Metadata = {
  title: 'Byte & Berry | Web Development & AI Automation - Lusaka, Zambia',
  description: siteConfig.description,
  alternates: {
    canonical: '/',
  },
}

export default function HomePage() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    email: siteConfig.email,
    description: siteConfig.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lusaka',
      addressCountry: 'ZM',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        telephone: '+260760580949',
        email: siteConfig.email,
        areaServed: 'ZM',
        availableLanguage: ['en'],
      },
    ],
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.linkedin,
      siteConfig.socials.facebook,
    ],
  }

  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        type="application/ld+json"
      />

      <main className="bb-page">
        <HeroSection />
        <PainSolutionSection />
        <ServicesSection />
        <WorkSection />
        <PackagesSection />
        <ProcessSection />
        <ProofSection />
        <ContactFormSection />
        <WhatsAppCTASection />
      </main>
    </>
  )
}
