import type { Config } from 'tailwindcss'

const config = {
  content: [
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: 'clamp(24px, 6vw, 80px)',
      },
      screens: {
        '2xl': '1160px',
      },
    },
    extend: {
      colors: {
        bb: {
          purple: 'var(--bb-purple)',
          'purple-d': 'var(--bb-purple-d)',
          'purple-l': 'var(--bb-purple-l)',
          blue: 'var(--bb-electric)',
          'blue-d': 'var(--bb-electric-d)',
          ink: 'var(--bb-ink)',
          paper: 'var(--bb-paper)',
          surface: 'var(--bb-surface)',
          warm: 'var(--bb-warm)',
          electric: 'var(--bb-electric)',
          'electric-d': 'var(--bb-electric-d)',
          amber: 'var(--bb-amber)',
          muted: 'var(--bb-ink-50)',
        },
        border: 'var(--bb-ink-20)',
        background: 'var(--bb-paper)',
        foreground: 'var(--bb-ink)',
        primary: 'var(--bb-purple)',
        secondary: 'var(--bb-surface)',
        muted: 'var(--bb-warm)',
        card: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
        serif: ['var(--font-serif)', 'serif'],
        display: ['var(--font-serif)', 'serif'],
      },
      borderRadius: {
        sm: '2px',
        md: '4px',
        lg: '6px',
        xl: '8px',
      },
      boxShadow: {
        'bb-soft': '0 1px 3px rgba(15, 15, 26, 0.06), 0 4px 12px rgba(15, 15, 26, 0.06)',
        'bb-panel': '0 14px 32px rgba(15, 15, 26, 0.08)',
        'bb-whatsapp': '0 2px 8px rgba(37, 211, 102, 0.35)',
      },
      keyframes: {
        'bb-marquee': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'bb-arrow-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
        'bb-pulse': {
          '0%': { transform: 'scale(1)', opacity: '0.5' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        'bb-marquee': 'bb-marquee 30s linear infinite',
        'bb-arrow-bounce': 'bb-arrow-bounce 1.8s ease-in-out infinite',
        'bb-pulse': 'bb-pulse 2.5s ease-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config

