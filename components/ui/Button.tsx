import Link from 'next/link'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ButtonVariant = 'primary' | 'secondary' | 'nav' | 'inverted'
type SecondaryTone = 'default' | 'light'

type BaseProps = {
  children: ReactNode
  className?: string
  href?: string
  leftIcon?: ReactNode
  rel?: string
  secondaryTone?: SecondaryTone
  target?: string
  variant?: ButtonVariant
}

type Props = BaseProps & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>

function ButtonContent({
  children,
  leftIcon,
  secondaryTone,
  variant,
}: Pick<BaseProps, 'children' | 'leftIcon' | 'secondaryTone' | 'variant'>) {
  if (variant === 'secondary') {
    return (
      <>
        <span className="font-semibold tracking-[0.02em]">{children}</span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex text-sm leading-none animate-bb-arrow-bounce',
            secondaryTone === 'light' ? 'text-white' : 'text-bb-purple',
          )}
        >
          ↓
        </span>
      </>
    )
  }

  return (
    <>
      {leftIcon ? <span className="shrink-0">{leftIcon}</span> : null}
      <span className="font-semibold tracking-[0.02em]">{children}</span>
      {variant === 'primary' || variant === 'inverted' ? (
        <span
          aria-hidden="true"
          className={cn(
            'flex h-7 w-7 items-center justify-center rounded-full text-sm transition-transform duration-200 group-hover:translate-x-1',
            variant === 'inverted' ? 'bg-[rgba(124,58,237,0.1)] text-bb-purple' : 'bg-white/15 text-white',
          )}
        >
          →
        </span>
      ) : null}
    </>
  )
}

export function Button({
  children,
  className,
  href,
  leftIcon,
  rel,
  secondaryTone = 'default',
  target,
  type = 'button',
  variant = 'primary',
  ...props
}: Props) {
  const shared = 'group inline-flex items-center justify-center transition-all duration-200'
  const variants: Record<ButtonVariant, string> = {
    primary:
      'min-h-[52px] gap-3 rounded-full border border-white/20 bg-bb-purple px-6 py-3.5 text-[15px] text-white hover:bg-bb-purple-d hover:shadow-[0_0_0_4px_rgba(124,58,237,0.15)]',
    secondary: cn(
      'relative gap-2 pb-1 text-[15px] font-semibold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100',
      secondaryTone === 'light'
        ? 'text-white after:bg-white hover:text-white/90'
        : 'text-bb-purple after:bg-bb-purple hover:text-bb-purple-d',
    ),
    nav:
      'min-h-[44px] rounded-full border-[1.5px] border-bb-purple bg-transparent px-5 py-2.5 text-[14px] font-semibold text-bb-purple hover:bg-bb-purple hover:text-white',
    inverted:
      'min-h-[52px] gap-3 rounded-full border border-white/70 bg-white px-6 py-3.5 text-[15px] text-bb-purple hover:bg-white/90 hover:shadow-[0_0_0_4px_rgba(124,58,237,0.15)]',
  }

  const classes = cn(shared, variants[variant], className)
  const content = (
    <ButtonContent
      leftIcon={leftIcon}
      secondaryTone={secondaryTone}
      variant={variant}
    >
      {children}
    </ButtonContent>
  )

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link className={classes} href={href}>
          {content}
        </Link>
      )
    }

    return (
      <a className={classes} href={href} rel={rel} target={target}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {content}
    </button>
  )
}
