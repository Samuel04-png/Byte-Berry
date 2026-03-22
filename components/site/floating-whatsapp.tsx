'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/data/site-data'
import { WhatsAppIcon } from '@/components/site/icons'

const TOOLTIP_KEY = 'bb-whatsapp-tooltip-seen'

export function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.sessionStorage.getItem(TOOLTIP_KEY)) {
      return
    }

    const showTimer = window.setTimeout(() => {
      setTooltipVisible(true)
      window.sessionStorage.setItem(TOOLTIP_KEY, 'true')
    }, 2000)

    const hideTimer = window.setTimeout(() => {
      setTooltipVisible(false)
    }, 7000)

    return () => {
      window.clearTimeout(showTimer)
      window.clearTimeout(hideTimer)
    }
  }, [])

  return (
    <div className="fixed bottom-7 right-7 z-[9999] max-md:bottom-5 max-md:right-5">
      <div
        className={`pointer-events-none absolute right-[4.5rem] top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-bb-electric px-3 py-2 text-[13px] font-medium text-white shadow-[0_12px_30px_rgba(0,82,255,0.22)] transition-all duration-300 ${
          tooltipVisible ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'
        }`}
      >
        Chat with us
        <span className="ml-1 inline-block">-&gt;</span>
      </div>

      <a
        aria-label="Chat with Byte and Berry on WhatsApp"
        className="group relative inline-flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_2px_8px_rgba(37,211,102,0.35)] transition duration-200 ease-out hover:scale-110 hover:shadow-[0_10px_28px_rgba(37,211,102,0.42)] max-md:h-[50px] max-md:w-[50px]"
        href={siteConfig.whatsappFloatingHref}
        rel="noreferrer"
        target="_blank"
      >
        <span className="absolute inset-0 -z-10 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring" />
        <WhatsAppIcon className="h-[26px] w-[26px]" />
      </a>
    </div>
  )
}
