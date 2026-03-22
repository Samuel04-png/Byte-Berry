type IconProps = {
  className?: string
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M12.04 2C6.52 2 2.04 6.45 2.04 11.95c0 1.76.46 3.47 1.33 4.98L2 22l5.23-1.36a10.05 10.05 0 0 0 4.81 1.23h.01c5.52 0 10-4.45 10-9.95S17.57 2 12.04 2Zm0 18.22c-1.48 0-2.94-.39-4.22-1.14l-.3-.17-3.1.81.83-3.02-.19-.31a8.2 8.2 0 0 1-1.26-4.43c0-4.55 3.71-8.26 8.27-8.26 2.2 0 4.26.85 5.82 2.41a8.18 8.18 0 0 1 2.42 5.84c0 4.55-3.72 8.27-8.27 8.27Zm4.53-6.19c-.25-.12-1.46-.72-1.69-.8-.23-.08-.4-.12-.57.13-.17.24-.65.8-.8.97-.15.17-.3.19-.55.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.23-1.46-1.38-1.71-.14-.25-.01-.39.11-.52.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.12-.57-1.37-.78-1.88-.21-.5-.43-.43-.57-.44h-.49c-.17 0-.45.06-.69.32-.24.26-.91.88-.91 2.15s.93 2.49 1.06 2.67c.13.17 1.82 2.77 4.41 3.89.62.27 1.1.43 1.48.55.62.2 1.18.17 1.62.11.5-.07 1.46-.6 1.67-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
    </svg>
  )
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M7.07 8.9H4v11.1h3.07V8.9Zm.2-3.42C7.26 4.46 6.52 4 5.55 4s-1.7.46-1.72 1.48c0 1 .7 1.48 1.64 1.48h.02c1 0 1.77-.48 1.78-1.48ZM20 13.1c0-3.4-1.8-5-4.21-5-1.95 0-2.82 1.08-3.3 1.84V8.9H9.42c.04.69 0 11.1 0 11.1h3.07v-6.2c0-.33.03-.66.12-.9.27-.66.88-1.35 1.9-1.35 1.34 0 1.88 1.02 1.88 2.52V20H20v-6.9Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path
        d="M13.44 20v-7.1h2.4l.36-2.77h-2.76V8.36c0-.8.22-1.35 1.37-1.35h1.46V4.53c-.25-.03-1.13-.1-2.14-.1-2.12 0-3.57 1.29-3.57 3.67v2.03H8.2v2.77h2.36V20h2.88Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function BarsIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M6 6 18 18M18 6 6 18" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
    </svg>
  )
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  )
}
