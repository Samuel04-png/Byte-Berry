import { cn } from '@/lib/utils'

type SectionIntroProps = {
  eyebrow?: string
  title: string
  description: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionIntroProps) {
  const centered = align === 'center'

  return (
    <div className={cn('space-y-4', centered && 'mx-auto max-w-3xl text-center', className)}>
      {eyebrow ? <p className="bb-eyebrow">{eyebrow}</p> : null}
      <h2 className="bb-title">{title}</h2>
      <p className={cn('bb-copy max-w-2xl', centered && 'mx-auto')}>{description}</p>
    </div>
  )
}
