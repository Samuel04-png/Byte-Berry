import { useEffect, useRef } from 'react'
import { CALENDLY_URL } from '@/utils/constants'

declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void
    }
  }
}

export function CalendlyWidget() {
  const calendlyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!calendlyRef.current) return

    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true

    script.onload = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: calendlyRef.current
        })
      }
    }

    document.body.appendChild(script)

    return () => {
      // Cleanup script if component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div 
      ref={calendlyRef}
      className="calendly-inline-widget w-full"
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}

