/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'neutral-surface': '#FAFAFA',
        'border-light': '#EEEEEE',
        'review-star': '#FFD000',
        'text-muted': '#6D6D6D',
        'plan-dark': '#111111',
      },
      fontFamily: {
        'heading': ['Outfit', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'modal-in': 'modal-in 0.22s cubic-bezier(0.16,1,0.3,1)',
        'fade-in': 'fade-in 0.18s ease-out',
        'ticker-left': 'ticker-left 40s linear infinite',
        'ticker-right': 'ticker-right 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'modal-in': {
          '0%': { opacity: '0', transform: 'scale(0.95) translateY(12px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'ticker-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-right': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgb(0 0 0 / 0.06), 0 1px 2px -1px rgb(0 0 0 / 0.04)',
        'card-hover': '0 4px 12px 0 rgb(0 0 0 / 0.08)',
        'blue-glow': '0 0 80px -10px rgba(59,130,246,0.4)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.1)',
      },
      letterSpacing: {
        tighter: '-0.025em',
        tight: '-0.02em',
      },
    },
  },
  plugins: [],
}
