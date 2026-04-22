/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        // Replace with your new theme colors
        primary: '#YOUR_PRIMARY_COLOR',
        bg: {
          deep:    '#YOUR_DEEP_BG',
          surface: '#YOUR_SURFACE_BG',
          card:    '#YOUR_CARD_BG',
          hover:   '#YOUR_HOVER_BG',
        },
        accent: {
          DEFAULT: '#YOUR_ACCENT_COLOR',
          light:   '#YOUR_LIGHT_ACCENT',
          dim:     'rgba(YOUR_ACCENT_RGB,0.15)',
          border:  'rgba(YOUR_ACCENT_RGB,0.2)',
        },
        text: {
          primary: '#YOUR_PRIMARY_TEXT',
          muted:   '#YOUR_MUTED_TEXT',
        },
      },
      fontFamily: {
        display: ['"YOUR_DISPLAY_FONT"', 'serif'],
        body:    ['"YOUR_BODY_FONT"', 'sans-serif'],
        mono:    ['"YOUR_MONO_FONT"', 'monospace'],
      },
      animation: {
        'fade-up':    'fadeUp 0.7s ease both',
        'fade-down':  'fadeDown 0.6s ease both',
        'fade-left':  'fadeLeft 0.8s ease both',
        'pulse-accent': 'pulseAccent 3s ease-in-out infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp:    { from: { opacity: '0', transform: 'translateY(24px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeDown:  { from: { opacity: '0', transform: 'translateY(-16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeLeft:  { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulseAccent: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(YOUR_ACCENT_RGB,0)' },
          '50%':      { boxShadow: '0 0 30px 4px rgba(YOUR_ACCENT_RGB,0.25)' },
        },
      },
      boxShadow: {
        'accent-sm': '0 0 20px rgba(YOUR_ACCENT_RGB,0.2)',
        'accent-md': '0 0 40px rgba(YOUR_ACCENT_RGB,0.3)',
        'card':      '0 8px 40px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};
