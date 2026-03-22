'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site-data'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/products', label: 'Products' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-[100] border-b border-transparent bg-[rgba(250,250,247,0.88)] backdrop-blur-[24px] transition-colors duration-200',
          scrolled && 'border-b-[rgba(15,15,26,0.08)]',
        )}
      >
        <div className="bb-shell flex h-[72px] items-center justify-between gap-8 max-md:h-[60px]">
          <Link className="flex items-center gap-3" href="/">
            <Image
              alt="Byte and Berry logo"
              className="h-9 w-auto"
              height={36}
              priority
              src="/logo.png"
              width={36}
            />
            <span className="font-sans text-[18px] font-semibold tracking-[-0.02em] text-bb-ink">
              Byte &amp; Berry
            </span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="bb-nav-link"
                data-active={pathname === link.href}
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex">
            <Button href={siteConfig.whatsappHref} rel="noreferrer" target="_blank" variant="nav">
              WhatsApp Us
            </Button>
          </div>

          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex h-12 w-12 items-center justify-center md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            type="button"
          >
            <span className="relative h-[18px] w-[18px]">
              <span
                className={cn(
                  'absolute left-0 top-[3px] h-[2px] w-[18px] bg-bb-ink transition-transform duration-200',
                  menuOpen && 'translate-y-[5px] rotate-45',
                )}
              />
              <span
                className={cn(
                  'absolute left-0 top-[13px] h-[2px] w-[18px] bg-bb-ink transition-transform duration-200',
                  menuOpen && 'translate-y-[-5px] -rotate-45',
                )}
              />
            </span>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-x-0 top-[60px] z-[90] border-b border-[rgba(15,15,26,0.08)] bg-bb-paper md:hidden"
            exit={{ opacity: 0, y: -18 }}
            initial={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bb-shell flex flex-col py-6">
              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="border-b border-[rgba(15,15,26,0.08)] py-5 text-[20px] font-medium tracking-[-0.02em] text-bb-ink"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <Button
                className="mt-6 w-full"
                href={siteConfig.whatsappHref}
                rel="noreferrer"
                target="_blank"
                variant="nav"
              >
                WhatsApp Us
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
