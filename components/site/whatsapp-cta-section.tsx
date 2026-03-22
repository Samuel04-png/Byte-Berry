'use client'

import { motion } from 'framer-motion'
import { WhatsAppIcon } from '@/components/site/icons'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

export function WhatsAppCTASection() {
  return (
    <motion.section
      className="bb-section bg-bb-purple text-white"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell">
        <motion.div className="mx-auto max-w-[52rem] space-y-8 text-center" variants={fadeUp}>
          <div className="space-y-4">
            <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-white/70">
              Ready To Start?
            </p>
            <h2 className="font-serif text-[clamp(46px,7vw,64px)] leading-[0.95] tracking-[-0.045em] text-white">
              <span className="block">Let&apos;s build something</span>
              <span className="block italic">together.</span>
            </h2>
            <p className="mx-auto max-w-[28rem] text-base leading-8 text-white/70">
              WhatsApp us. We reply same day.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              className="min-w-[228px]"
              href={siteConfig.whatsappFloatingHref}
              leftIcon={<WhatsAppIcon className="h-5 w-5 text-[#25D366]" />}
              rel="noreferrer"
              target="_blank"
              variant="inverted"
            >
              Start on WhatsApp
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              secondaryTone="light"
              variant="secondary"
            >
              Send us an email
            </Button>
          </div>

          <a
            className="inline-flex text-[20px] font-semibold tracking-[-0.02em] text-white"
            href={siteConfig.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            {siteConfig.whatsappNumber}
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}
