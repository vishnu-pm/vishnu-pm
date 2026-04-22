/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx,jsx,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#c9a84c',
        bg: {
          deep: '#080a0f',
          surface: '#0b0d14',
          card: '#13161e',
          hover: '#1e2235',
        },
        accent: {
          DEFAULT: '#c9a84c',
          light: '#e8c97a',
          dim: 'rgba(201,168,76,0.15)',
          border: 'rgba(201,168,76,0.2)',
        },
        text: {
          primary: '#dde1ec',
          muted: '#8a8fa8',
          secondary: '#5e6478',
        },
        glow: 'rgba(201,168,76,0.07)',
      },
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease both',
        'fade-down': 'fadeDown 0.6s ease both',
        'fade-left': 'fadeLeft 0.8s ease both',
        'pulse-accent': 'pulse 2s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        fadeUp: { from: { opacity: '0', transform: 'translateY(20px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeDown: { from: { opacity: '0', transform: 'translateY(-16px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        fadeLeft: { from: { opacity: '0', transform: 'translateX(30px)' }, to: { opacity: '1', transform: 'translateX(0)' } },
        pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.3' } },
      },
      boxShadow: {
        'accent-sm': '0 0 20px rgba(201,168,76,0.2)',
        'accent-md': '0 0 40px rgba(201,168,76,0.3)',
        'card': '0 8px 40px rgba(0,0,0,0.4)',
        'glow': '0 0 30px 4px rgba(201,168,76,0.25)',
      },
      backdropBlur: {
        xs: '14px',
      },
    },
  },
  plugins: [],
};
