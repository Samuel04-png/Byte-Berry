import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, LinkedinIcon } from '@/components/site/icons'
import { siteConfig } from '@/data/site-data'

const quickLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/products#zedbooks', label: 'ZedBooks' },
  { href: '/products#tengaloans', label: 'TengaLoans' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: siteConfig.socials.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: siteConfig.socials.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: siteConfig.socials.facebook, label: 'Facebook', icon: FacebookIcon },
]

export function Footer() {
  return (
    <footer className="bg-bb-ink text-bb-paper" id="contact">
      <div className="bb-shell grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              alt="Byte and Berry logo"
              className="h-9 w-auto brightness-0 invert"
              height={36}
              src="/logo.png"
              width={36}
            />
            <span className="text-[18px] font-semibold tracking-[-0.02em] text-bb-paper">
              Byte &amp; Berry
            </span>
          </div>

          <p className="max-w-sm font-serif text-[20px] italic leading-[1.5] text-bb-paper-70">
            Building the digital backbone of Zambia.
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center text-bb-paper-40 transition duration-200 hover:text-bb-paper"
                href={href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <p className="text-sm text-bb-paper-40">&copy; 2026 Byte &amp; Berry</p>
        </div>

        <div className="space-y-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bb-paper-40">
            Navigate
          </p>
          <div className="grid gap-3 text-[15px] text-bb-paper-50">
            {quickLinks.map((link) => (
              <Link key={link.href} className="transition duration-200 hover:text-bb-paper" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-bb-paper-40">
            Get In Touch
          </p>
          <div className="grid gap-3 text-[15px] text-bb-paper-50">
            <a
              className="transition duration-200 hover:text-bb-paper"
              href={siteConfig.whatsappHref}
              rel="noreferrer"
              target="_blank"
            >
              {siteConfig.whatsappNumber}
            </a>
            <a className="transition duration-200 hover:text-bb-paper" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
            <p>{siteConfig.location}</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(250,250,247,0.1)] px-6 py-5 text-center text-[12px] text-bb-paper-30">
        Built in Zambia &middot; Designed to compete globally
      </div>
    </footer>
  )
}
