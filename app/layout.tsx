import type { Metadata, Viewport } from 'next'
import { Instrument_Serif, Space_Grotesk } from 'next/font/google'
import '@/app/globals.css'
import { CustomCursor } from '@/components/site/custom-cursor'
import { Footer } from '@/components/site/footer'
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp'
import { Navbar } from '@/components/site/navbar'
import { siteConfig } from '@/data/site-data'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Byte & Berry | Websites, Apps & AI Automation — Built for Growth',
    template: '%s | Byte & Berry',
  },
  description: siteConfig.description,
  keywords: [
    'web development',
    'website design',
    'app development',
    'AI automation',
    'business systems',
    'software development Africa',
  ],
  applicationName: siteConfig.name,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'Byte & Berry | Digital Systems That Move Your Business Forward',
    description: 'We build websites, apps, and AI automation. 10+ projects delivered. 6-week turnaround.',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Byte and Berry agency cover image',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Byte & Berry | Digital Systems That Move Your Business Forward',
    description: 'We build websites, apps, and AI automation. 10+ projects delivered. 6-week turnaround.',
    images: ['/og-image.svg'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAFAF7',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html className={`${spaceGrotesk.variable} ${instrumentSerif.variable}`} lang="en">
      <body className="bg-bb-paper text-bb-ink">
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  )
}
