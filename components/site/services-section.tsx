'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { services, siteConfig } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ServicesSection() {
  const [featuredService, ...serviceRows] = services
  const featuredHighlights = ['6-week launch', 'Mobile-first', 'WhatsApp-ready']

  return (
    <motion.section
      className="bb-section bb-paper-section"
      id="services"
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
            <p className="bb-label">Services</p>
            <h2 className="bb-title">
              We build <em>systems</em> that make growth easier.
            </h2>
          </div>
          <p className="max-w-[24rem] text-sm leading-7 text-bb-ink-50">
            Start with the part that is costing you the most right now, then let us
            connect the rest.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[0.55fr_0.45fr]">
          <motion.article
            className="bb-ink-panel relative isolate overflow-hidden p-8 md:p-10"
            variants={fadeUp}
          >
            <div
              aria-hidden="true"
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(124,58,237,0.3), transparent 34%), radial-gradient(circle at bottom left, rgba(26,127,212,0.18), transparent 26%)',
              }}
            />
            <span className="pointer-events-none absolute right-6 top-3 font-serif text-[140px] leading-none tracking-[-0.08em] text-[rgba(250,250,247,0.08)]">
              {featuredService.number}
            </span>

            <div className="relative z-10 flex h-full flex-col justify-between gap-10">
              <div className="space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <p className="bb-label bb-label-dark">Featured Service</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.08em] text-bb-paper-70">
                    Most requested
                  </span>
                </div>
                <div className="space-y-4">
                  <h3 className="font-serif text-[clamp(38px,5vw,42px)] leading-[0.98] tracking-[-0.04em] text-bb-paper">
                    {featuredService.title}
                  </h3>
                  <p className="max-w-[34rem] text-base leading-8 text-bb-paper-60">
                    {featuredService.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {featuredHighlights.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.08em] text-bb-paper-70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="hidden max-w-[22rem] grid-cols-[1.35fr_0.75fr] gap-3 md:grid">
                  <div className="grid gap-3 rounded-[8px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="h-10 rounded-[6px] bg-white/90" />
                    <div className="grid grid-cols-[1.1fr_0.75fr] gap-2">
                      <div className="h-28 rounded-[6px] bg-white/85" />
                      <div className="grid gap-2">
                        <div className="h-[52px] rounded-[6px] bg-white/85" />
                        <div className="h-[52px] rounded-[6px] bg-white/85" />
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-3 rounded-[8px] border border-white/10 bg-white/5 p-3 backdrop-blur-sm">
                    <div className="h-16 rounded-[6px] bg-white/85" />
                    <div className="h-24 rounded-[6px] bg-white/85" />
                    <div className="h-8 rounded-[6px] bg-white/85" />
                  </div>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.08em] text-bb-purple">
                  {featuredService.price}
                </p>
                <Button
                  href={siteConfig.whatsappHref}
                  rel="noreferrer"
                  secondaryTone="light"
                  target="_blank"
                  variant="secondary"
                >
                  See website pricing
                </Button>
              </div>
            </div>
          </motion.article>

          <motion.div className="flex flex-col gap-2" variants={fadeUp}>
            {serviceRows.map((service) => (
              <article
                key={service.id}
                className="group relative overflow-hidden rounded-[8px] border border-transparent transition-all duration-300 hover:border-bb-ink-20 hover:bg-white hover:shadow-bb-soft"
              >
                <span className="absolute left-0 top-0 h-full w-[3px] origin-center scale-y-0 bg-bb-purple transition-transform duration-300 group-hover:scale-y-100" />
                <div className="flex min-w-0 flex-col gap-5 px-4 py-5 md:px-5">
                  <div className="flex items-start justify-between gap-4 max-md:flex-col max-md:items-start">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-bb-ink-50">
                        {service.number}
                      </span>
                      <div className="space-y-2">
                        <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-bb-ink">
                          {service.title}
                        </h3>
                        <p className="max-w-[27rem] text-sm leading-7 text-bb-ink-50">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 max-md:pl-8">
                      <span className="rounded-full bg-bb-purple-l px-3 py-1.5 text-right text-sm font-semibold text-bb-purple">
                        {service.price}
                      </span>
                      <span className="translate-x-[-4px] opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                        <svg aria-hidden="true" className="h-4 w-4 text-bb-purple" fill="none" viewBox="0 0 24 24">
                          <path
                            d="M5 12h14M13 6l6 6-6 6"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="1.8"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-4 border-t border-bb-ink-20/70 pt-4 max-md:pl-8">
                    <p className="text-[13px] leading-6 text-bb-ink-50">
                      Better for teams that need clarity, speed, and a cleaner digital handoff.
                    </p>
                    <Button
                      href={siteConfig.whatsappHref}
                      rel="noreferrer"
                      target="_blank"
                      variant="secondary"
                    >
                      Ask on WhatsApp
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
