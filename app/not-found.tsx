import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bb-section">
      <div className="bb-shell space-y-6 text-center">
        <p className="bb-eyebrow">404</p>
        <h1 className="font-display text-[clamp(40px,7vw,84px)] font-bold leading-[0.94] tracking-[-0.03em] text-bb-white">
          This page went missing.
        </h1>
        <p className="mx-auto max-w-2xl text-lg leading-8 text-bb-muted">
          The link may have changed, but the quickest route back is still the homepage.
        </p>
        <div className="flex justify-center">
          <Link className="bb-button bb-button-secondary max-w-[240px]" href="/">
            Back Home
          </Link>
        </div>
      </div>
    </section>
  )
}
