'use client'

import { ProjectCard } from '@/components/site/project-card'
import { workProjects } from '@/data/site-data'

export function WorkSection() {
  return (
    <section className="bb-section bb-paper-section overflow-hidden" id="work">
      <div className="bb-shell">
        <div className="space-y-5">
          <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
            <h2 className="bb-title">What we&apos;ve built</h2>
            <p className="bb-label">10 projects&nbsp;&middot;&nbsp;2025-2026</p>
          </div>
          <div className="bb-divider" />
        </div>
      </div>

      <div className="bb-shell mt-10 overflow-x-auto overflow-y-visible pb-6 [scrollbar-width:thin]">
        <div className="flex w-max gap-6 max-md:w-full max-md:flex-col">
          {workProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
