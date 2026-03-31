import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PageReveal, Reveal } from '@/components/site/reveal'
import { ArrowRightIcon } from '@/components/site/icons'
import {
  getProjectPreviewImage,
  isStudioProject,
  ProjectPreview,
} from '@/components/site/project-preview'
import { Button } from '@/components/ui/Button'
import { getProjectBySlug, getRelatedProjects, projects, siteConfig } from '@/data/site-data'

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return {
      title: 'Project Not Found',
    }
  }

  return {
    title: `${project.name} Case Study`,
    description: `${project.name}: ${project.summary}`,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
    openGraph: {
      title: `${project.name} Case Study | Byte & Berry`,
      description: project.summary,
      images: [
        {
          url: project.heroImage,
          alt: project.heroAlt,
        },
      ],
    },
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const related = getRelatedProjects(project.slug)
  const whatsappHref = `https://wa.me/${siteConfig.whatsappApiNumber}?text=${encodeURIComponent(
    `Hi Byte & Berry, I want to build something like ${project.name}.`,
  )}`
  const usesStudioMockups = isStudioProject(project)

  return (
    <PageReveal>
      <section className="bb-section bb-paper-section">
        <div className="bb-shell space-y-12">
          <div className="space-y-6">
            <p className="bb-label">
              {project.category}
              <span aria-hidden="true">&nbsp;&middot;&nbsp;</span>
              {project.location}
            </p>
            <h1 className="bb-title max-w-[52rem]">{project.name}</h1>
            <p className="max-w-3xl text-[17px] leading-8 text-bb-ink-50">{project.summary}</p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="w-full sm:w-auto"
                href={whatsappHref}
                rel="noreferrer"
                target="_blank"
                variant="primary"
              >
                Ask About This Build
              </Button>
              <Button className="w-full sm:w-auto" href="/work" variant="secondary">
                Back to Work
              </Button>
            </div>
          </div>

          <Reveal>
            <div className="bb-panel overflow-hidden">
              <div
                className={`relative bg-bb-surface ${usesStudioMockups ? 'aspect-[12/7]' : 'aspect-[16/9]'}`}
              >
                <ProjectPreview
                  alt={project.heroAlt}
                  priority
                  project={project}
                  sizes="100vw"
                  src={getProjectPreviewImage(project)}
                  studioPaddingClassName="p-6 sm:p-8 lg:p-10"
                />
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="bb-panel p-8">
              <div className="space-y-5">
                <p className="bb-label">The Story</p>
                <h2 className="bb-title !text-[clamp(30px,4vw,40px)]">How the product had to feel</h2>
                <p className="bb-copy">{project.story}</p>
              </div>
            </Reveal>

            <Reveal className="bb-surface-panel p-8" delay={0.08}>
              <div className="space-y-6">
                <div>
                  <p className="bb-label">Delivery Snapshot</p>
                  <h2 className="mt-3 font-serif text-[clamp(30px,4vw,40px)] leading-[0.98] tracking-[-0.04em] text-bb-ink">
                    What shipped
                  </h2>
                </div>

                <div className="space-y-5 text-sm text-bb-ink-50">
                  <div className="border-t border-bb-ink-20 pt-4">
                    <p className="mb-2 font-semibold uppercase tracking-[0.08em] text-bb-ink">
                      Timeline
                    </p>
                    <p>{project.timeline}</p>
                  </div>

                  <div className="border-t border-bb-ink-20 pt-4">
                    <p className="mb-2 font-semibold uppercase tracking-[0.08em] text-bb-ink">
                      Outcome
                    </p>
                    <p className="normal-case tracking-normal">{project.outcome}</p>
                  </div>

                  <div className="border-t border-bb-ink-20 pt-4">
                    <p className="mb-3 font-semibold uppercase tracking-[0.08em] text-bb-ink">
                      Scope
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service) => (
                        <span
                          key={service}
                          className="rounded-full bg-white px-3 py-1 text-[11px] font-medium text-bb-ink-50 shadow-[0_1px_3px_rgba(15,15,26,0.06)]"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {project.gallery.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-3">
              {project.gallery.map((image, index) => (
                <Reveal key={image.src} delay={index * 0.06}>
                  <div className="bb-panel overflow-hidden">
                    <div
                      className={`relative bg-bb-surface ${usesStudioMockups ? 'aspect-[12/7]' : 'aspect-[4/3]'}`}
                    >
                      <ProjectPreview
                        alt={image.alt}
                        project={project}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        src={image.src}
                        studioPaddingClassName="p-4 md:p-6"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : null}

          <div className="space-y-6">
            <Reveal>
              <div className="flex items-end justify-between gap-6 max-md:flex-col max-md:items-start">
                <div className="space-y-3">
                  <p className="bb-label">More Work</p>
                  <h2 className="bb-title">See what else we&apos;ve built.</h2>
                </div>
                <Button className="w-full sm:w-auto" href="/work" variant="secondary">
                  View All Projects
                </Button>
              </div>
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.05}>
                  <Link className="group block overflow-hidden bb-panel" href={`/work/${item.slug}`}>
                    <div
                      className={`relative overflow-hidden bg-bb-surface ${
                        isStudioProject(item) ? 'aspect-[12/7]' : 'aspect-[4/3]'
                      }`}
                    >
                      <ProjectPreview
                        alt={item.heroAlt}
                        imageClassName="group-hover:scale-[1.04]"
                        project={item}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        src={item.heroImage}
                        studioPaddingClassName="p-4 md:p-5"
                      />
                    </div>
                    <div className="space-y-3 p-5">
                      <p className="bb-label">{item.category}</p>
                      <h3 className="bb-card-title text-bb-ink">{item.name}</h3>
                      <p className="text-sm leading-7 text-bb-ink-50">{item.summary}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-bb-purple">
                        View Project
                        <ArrowRightIcon className="h-4 w-4" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageReveal>
  )
}
