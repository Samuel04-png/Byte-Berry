'use client'

import Image from 'next/image'
import { animate, motion, useInView, useMotionValue, useMotionValueEvent, useTransform } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { founders, proofStats } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

function AnimatedStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, Math.round)
  const [displayValue, setDisplayValue] = useState(0)

  useMotionValueEvent(rounded, 'change', (latest) => {
    setDisplayValue(latest)
  })

  useEffect(() => {
    if (!isInView) {
      return
    }

    const controls = animate(motionValue, value, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    })

    return () => controls.stop()
  }, [isInView, motionValue, value])

  return (
    <div ref={ref} className="space-y-2 border-b border-bb-ink-20 py-5 last:border-b-0">
      <p className="font-serif text-[72px] leading-[0.9] tracking-[-0.05em] text-bb-ink">
        {displayValue}
        {suffix}
      </p>
      <p className="text-[15px] text-bb-ink-50">{label}</p>
    </div>
  )
}

export function ProofSection() {
  return (
    <motion.section
      className="bb-section bb-warm-section"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell grid gap-12 lg:grid-cols-[0.46fr_0.54fr] lg:items-start">
        <motion.div className="space-y-6" variants={fadeUp}>
          <p className="bb-label">Proof</p>
          <h2 className="bb-title">
            The numbers <em>behind</em> the work.
          </h2>

          <div>
            {proofStats.map((stat) => (
              <AnimatedStat
                key={stat.label}
                label={stat.label}
                suffix={stat.suffix}
                value={stat.value}
              />
            ))}
          </div>
        </motion.div>

        <motion.div className="relative space-y-8" variants={fadeUp}>
          <span className="pointer-events-none absolute left-[-0.4rem] top-[-2.75rem] font-serif text-[120px] italic leading-none text-[rgba(0,82,255,0.2)]">
            &quot;
          </span>

          <div className="relative z-10 space-y-5">
            <p className="font-serif text-[clamp(28px,3.2vw,38px)] italic leading-[1.45] tracking-[-0.03em] text-bb-ink">
              We identified a gap in the accounting software market, designed ZedBooks
              in six weeks, and turned it into a live SaaS product that businesses
              are paying for every month. That&apos;s the kind of work
              we do.
            </p>
            <p className="text-sm font-medium uppercase tracking-[0.08em] text-bb-ink-50">
              Samuel, Byte &amp; Berry
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            {founders.map((founder) => (
              <div key={founder.name} className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border border-bb-ink-20 bg-white">
                  <Image
                    alt={founder.alt}
                    className="object-cover"
                    fill
                    loading="eager"
                    sizes="56px"
                    src={founder.image}
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold text-bb-ink">{founder.name}</p>
                  <p className="text-sm text-bb-ink-50">{founder.role}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
