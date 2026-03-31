import Image from 'next/image'
import type { Project } from '@/data/site-data'
import { cn } from '@/lib/utils'

type ProjectPreviewProps = {
  project: Project
  src: string
  alt: string
  sizes: string
  priority?: boolean
  className?: string
  imageClassName?: string
  studioPaddingClassName?: string
}

export function isStudioProject(project: Pick<Project, 'imagePresentation'>) {
  return project.imagePresentation === 'studio'
}

export function getProjectPreviewImage(project: Pick<Project, 'image' | 'heroImage'>) {
  return project.image ?? project.heroImage
}

export function ProjectPreview({
  project,
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName,
  studioPaddingClassName = 'p-5 md:p-7',
}: ProjectPreviewProps) {
  const studio = isStudioProject(project)

  return (
    <div
      className={cn('relative h-full w-full overflow-hidden bg-bb-surface', className)}
      style={
        studio
          ? {
              backgroundImage: [
                `radial-gradient(circle at 82% 8%, ${project.accent.solid}24, transparent 34%)`,
                `radial-gradient(circle at 15% 100%, ${project.accent.solid}18, transparent 30%)`,
                `linear-gradient(180deg, rgba(255,255,255,0.98), ${project.accent.soft})`,
              ].join(','),
            }
          : undefined
      }
    >
      {studio ? (
        <>
          <div className="pointer-events-none absolute inset-x-[12%] top-0 h-24 rounded-full bg-white/80 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-[18%] bottom-5 h-10 rounded-full bg-black/10 blur-2xl" />
        </>
      ) : null}

      <Image
        alt={alt}
        className={cn(
          'transition-transform duration-500 ease-out',
          studio ? cn('object-contain', studioPaddingClassName) : 'object-cover object-top',
          imageClassName,
        )}
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />

      {studio ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/[0.06] to-transparent" />
      ) : null}
    </div>
  )
}
