import type { Metadata } from 'next'
import { PageReveal } from '@/components/site/reveal'
import { PainSolutionSection } from '@/components/site/pain-solution-section'
import { ServicesSection } from '@/components/site/services-section'
import { WhatsAppCTASection } from '@/components/site/whatsapp-cta-section'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Premium websites, mobile apps, AI automation, payment integrations, and business systems for growing companies.',
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesPage() {
  return (
    <PageReveal>
      <section className="bb-section bb-paper-section border-b border-bb-ink-20">
        <div className="bb-shell space-y-6">
          <p className="bb-label">Services</p>
          <h1 className="bb-title max-w-[58rem]">
            We build what moves <em>bookings</em>, sales, and operations first.
          </h1>
          <p className="max-w-3xl text-[17px] leading-8 text-bb-ink-50">
            Websites, apps, automation, payments, and internal systems for teams
            that need digital momentum now.
          </p>
        </div>
      </section>

      <PainSolutionSection />
      <ServicesSection />
      <WhatsAppCTASection />
    </PageReveal>
  )
}
