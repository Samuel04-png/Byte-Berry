import type { Metadata } from 'next'
import { PageReveal, Reveal } from '@/components/site/reveal'
import { WhatsAppCTASection } from '@/components/site/whatsapp-cta-section'
import { ProductDemoCard } from '@/components/site/product-demo-card'
import { productCards } from '@/data/site-data'

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Explore Byte & Berry products including TengaLoans and ZedBooks.',
  alternates: {
    canonical: '/products',
  },
}

export default function ProductsPage() {
  return (
    <PageReveal>
      <section className="bb-section bb-paper-section border-b border-bb-ink-20">
        <div className="bb-shell space-y-6">
          <p className="bb-label">Products</p>
          <h1 className="bb-title max-w-[54rem]">
            Need something <em>proven</em> before we build from scratch?
          </h1>
          <p className="max-w-3xl text-[17px] leading-8 text-bb-ink-50">
            Start with TengaLoans or ZedBooks, then customize around your workflow,
            market, and team capacity.
          </p>
        </div>
      </section>

      <section className="bb-section bb-warm-section">
        <div className="bb-shell space-y-10">
          <Reveal>
            <div className="grid gap-4 rounded-3xl border border-bb-ink-20 bg-white p-5 shadow-[0_16px_40px_rgba(15,15,26,0.07)] md:grid-cols-3 md:p-6">
              {[
                ['Demo-first', 'Each product now pushes prospects to a guided demo instead of a generic visit.'],
                ['Workflow-led', 'Cards show the exact business process the software controls.'],
                ['Sales-ready', 'WhatsApp messages carry product intent so follow-up starts with context.'],
              ].map(([title, copy]) => (
                <div className="rounded-2xl bg-bb-surface p-4" key={title}>
                  <p className="text-sm font-semibold text-bb-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-bb-ink-50">{copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {productCards.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.05}>
                <ProductDemoCard className="h-full" product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTASection />
    </PageReveal>
  )
}
