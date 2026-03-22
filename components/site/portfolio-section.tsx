import Image from 'next/image'
import Link from 'next/link'
import { featuredProjects, productNames } from '@/data/site-data'
import { ArrowRightIcon } from '@/components/site/icons'
import { Reveal } from '@/components/site/reveal'
import { SectionIntro } from '@/components/site/section-intro'
import { cn } from '@/lib/utils'

const layoutClasses = [
  'lg:col-span-7 lg:row-span-2',
  'lg:col-span-5',
  'lg:col-span-5',
  'lg:col-span-3',
  'lg:col-span-6',
  'lg:col-span-3',
]

export function PortfolioSection({
  compact = false,
  showCta = true,
}: {
  compact?: boolean
  showCta?: boolean
}) {
  return (
    <section className={cn('bb-section', compact && 'pt-0')} id="work">
      <div className="bb-shell space-y-10">
        <Reveal>
          <SectionIntro
            description="Real projects. Real businesses. Real results."
            title="What we've built"
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-12 lg:auto-rows-[220px]">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.slug}
              className={cn('relative', layoutClasses[index])}
              delay={index * 0.06}
            >
              <Link
                className="group bb-clockwise-border relative block h-[260px] overflow-hidden rounded-xl border border-white/8 bg-bb-dark lg:h-full"
                href={`/work/${project.slug}`}
              >
                <Image
                  alt={project.heroAlt}
                  className="object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  src={project.heroImage}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent transition duration-300 group-hover:from-black/84" />
                <div className="absolute inset-x-0 bottom-0 space-y-4 p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em]"
                      style={{
                        backgroundColor: project.accent.soft,
                        borderColor: `${project.accent.solid}55`,
                        color: project.accent.solid,
                      }}
                    >
                      {project.category}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-[22px] font-semibold tracking-[-0.02em] text-bb-white">
                      {project.name}
                    </h3>
                    <p className="max-w-[30rem] text-sm leading-7 text-white/72">{project.label}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-bb-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 translate-y-3">
                    View Project
                    <ArrowRightIcon className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bb-marquee rounded-xl border border-white/8 bg-bb-dark/70 px-0 py-4">
            <div className="bb-marquee-track">
              {[...productNames, ...productNames].map((name, index) => (
                <div key={`${name}-${index}`} className="flex items-center gap-5 px-1">
                  <span className="text-sm uppercase tracking-[0.12em] text-bb-muted">{name}</span>
                  <span className="h-1.5 w-1.5 rotate-45 bg-[#1A7FD4]" />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {showCta ? (
          <Reveal className="flex justify-start max-md:justify-center">
            <Link className="bb-button bb-button-secondary max-md:max-w-[280px]" href="/work">
              See More Case Studies
            </Link>
          </Reveal>
        ) : null}
      </div>
    </section>
  )
}
