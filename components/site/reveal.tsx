'use client'

import type { PropsWithChildren } from 'react'
import { motion } from 'framer-motion'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

type RevealProps = PropsWithChildren<{
  className?: string
  delay?: number
  y?: number
}>

const easing = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: easing, delay }}
    >
      {children}
    </motion.div>
  )
}

export function PageReveal({ children, className }: PropsWithChildren<{ className?: string }>) {
  const reduceMotion = usePrefersReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easing }}
    >
      {children}
    </motion.div>
  )
}
