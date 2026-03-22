import { Reveal } from '@/components/site/reveal'
import { SectionIntro } from '@/components/site/section-intro'
import { siteConfig } from '@/data/site-data'

const stats = [
  { value: '10+', label: 'Projects' },
  { value: '6', label: 'Weeks Avg Delivery' },
  { value: '4', label: 'SaaS Products Live' },
  { value: '100%', label: 'Zambian-Built' },
]

export function TractionSection() {
  return (
    <section className="bb-section">
      <div className="bb-shell space-y-10">
        <Reveal>
          <SectionIntro
            align="center"
            description="Proof first. Because no one in Lusaka should have to guess whether you can actually ship."
            title="The numbers behind the work"
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05}>
              <article className="bb-card border-t-2 border-t-[#1A7FD4] p-6">
                <p className="font-display text-[clamp(52px,7vw,72px)] leading-none tracking-[-0.04em] text-bb-white">
                  {stat.value}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.08em] text-bb-muted">{stat.label}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="bb-card p-8">
            <blockquote className="space-y-5">
              <p className="font-display text-[clamp(28px,4vw,40px)] leading-[1.08] tracking-[-0.03em] text-bb-white">
                “We walked into Tailored Manor, a luxury furniture store in Lusaka, pitched them the same afternoon, and built them a room visualiser that no furniture store in Zambia has ever had. That&apos;s the kind of work we do.”
              </p>
              <footer className="text-sm uppercase tracking-[0.08em] text-bb-muted">
                Samuel, Technical Lead &amp; Co-Founder
              </footer>
            </blockquote>
          </div>
        </Reveal>

        <Reveal className="flex justify-center">
          <a
            className="bb-button bb-button-primary w-full max-w-[360px] justify-center"
            href={siteConfig.whatsappHref}
            rel="noreferrer"
            target="_blank"
          >
            Ask About Your Launch Window
          </a>
        </Reveal>
      </div>
    </section>
  )
}
