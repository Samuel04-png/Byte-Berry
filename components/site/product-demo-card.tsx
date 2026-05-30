import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { productCards } from '@/data/site-data'

type ProductCard = (typeof productCards)[number]

type Props = {
  className?: string
  product: ProductCard
  variant?: 'dark' | 'light'
}

function ProductMockup({ product, variant = 'light' }: Pick<Props, 'product' | 'variant'>) {
  const isZedBooks = product.id === 'zedbooks'
  const tone = isZedBooks
    ? {
        accent: 'bg-indigo-500',
        soft: 'bg-indigo-500/12',
        line: 'bg-indigo-500/55',
        label: 'Finance command centre',
        primaryMetric: 'ZMW 42,680',
        secondaryMetric: 'Invoices cleared',
      }
    : {
        accent: 'bg-violet-500',
        soft: 'bg-violet-500/12',
        line: 'bg-violet-500/55',
        label: 'Loan operations board',
        primaryMetric: '83%',
        secondaryMetric: 'Repayment health',
      }

  if ('image' in product && product.image) {
    return (
      <div className="relative aspect-[16/10] overflow-hidden bg-bb-surface">
        <Image
          alt={product.alt}
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          src={product.image}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/18 bg-white/90 p-3 text-bb-ink shadow-[0_14px_40px_rgba(15,15,26,0.18)] backdrop-blur">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-bb-ink-50">
                Demo-ready dashboard
              </p>
              <p className="mt-1 text-lg font-semibold tracking-[-0.03em]">{product.title}</p>
            </div>
            <span className="rounded-full bg-bb-purple px-3 py-1 text-xs font-semibold text-white">
              SaaS
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'relative aspect-[16/10] overflow-hidden',
        variant === 'dark' ? 'bg-bb-dark' : 'bg-bb-surface',
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.22),transparent_32%),linear-gradient(135deg,rgba(15,15,26,0.08),transparent)]" />
      <div className="absolute inset-4 rounded-2xl border border-white/35 bg-white/88 p-4 shadow-[0_22px_60px_rgba(15,15,26,0.18)] backdrop-blur">
        <div className="flex items-center justify-between gap-4 border-b border-bb-ink-20 pb-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-bb-ink-50">
              {tone.label}
            </p>
            <p className="mt-1 text-xl font-semibold tracking-[-0.04em] text-bb-ink">{product.title}</p>
          </div>
          <div className={cn('h-9 w-9 rounded-full', tone.soft)}>
            <div className={cn('m-2 h-5 w-5 rounded-full', tone.accent)} />
          </div>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-bb-ink-20 bg-bb-paper p-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-bb-ink-50">
              This month
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-bb-ink">
              {tone.primaryMetric}
            </p>
            <p className="mt-1 text-xs text-bb-ink-50">{tone.secondaryMetric}</p>
          </div>
          <div className="rounded-xl border border-bb-ink-20 bg-bb-paper p-3">
            <div className="mb-3 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em] text-bb-ink-50">
              <span>Workflow</span>
              <span>Live</span>
            </div>
            <div className="space-y-2">
              {product.workflow.slice(0, 4).map((step, index) => (
                <div key={step} className="grid grid-cols-[auto_1fr_auto] items-center gap-2 text-xs text-bb-ink-50">
                  <span className={cn('h-2 w-2 rounded-full', index === 0 ? tone.accent : 'bg-bb-ink-20')} />
                  <span>{step}</span>
                  <span className={cn('h-1.5 rounded-full', tone.line)} style={{ width: `${72 - index * 11}px` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ProductDemoCard({ className, product, variant = 'light' }: Props) {
  return (
    <article className={cn('bb-panel group h-full overflow-hidden', className)} id={product.id}>
      <ProductMockup product={product} variant={variant} />
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="bb-label">Demo-ready Product</p>
            <h2 className="bb-card-title text-bb-ink">{product.title}</h2>
            <p className="text-sm font-medium leading-6 text-bb-ink-50">{product.shortPitch}</p>
          </div>
          <span className="rounded-full bg-bb-purple-l px-3 py-1 text-sm font-semibold text-bb-purple">
            {product.price}
          </span>
        </div>

        <p className="text-sm leading-7 text-bb-ink-50">{product.description}</p>

        <div className="grid gap-2 sm:grid-cols-3">
          {product.outcomes.map((outcome) => (
            <div
              className="rounded-xl border border-bb-ink-20 bg-bb-surface px-3 py-3 text-xs font-semibold leading-5 text-bb-ink"
              key={outcome}
            >
              {outcome}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <Button className="w-full sm:w-auto" href={product.demoHref} rel="noreferrer" target="_blank" variant="primary">
            {product.ctaLabel}
          </Button>
          <Button className="w-full sm:w-auto" href={product.href} rel="noreferrer" target="_blank" variant="secondary">
            Visit live product
          </Button>
        </div>
      </div>
    </article>
  )
}
