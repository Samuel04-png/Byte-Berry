'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { heroSlides, productNames, siteConfig } from '@/data/site-data'
import { WhatsAppIcon } from '@/components/site/icons'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

export function HeroSection() {
  const reduceMotion = usePrefersReducedMotion()
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (reduceMotion || heroSlides.length <= 1) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroSlides.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [reduceMotion])

  const activeProject = heroSlides[activeIndex]

  return (
    <section className="bb-paper-section relative overflow-hidden">
      <div className="bb-diagonal-cut relative">
        <div className="bb-shell grid min-h-[calc(100svh-72px)] items-center gap-14 pb-28 pt-10 max-md:min-h-0 max-md:pb-24 lg:grid-cols-[0.52fr_0.48fr]">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="bb-kicker">
              Lusaka
              <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
              Zambia
            </p>

            <div className="space-y-3">
              <h1 className="bb-display text-bb-ink">
                <span className="block">Your business</span>
                <span className="block">deserves to be</span>
                <span className="block text-[1.3em] italic leading-[0.82] text-bb-purple">seen.</span>
              </h1>
            </div>

            <p className="bb-copy bb-copy-muted max-w-[460px]">
              We build websites, apps, and AI systems for Zambian businesses. Fast,
              mobile-ready, and live in 6 weeks.
            </p>

            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center">
              <Button
                href={siteConfig.whatsappHref}
                leftIcon={<WhatsAppIcon className="h-5 w-5" />}
                rel="noreferrer"
                target="_blank"
                variant="primary"
              >
                WhatsApp Us Now
              </Button>
              <Button href="#work" variant="secondary">
                See our work
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-3 text-[13px] text-bb-ink-50">
              <span className="inline-flex h-[9px] w-[9px] rounded-full bg-[#22C55E]" />
              <span>6-week delivery</span>
              <span className="h-1 w-1 rounded-full bg-[rgba(15,15,26,0.25)]" />
              <span>Payment processing ready</span>
              <span className="h-1 w-1 rounded-full bg-[rgba(15,15,26,0.25)]" />
              <span>10+ projects live</span>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="relative w-full max-md:pb-4"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mx-auto w-full max-w-[620px] max-md:max-w-none">
              <div
                className="bb-browser-frame overflow-hidden md:[transform:perspective(1200px)_rotateY(-3deg)]"
                style={reduceMotion ? { transform: 'none' } : { transformOrigin: 'left center' }}
              >
                <div className="bb-browser-topbar">
                  <span className="bb-browser-dot" />
                  <span className="bb-browser-dot" />
                  <span className="bb-browser-dot" />
                  <span className="bb-browser-url" />
                </div>
                <div className="relative aspect-[14/10] overflow-hidden bg-bb-surface">
                  {heroSlides.map((project, index) => (
                    <div
                      key={project.slug}
                      className="absolute inset-0 transition-opacity duration-500"
                      style={{ transitionDuration: '600ms', opacity: activeIndex === index ? 1 : 0 }}
                    >
                      <Image
                        alt={project.imageAlt}
                        className="object-cover"
                        fill
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 48vw"
                        src={project.image ?? project.heroImage}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-4 max-sm:flex-col max-sm:items-start">
                <div>
                  <p className="text-[22px] font-semibold tracking-[-0.03em] text-bb-ink">
                    {activeProject.name}
                  </p>
                  <p className="mt-1 text-sm text-bb-ink-50">
                    {activeProject.label}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {heroSlides.map((project, index) => (
                    <button
                      key={project.slug}
                      aria-label={`Show ${project.name}`}
                      className="h-2.5 w-2.5 rounded-full transition-all"
                      onClick={() => setActiveIndex(index)}
                      style={{
                        background:
                          activeIndex === index ? 'var(--bb-purple)' : 'rgba(15, 15, 26, 0.15)',
                        width: activeIndex === index ? '26px' : '10px',
                      }}
                      type="button"
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-bb-ink py-6">
        <div className="bb-marquee">
          <div className="bb-marquee-track">
            {[...productNames, ...productNames].map((name, index) => (
              <div key={`${name}-${index}`} className="flex items-center gap-5 px-1">
                <span className="text-[15px] font-semibold uppercase tracking-[0.08em] text-[rgba(250,250,247,0.4)]">
                  {name}
                </span>
                <span className="h-2.5 w-2.5 rotate-45 bg-bb-electric" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
