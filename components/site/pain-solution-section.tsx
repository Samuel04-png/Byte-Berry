'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { painPoints, siteConfig, solutionPoints } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function PainSolutionSection() {
  return (
    <motion.section
      className="bb-section bb-dark-section overflow-hidden"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell space-y-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
          <motion.div className="relative space-y-10" variants={fadeUp}>
            <span className="pointer-events-none absolute left-0 top-[-3.5rem] font-serif text-[120px] leading-none tracking-[-0.08em] text-[rgba(250,250,247,0.08)]">
              01
            </span>

            <div className="relative z-10 space-y-4">
              <p className="bb-label bb-label-dark">The Pain</p>
              <h2 className="font-serif text-[clamp(36px,4vw,40px)] leading-[0.98] tracking-[-0.04em] text-bb-paper">
                Sound familiar?
              </h2>
            </div>

            <div className="relative z-10 border-t border-[rgba(250,250,247,0.1)]">
              {painPoints.map((point) => (
                <div
                  key={point}
                  className="grid grid-cols-[20px_1fr] gap-4 border-b border-[rgba(250,250,247,0.1)] py-5"
                >
                  <span className="pt-1 text-lg leading-none text-bb-amber">&times;</span>
                  <p className="text-[18px] leading-[1.7] text-bb-paper-60">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            aria-hidden="true"
            className="hidden w-px self-stretch bg-[rgba(250,250,247,0.1)] lg:block"
            variants={fadeUp}
          />

          <motion.div className="relative space-y-10" variants={fadeUp}>
            <span className="pointer-events-none absolute left-0 top-[-3.5rem] font-serif text-[120px] leading-none tracking-[-0.08em] text-[rgba(250,250,247,0.08)]">
              02
            </span>

            <div className="relative z-10 space-y-4">
              <p className="bb-label bb-label-dark">The Shift</p>
              <h2 className="font-serif text-[clamp(36px,4vw,40px)] leading-[0.98] tracking-[-0.04em] text-bb-paper">
                Here&apos;s what changes.
              </h2>
            </div>

            <div className="relative z-10 border-t border-[rgba(250,250,247,0.1)]">
              {solutionPoints.map((point) => (
                <div
                  key={point}
                  className="grid grid-cols-[20px_1fr] gap-4 border-b border-[rgba(250,250,247,0.1)] py-5"
                >
                  <span className="pt-1 text-lg leading-none text-[#22C55E]">&#10003;</span>
                  <p className="text-[18px] leading-[1.7] text-bb-paper-60">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="space-y-6 text-center" variants={fadeUp}>
          <p className="font-serif text-[clamp(40px,5vw,48px)] italic leading-[0.96] tracking-[-0.04em] text-bb-paper">
            Ready to be found?
          </p>
          <div className="flex justify-center">
            <Button href={siteConfig.whatsappHref} rel="noreferrer" target="_blank" variant="primary">
              WhatsApp Us Now
            </Button>
          </div>
          <p className="text-sm text-bb-paper-60">
            No long contracts. No surprises. Just results.
          </p>
        </motion.div>
      </div>
    </motion.section>
  )
}
