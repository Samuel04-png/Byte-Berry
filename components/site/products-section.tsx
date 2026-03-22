import Image from 'next/image'
import Link from 'next/link'
import { productCards } from '@/data/site-data'
import { Reveal } from '@/components/site/reveal'
import { SectionIntro } from '@/components/site/section-intro'

export function ProductsSection() {
  return (
    <section className="bb-section" id="products">
      <div className="bb-shell space-y-10">
        <Reveal>
          <SectionIntro
            description="Need speed, not a blank page? Start with TengaLoans or ZedBooks, then tailor the setup around your workflow."
            title="Products you can deploy faster"
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {productCards.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.06}>
              <article
                className="bb-card group h-full overflow-hidden p-0"
                id={product.id}
              >
                {'image' in product ? (
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      alt={product.alt}
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={product.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                  </div>
                ) : (
                  <div className="relative aspect-[16/10] overflow-hidden bg-bb-dark">
                    <div className="absolute inset-0 bb-grid-overlay" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid w-[72%] gap-4">
                        <div className="h-10 border border-[#1A7FD4]/30 bg-[#1A7FD4]/10" />
                        <div className="grid grid-cols-3 gap-3">
                          <div className="h-24 border border-white/10 bg-white/5" />
                          <div className="h-24 border border-white/10 bg-white/5" />
                          <div className="h-24 border border-white/10 bg-white/5" />
                        </div>
                        <div className="grid grid-cols-4 gap-3">
                          <div className="h-3 bg-[#1A7FD4]/45" />
                          <div className="h-3 bg-white/10" />
                          <div className="h-3 bg-white/10" />
                          <div className="h-3 bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="bb-eyebrow">Deployable Product</p>
                      <h3 className="mt-2 text-[28px] font-semibold tracking-[-0.02em] text-bb-white">
                        {product.title}
                      </h3>
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-[0.08em] text-[#1A7FD4]">
                      {product.price}
                    </span>
                  </div>
                  <p className="bb-copy text-bb-white/82">{product.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-start max-md:justify-center">
          <Link className="bb-button bb-button-secondary max-md:max-w-[280px]" href="/products">
            Explore Our Products
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
