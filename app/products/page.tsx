import type { Metadata } from 'next'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { PageReveal, Reveal } from '@/components/site/reveal'
import { WhatsAppCTASection } from '@/components/site/whatsapp-cta-section'
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
          <div className="grid gap-6 md:grid-cols-2">
            {productCards.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.05}>
                <article className="bb-panel overflow-hidden">
                  {'image' in product ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-bb-surface">
                      <Image
                        alt={product.alt}
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        src={product.image}
                      />
                    </div>
                  ) : (
                    <div className="relative aspect-[16/10] overflow-hidden bg-bb-surface">
                      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,82,255,0.06),rgba(15,15,26,0))]" />
                      <div className="absolute inset-0 grid place-items-center">
                        <div className="grid w-[72%] gap-4">
                          <div className="h-10 bg-white shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
                          <div className="grid grid-cols-3 gap-3">
                            <div className="h-24 bg-white shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
                            <div className="h-24 bg-white shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
                            <div className="h-24 bg-white shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-4 p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2">
                        <p className="bb-label">Deployable Product</p>
                        <h2 className="bb-card-title text-bb-ink">{product.title}</h2>
                      </div>
                      <span className="text-sm font-semibold text-bb-electric">{product.price}</span>
                    </div>

                    <p className="text-sm leading-7 text-bb-ink-50">{product.description}</p>
                    <Button
                      href={product.href}
                      rel="noreferrer"
                      target="_blank"
                      variant="primary"
                    >
                      {product.ctaLabel}
                    </Button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppCTASection />
    </PageReveal>
  )
}
