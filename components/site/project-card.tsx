import Image from 'next/image'
import Link from 'next/link'
import type { Project } from '@/data/site-data'

const widthByType = {
  web_desktop: '460px',
  mobile_app: '340px',
  saas_platform: '520px',
  dual_platform: '480px',
} as const

function isRealImage(src?: string | null) {
  return Boolean(src && src !== '/og-image.svg')
}

function BrowserChrome({ domain }: { domain: string }) {
  return (
    <div className="relative flex h-8 items-center bg-[#F1F0EF] px-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28CA41]" />
      </div>

      <div className="absolute left-1/2 top-1/2 flex h-[18px] w-[40%] min-w-[160px] -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-[4px] bg-[#E8E7E5] px-2 text-[10px] text-[#7B7A78] max-sm:min-w-[130px]">
        <svg aria-hidden="true" className="h-2.5 w-2.5 shrink-0" fill="none" viewBox="0 0 24 24">
          <path
            d="M7 10V8a5 5 0 1 1 10 0v2M7 10h10v8H7z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        <span className="truncate">{domain}</span>
      </div>
    </div>
  )
}

function WebFallback({ project }: { project: Project }) {
  return (
    <div
      className="flex h-full w-full flex-col justify-between p-6"
      style={{
        background: `linear-gradient(180deg, ${project.accent.soft}, rgba(255,255,255,0.88))`,
      }}
    >
      <div className="grid gap-3">
        <span className="h-2.5 w-16" style={{ backgroundColor: project.accent.solid }} />
        <div className="grid gap-2">
          <div className="h-10 rounded-[4px] bg-white/90 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
          <div className="grid grid-cols-[1.3fr_0.7fr] gap-2">
            <div className="h-32 rounded-[4px] bg-white/85 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
            <div className="grid gap-2">
              <div className="h-[62px] rounded-[4px] bg-white/85 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
              <div className="h-[62px] rounded-[4px] bg-white/85 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[15rem]">
        <p className="font-serif text-[32px] leading-[0.96] tracking-[-0.05em] text-bb-ink">
          {project.name}
        </p>
        <p className="mt-2 text-sm text-bb-ink-50">{project.label}</p>
      </div>
    </div>
  )
}

function DashboardFallback({ project }: { project: Project }) {
  return (
    <div className="h-full rounded-[10px] bg-white p-5 shadow-[0_20px_60px_rgba(15,15,26,0.12),0_4px_16px_rgba(15,15,26,0.06)]">
      <div className="grid h-full gap-4">
        <div className="flex items-center justify-between">
          <div className="grid gap-2">
            <span className="h-2.5 w-14 rounded-full" style={{ backgroundColor: project.accent.solid }} />
            <span className="h-3 w-28 rounded-full bg-[rgba(15,15,26,0.08)]" />
          </div>
          <span className="h-8 w-24 rounded-full" style={{ backgroundColor: `${project.accent.solid}18` }} />
        </div>

        <div className="grid flex-1 grid-cols-[0.95fr_0.7fr] gap-4">
          <div className="grid gap-3">
            <div className="h-32 rounded-[8px]" style={{ backgroundColor: `${project.accent.solid}14` }} />
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-[8px] bg-[rgba(15,15,26,0.05)]" />
              <div className="rounded-[8px] bg-[rgba(15,15,26,0.05)]" />
              <div className="rounded-[8px] bg-[rgba(15,15,26,0.05)]" />
            </div>
          </div>
          <div className="grid gap-3">
            <div className="rounded-[8px] bg-[rgba(15,15,26,0.05)]" />
            <div className="rounded-[8px] bg-[rgba(15,15,26,0.05)]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneFrame({
  accent,
  imageAlt,
  imageSrc,
  small = false,
}: {
  accent: string
  imageAlt: string
  imageSrc?: string | null
  small?: boolean
}) {
  const shellClasses = small
    ? 'h-[280px] w-[140px] rounded-[28px] p-[6px] md:h-[320px] md:w-[160px] md:rounded-[32px]'
    : 'h-[360px] w-[180px] rounded-[30px] p-2 md:h-[440px] md:w-[220px] md:rounded-[36px]'

  const screenClasses = small ? 'rounded-[22px]' : 'rounded-[24px] md:rounded-[28px]'
  const notchClasses = small
    ? 'h-5 w-[64px] rounded-b-[14px] md:h-6 md:w-[72px]'
    : 'h-5 w-[68px] rounded-b-[14px] md:h-6 md:w-20'

  return (
    <div
      className={`relative bg-[#1A1A1A] shadow-[0_18px_48px_rgba(15,15,26,0.22)] ${shellClasses}`}
      style={{ border: `1px solid ${accent}30` }}
    >
      <div className={`relative h-full overflow-hidden bg-white ${screenClasses}`}>
        <div className={`absolute left-1/2 top-0 z-20 -translate-x-1/2 bg-[#1A1A1A] ${notchClasses}`} />
        {isRealImage(imageSrc) ? (
          <Image
            alt={imageAlt}
            className="object-cover object-top"
            fill
            sizes={small ? '(max-width: 767px) 140px, 160px' : '(max-width: 767px) 180px, 220px'}
            src={imageSrc as string}
          />
        ) : (
          <div
            className="flex h-full w-full flex-col justify-between p-4"
            style={{ background: `linear-gradient(180deg, ${accent}1A, rgba(255,255,255,0.96))` }}
          >
            <div className="grid gap-2">
              <div className="h-10 rounded-[16px] bg-white/90 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
              <div className="h-24 rounded-[18px] bg-white/90 shadow-[0_1px_3px_rgba(15,15,26,0.06)]" />
            </div>
            <div className="grid gap-2">
              <div className="h-3 rounded-full bg-[rgba(15,15,26,0.08)]" />
              <div className="h-3 w-[72%] rounded-full bg-[rgba(15,15,26,0.08)]" />
            </div>
          </div>
        )}
        <div className="absolute bottom-2 left-1/2 z-20 h-1 w-16 -translate-x-1/2 rounded-full bg-white/30 md:w-20" />
      </div>
    </div>
  )
}

function renderMockup(project: Project) {
  const desktopImage = isRealImage(project.desktopImage)
    ? project.desktopImage
    : isRealImage(project.image)
      ? project.image
      : isRealImage(project.heroImage)
        ? project.heroImage
        : null
  const mobileImage = isRealImage(project.mobileImage)
    ? project.mobileImage
    : project.gallery.find((item) => isRealImage(item.src))?.src ?? null
  const dashboardImage = isRealImage(project.dashboardImage)
    ? project.dashboardImage
    : isRealImage(project.image)
      ? project.image
      : isRealImage(project.heroImage)
        ? project.heroImage
        : null

  if (project.projectType === 'web_desktop') {
    return (
      <div className="h-[400px] overflow-hidden rounded-t-[8px] border border-bb-ink-20 bg-white shadow-bb-panel md:h-[480px]">
        <BrowserChrome domain={project.domain} />
        <div className="relative h-[calc(100%-32px)] overflow-hidden bg-bb-surface">
          {desktopImage ? (
            <Image
              alt={project.imageAlt}
              className="object-cover object-top transition-transform ease-in-out will-change-transform md:group-hover:-translate-y-[15%]"
              fill
              sizes="(max-width: 767px) 100vw, 460px"
              src={desktopImage}
              style={{ transitionDuration: '3000ms' }}
            />
          ) : (
            <WebFallback project={project} />
          )}
        </div>
      </div>
    )
  }

  if (project.projectType === 'mobile_app') {
    return (
      <div
        className="relative flex h-[400px] items-center justify-center overflow-hidden rounded-t-[8px] border border-bb-ink-20 shadow-bb-panel md:h-[480px]"
        style={{ backgroundColor: `${project.accent.solid}14` }}
      >
        <div className="absolute bottom-4 left-1/2 flex max-w-[90%] -translate-x-1/2 flex-wrap justify-center gap-2 min-[390px]:hidden">
          {project.featurePills?.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-[rgba(15,15,26,0.06)] px-3 py-1.5 text-[11px] font-medium text-bb-ink"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="absolute right-3 top-1/2 hidden w-[92px] -translate-y-1/2 gap-2 min-[390px]:flex min-[390px]:flex-col">
          {project.featurePills?.map((pill) => (
            <span
              key={pill}
              className="rounded-full bg-[rgba(15,15,26,0.06)] px-3 py-1.5 text-center text-[11px] font-medium text-bb-ink"
            >
              {pill}
            </span>
          ))}
        </div>

        <div className="transition-transform duration-300 ease-out will-change-transform md:group-hover:[transform:perspective(800px)_rotateY(8deg)_rotateX(-4deg)]">
          <PhoneFrame
            accent={project.accent.solid}
            imageAlt={project.imageAlt}
            imageSrc={mobileImage}
          />
        </div>
      </div>
    )
  }

  if (project.projectType === 'dual_platform') {
    return (
      <div className="relative h-[400px] overflow-hidden rounded-t-[8px] border border-white/10 bg-[#1A1A1A] shadow-bb-panel md:h-[480px]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `radial-gradient(circle at top right, ${project.accent.solid}22, transparent 55%)`,
          }}
        />

        <div className="relative h-full p-4 md:p-6">
          <div className="absolute left-4 top-[18%] z-20 transition-transform duration-300 ease-out md:left-6 md:top-[21%] md:group-hover:-translate-x-2">
            <PhoneFrame
              accent={project.accent.solid}
              imageAlt={project.imageAlt}
              imageSrc={mobileImage}
              small
            />
          </div>

          <div className="absolute bottom-8 right-4 left-[34%] top-10 overflow-hidden rounded-[8px] border border-white/10 bg-white/5 transition-transform duration-300 ease-out md:left-[32%] md:right-6 md:top-12 md:[transform:perspective(1000px)_rotateY(-6deg)] md:group-hover:translate-x-1.5">
            <BrowserChrome domain={project.domain} />
            <div className="relative h-[calc(100%-32px)] overflow-hidden bg-bb-surface">
              {desktopImage ? (
                <Image
                  alt={project.imageAlt}
                  className="object-cover object-top"
                  fill
                  sizes="(max-width: 767px) 100vw, 320px"
                  src={desktopImage}
                />
              ) : (
                <WebFallback project={project} />
              )}
            </div>
          </div>

          <div className="absolute bottom-5 left-5 z-30">
            <p className="font-serif text-[20px] leading-none tracking-[-0.03em] text-white">
              {project.name}
            </p>
            <span
              className="mt-2 inline-flex rounded-full px-3 py-1 text-[11px] font-medium text-white"
              style={{ backgroundColor: `${project.accent.solid}D9` }}
            >
              {project.category}
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="relative h-[400px] overflow-hidden rounded-t-[8px] border border-bb-ink-20 shadow-bb-panel md:h-[480px]"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage: `linear-gradient(${project.accent.solid}1A 1px, transparent 1px), linear-gradient(90deg, ${project.accent.solid}1A 1px, transparent 1px)`,
        backgroundSize: '20px 20px',
      }}
    >
      <div className="grid h-full gap-4 p-4 md:grid-cols-[92px_1fr] md:p-5">
        <div className="hidden border-r border-bb-ink-20 pr-4 text-[11px] font-medium text-bb-ink-50 md:grid">
          {project.metrics?.map((metric) => (
            <div key={metric} className="flex items-center border-b border-bb-ink-20 py-3 last:border-b-0">
              <span style={{ color: project.accent.solid }}>{metric}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-2 md:hidden">
            {project.metrics?.map((metric) => (
              <span
                key={metric}
                className="rounded-full bg-white/80 px-3 py-1.5 text-[11px] font-medium"
                style={{ color: project.accent.solid }}
              >
                {metric}
              </span>
            ))}
          </div>

          <div className="relative flex-1 overflow-visible">
            <div className="absolute inset-0 rounded-[10px] bg-black/0 shadow-[0_20px_60px_rgba(15,15,26,0.12),0_4px_16px_rgba(15,15,26,0.06)] transition-all duration-300 ease-out md:group-hover:shadow-[0_24px_72px_rgba(15,15,26,0.16),0_10px_22px_rgba(15,15,26,0.08)]" />
            <div className="relative h-full overflow-hidden rounded-[10px] bg-white transition-transform duration-300 ease-out md:[transform:perspective(1200px)_rotateX(6deg)_rotateY(-3deg)] md:group-hover:[transform:perspective(1200px)_rotateX(8deg)_rotateY(-5deg)]">
              {dashboardImage ? (
                <Image
                  alt={project.imageAlt}
                  className="object-cover object-top"
                  fill
                  sizes="(max-width: 767px) 100vw, 520px"
                  src={dashboardImage}
                />
              ) : (
                <DashboardFallback project={project} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      className="group block w-full min-w-0 md:w-[var(--card-width)] md:min-w-[var(--card-width)]"
      data-cursor="card"
      href={`/work/${project.slug}`}
      style={{ ['--card-width' as string]: widthByType[project.projectType] }}
    >
      {renderMockup(project)}

      <div
        className="border border-t-0 border-bb-ink-20 bg-white px-5 py-4 shadow-bb-soft"
        style={{ borderLeft: `3px solid ${project.accent.solid}` }}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[18px] font-semibold tracking-[-0.02em] text-bb-ink">{project.name}</h3>
          <span
            className="inline-flex shrink-0 rounded-full px-3 py-1 text-[11px] font-medium"
            style={{
              backgroundColor: project.accent.soft,
              color: project.accent.solid,
            }}
          >
            {project.category}
          </span>
        </div>

        <p className="mt-3 text-[13px] leading-6 text-bb-ink-50">{project.label}</p>

        <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-medium text-bb-purple">
          View project
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
