import type { Metadata } from 'next'
import { PageReveal } from '@/components/site/reveal'
import { WhatsAppCTASection } from '@/components/site/whatsapp-cta-section'
import { Button } from '@/components/ui/Button'
import { WorkSection } from '@/components/site/work-section'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Explore Byte & Berry case studies across lending, delivery, safety tech, automation, and tourism platforms built in Zambia.',
  alternates: {
    canonical: '/work',
  },
}

export default function WorkPage() {
  return (
    <PageReveal>
      <section className="bb-section bb-paper-section border-b border-bb-ink-20">
        <div className="bb-shell space-y-6">
          <p className="bb-label">Selected Work</p>
          <h1 className="bb-title max-w-[56rem]">
            Real products for businesses in <em>Lusaka</em>, Kitwe, Ndola, and beyond.
          </h1>
          <p className="max-w-3xl text-[17px] leading-8 text-bb-ink-50">
            This is the proof layer of the business. If you want to know whether we can
            actually ship, start here.
          </p>
          <Button className="w-full sm:w-auto" href="/contact" variant="primary">
            Ask About a Similar Build
          </Button>
        </div>
      </section>

      <WorkSection />
      <WhatsAppCTASection />
    </PageReveal>
  )
}
