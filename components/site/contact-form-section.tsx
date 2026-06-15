'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site-data'
import { fadeUp, staggerContainer } from '@/lib/animations'

const fields = [
  { label: 'Name', name: 'name', placeholder: 'Your name', type: 'text' },
  { label: 'Business name', name: 'business', placeholder: 'Company or project name', type: 'text' },
  { label: 'Phone / WhatsApp', name: 'phone', placeholder: 'Your WhatsApp number with country code', type: 'tel' },
  { label: 'Budget range', name: 'budget', placeholder: 'Example: USD 500 — 1,500 (or your currency)', type: 'text' },
] as const

export function ContactFormSection() {
  return (
    <motion.section
      className="bb-section bb-warm-section"
      id="quote-form"
      initial="hidden"
      variants={staggerContainer}
      viewport={{ once: true, margin: '-80px' }}
      whileInView="visible"
    >
      <div className="bb-shell grid gap-8 lg:grid-cols-[0.44fr_0.56fr] lg:items-start">
        <motion.div className="space-y-5" variants={fadeUp}>
          <p className="bb-label">Request A Quote</p>
          <h2 className="bb-title">
            Prefer a form before WhatsApp? Start with a <em>quick brief</em>.
          </h2>
          <p className="bb-copy bb-copy-muted max-w-[34rem]">
            Send the essentials: who you are, what you need, your timeline, and the budget range. We&apos;ll use it to recommend the right path.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.whatsappHref} rel="noreferrer" target="_blank" variant="primary">
              Get a Free Quote on WhatsApp
            </Button>
            <Button href={`mailto:${siteConfig.email}`} variant="secondary">
              Send an email instead
            </Button>
          </div>
        </motion.div>

        <motion.form
          action={`mailto:${siteConfig.email}`}
          className="bb-panel grid gap-5 p-6 md:grid-cols-2 md:p-8"
          encType="text/plain"
          method="post"
          variants={fadeUp}
        >
          {fields.map((field) => (
            <label key={field.name} className="space-y-2 text-sm font-semibold text-bb-ink">
              <span>{field.label}</span>
              <input
                className="min-h-[48px] w-full rounded-[8px] border border-bb-ink-20 bg-white px-4 text-sm font-normal text-bb-ink outline-none transition focus:border-bb-purple"
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
              />
            </label>
          ))}

          <label className="space-y-2 text-sm font-semibold text-bb-ink md:col-span-2">
            <span>What do you need?</span>
            <select
              className="min-h-[48px] w-full rounded-[8px] border border-bb-ink-20 bg-white px-4 text-sm font-normal text-bb-ink outline-none transition focus:border-bb-purple"
              defaultValue=""
              name="project_type"
            >
              <option disabled value="">
                Select one
              </option>
              <option>Website</option>
              <option>Mobile app</option>
              <option>Business system</option>
              <option>AI automation</option>
              <option>Not sure yet</option>
            </select>
          </label>

          <label className="space-y-2 text-sm font-semibold text-bb-ink md:col-span-2">
            <span>Project message</span>
            <textarea
              className="min-h-[150px] w-full rounded-[8px] border border-bb-ink-20 bg-white px-4 py-3 text-sm font-normal leading-7 text-bb-ink outline-none transition focus:border-bb-purple"
              name="message"
              placeholder="Tell us what you want to build, what is broken, and when you want to launch."
            />
          </label>

          <div className="flex flex-col gap-3 md:col-span-2 md:flex-row md:items-center md:justify-between">
            <p className="text-xs leading-6 text-bb-ink-50">
              This opens your email app with the brief. For fastest replies, WhatsApp is still recommended.
            </p>
            <button className="bb-button bb-button-primary justify-center" type="submit">
              Request a Quote
            </button>
          </div>
        </motion.form>
      </div>
    </motion.section>
  )
}
