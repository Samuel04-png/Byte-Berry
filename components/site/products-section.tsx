import Link from 'next/link'
import { productCards } from '@/data/site-data'
import { Reveal } from '@/components/site/reveal'
import { SectionIntro } from '@/components/site/section-intro'
import { ProductDemoCard } from '@/components/site/product-demo-card'

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
              <ProductDemoCard className="h-full" product={product} variant="dark" />
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
