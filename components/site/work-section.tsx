'use client'

import { useEffect, useRef } from 'react'
import { ProjectCard } from '@/components/site/project-card'
import { workProjects } from '@/data/site-data'
import { usePrefersReducedMotion } from '@/lib/use-prefers-reduced-motion'

export function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (reduceMotion) {
      return
    }

    let cleanup: (() => void) | undefined
    let mounted = true

    const initializeScroll = async () => {
      const gsapPackage = await import('gsap')
      const scrollTriggerPackage = await import('gsap/ScrollTrigger')
      const gsap = gsapPackage.gsap || gsapPackage.default || gsapPackage
      const ScrollTrigger =
        scrollTriggerPackage.ScrollTrigger ||
        scrollTriggerPackage.default ||
        scrollTriggerPackage

      if (!mounted || !sectionRef.current || !viewportRef.current || !trackRef.current) {
        return
      }

      gsap.registerPlugin(ScrollTrigger)

      const media = ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          if (!viewportRef.current || !trackRef.current || !sectionRef.current) {
            return undefined
          }

          const totalWidth = Math.max(trackRef.current.scrollWidth - viewportRef.current.offsetWidth, 0)

          if (totalWidth === 0) {
            return undefined
          }

          const tween = gsap.to(trackRef.current, {
            x: -totalWidth,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top top',
              end: `+=${totalWidth * 1.2}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          })

          return () => {
            tween.scrollTrigger?.kill()
            tween.kill()
          }
        },
      }) as { kill: (revert: boolean) => void } | undefined

      cleanup = () => media?.kill(true)
    }

    initializeScroll()

    return () => {
      mounted = false
      cleanup?.()
    }
  }, [reduceMotion])

  return (
    <section ref={sectionRef} className="bb-section bb-paper-section overflow-hidden" id="work">
      <div className="bb-shell">
        <div className="space-y-5">
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <h2 className="bb-title">What we&apos;ve built</h2>
            <p className="bb-label">10 projects&nbsp;&middot;&nbsp;2025-2026</p>
          </div>
          <div className="bb-divider" />
        </div>
      </div>

      <div ref={viewportRef} className="bb-shell mt-10 overflow-hidden">
        <div ref={trackRef} className="flex gap-6 max-md:flex-col">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
