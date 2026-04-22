import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          deep:    '#0a0d14',
          surface: '#111520',
          card:    '#161b2a',
          hover:   '#1c2236',
        },
        gold: {
          DEFAULT: '#c9a84c',
          light:   '#e8c97a',
          dim:     'rgba(201,168,76,0.15)',
          border:  'rgba(201,168,76,0.2)',
        },
        glow: '#2a6ef5',
        ink: {
          primary: '#f0ead8',
          muted:   '#8890a4',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-down':  'fadeDown 0.6s ease both',
        'fade-left':  'fadeLeft 0.8s ease both',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeDown:  { from: { opacity: '0', transform: 'translateY(-16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeLeft:  { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201,168,76,0)' },
          '50%':      { boxShadow: '0 0 30px 4px rgba(201,168,76,0.25)' },
        },
      },
      boxShadow: {
        'gold-sm': '0 0 20px rgba(201,168,76,0.2)',
        'gold-md': '0 0 40px rgba(201,168,76,0.3)',
        card:      '0 8px 40px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

export default config
