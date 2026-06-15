import type { Metadata } from 'next'
import Image from 'next/image'
import { PageReveal, Reveal } from '@/components/site/reveal'
import { siteConfig } from '@/data/site-data'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Byte & Berry on WhatsApp or email to start your website, app, or AI automation project. Based in Lusaka, serving clients worldwide.',
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return (
    <PageReveal>
      <section className="bb-section bb-paper-section">
        <div className="bb-shell space-y-12">
          <div className="space-y-6">
            <p className="bb-label">Contact</p>
            <h1 className="bb-title max-w-[58rem]">
              One conversation can <em>fix</em> what your digital presence has been
              costing you.
            </h1>
            <p className="max-w-3xl text-[17px] leading-8 text-bb-ink-50">
              WhatsApp us, email us, or start with a quick brief. Samuel builds it.
              Simon handles everything else.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="bb-ink-panel p-8 md:p-10">
              <div className="space-y-8">
                <div className="space-y-4">
                  <p className="bb-label bb-label-dark">Start Here</p>
                  <h2 className="font-serif text-[clamp(34px,4vw,40px)] leading-[0.98] tracking-[-0.04em] text-bb-paper">
                    The fastest way in is WhatsApp.
                  </h2>
                  <p className="text-base leading-8 text-bb-paper-60">
                    Tell us what is broken, what you want to launch, or what is slowing
                    your team down. We reply same day.
                  </p>
                </div>

                <div className="space-y-4 text-sm text-bb-paper-70">
                  <a
                    className="block border-t border-[rgba(250,250,247,0.1)] pt-4 transition hover:text-bb-paper"
                    href={siteConfig.whatsappHref}
                    rel="noreferrer"
                    target="_blank"
                  >
                    WhatsApp: {siteConfig.whatsappNumber}
                  </a>
                  <a
                    className="block border-t border-[rgba(250,250,247,0.1)] pt-4 transition hover:text-bb-paper"
                    href={`mailto:${siteConfig.email}`}
                  >
                    Email: {siteConfig.email}
                  </a>
                  <p className="border-t border-[rgba(250,250,247,0.1)] pt-4">
                    Location: {siteConfig.location}
                  </p>
                </div>

                <a
                  className="bb-button bb-button-light w-full justify-center sm:w-auto"
                  href={siteConfig.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp Byte &amp; Berry
                </a>
              </div>
            </Reveal>

            <Reveal className="grid gap-6 md:grid-cols-2" delay={0.08}>
              <article className="bb-panel overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    alt="Samuel Kamanga, Byte and Berry co-founder and technical lead"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    src="/optimized/founders/samuel-kamanga.webp"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="bb-label">Build Lead</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-bb-ink">
                    Samuel Kamanga
                  </h3>
                  <p className="text-sm leading-7 text-bb-ink-50">
                    Technical Lead &amp; Co-Founder. Product strategy, delivery, and
                    systems.
                  </p>
                </div>
              </article>

              <article className="bb-panel overflow-hidden">
                <div className="relative aspect-[4/5]">
                  <Image
                    alt="Simon Mulenga, Byte and Berry co-founder and growth lead"
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    src="/optimized/founders/simon-mulenga.webp"
                  />
                </div>
                <div className="space-y-2 p-5">
                  <p className="bb-label">Client Lead</p>
                  <h3 className="text-2xl font-semibold tracking-[-0.02em] text-bb-ink">
                    Simon Mulenga
                  </h3>
                  <p className="text-sm leading-7 text-bb-ink-50">
                    Co-Founder &amp; Growth Lead. Positioning, communication, and client
                    experience.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </PageReveal>
  )
}
