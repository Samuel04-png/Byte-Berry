'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { offerPackages, siteConfig } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function PackagesSection() {
  return (
    <motion.section
      className="bb-section bb-paper-section"
      id="packages"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell space-y-12">
        <motion.div
          className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start"
          variants={fadeUp}
        >
          <div className="space-y-4">
            <p className="bb-label">Packages</p>
            <h2 className="bb-title max-w-[54rem]">
              Start with the solution your business needs <em>most</em>.
            </h2>
          </div>
          <p className="max-w-[25rem] text-sm leading-7 text-bb-ink-50">
            Clear starting points for websites, custom systems, AI automation, and mobile apps — built around outcomes, not vague tech promises.
          </p>
        </motion.div>

        <motion.div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4" variants={fadeUp}>
          {offerPackages.map((offer) => (
            <article
              key={offer.title}
              className="group flex min-h-[420px] flex-col justify-between overflow-hidden rounded-[8px] border border-bb-ink-20 bg-white p-6 shadow-bb-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-bb-panel"
            >
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="bb-label">{offer.eyebrow}</p>
                  <h3 className="text-[28px] font-semibold leading-[1.02] tracking-[-0.04em] text-bb-ink">
                    {offer.title}
                  </h3>
                  <p className="text-sm leading-7 text-bb-ink-50">{offer.bestFor}</p>
                </div>

                <div className="space-y-3 border-t border-bb-ink-20 pt-5">
                  <p className="text-[13px] font-semibold uppercase tracking-[0.1em] text-bb-purple">
                    Includes
                  </p>
                  <ul className="space-y-2 text-sm leading-6 text-bb-ink-50">
                    {offer.includes.map((item) => (
                      <li key={item} className="grid grid-cols-[14px_1fr] gap-3">
                        <span className="pt-1 text-bb-purple">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <p className="rounded-full bg-bb-purple-l px-3 py-1.5 text-center text-sm font-semibold text-bb-purple">
                  {offer.price}
                </p>
                <Button
                  className="w-full"
                  href={siteConfig.whatsappHref}
                  rel="noreferrer"
                  target="_blank"
                  variant="primary"
                >
                  {offer.cta}
                </Button>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
