'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { processSteps, siteConfig } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function ProcessSection() {
  return (
    <motion.section
      className="bb-section bb-warm-section"
      id="process"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell space-y-12">
        <motion.div
          className="grid gap-6 lg:grid-cols-[0.62fr_0.38fr] lg:items-end"
          variants={fadeUp}
        >
          <div className="space-y-4">
            <p className="bb-label">How We Work</p>
            <h2 className="bb-title max-w-[58rem]">
              How we turn your idea into a <em>working system</em>.
            </h2>
          </div>
          <p className="text-sm leading-7 text-bb-ink-50">
            Every build starts with the business problem first. Then we design,
            build, test, launch, and hand over a system your team can actually use.
          </p>
        </motion.div>

        <motion.div className="grid gap-4 md:grid-cols-5" variants={fadeUp}>
          {processSteps.map((step) => (
            <article
              key={step.title}
              className="bb-panel relative overflow-hidden p-5 md:min-h-[260px]"
            >
              <span className="font-serif text-[56px] leading-none tracking-[-0.08em] text-bb-purple-l">
                {step.number}
              </span>
              <div className="mt-8 space-y-3">
                <h3 className="text-[20px] font-semibold tracking-[-0.03em] text-bb-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-bb-ink-50">{step.description}</p>
              </div>
            </article>
          ))}
        </motion.div>

        <motion.div className="flex flex-col items-start justify-between gap-5 rounded-[8px] border border-bb-ink-20 bg-white p-6 shadow-bb-soft md:flex-row md:items-center" variants={fadeUp}>
          <p className="max-w-[42rem] text-base leading-8 text-bb-ink-80">
            Not sure if you need a website, app, business system, or automation? Send us your workflow and we&apos;ll recommend the simplest path.
          </p>
          <Button href={siteConfig.whatsappHref} rel="noreferrer" target="_blank" variant="primary">
            Start Your Project on WhatsApp
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
