/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#A94728',
          'orange-hover': '#90391D',
          'orange-light': '#F6ECE8',
          graphite: '#1B1D1F',
          charcoal: '#292C2F',
          'charcoal-dark': '#141618',
          'charcoal-card': '#212427',
          'charcoal-border': '#35393E',
          offwhite: '#F7F6F3',
          white: '#FFFFFF',
          'light-warm': '#ECEBE8',
          'border-grey': '#D9D9D6',
          'border-light': '#E5E4E0',
          'text-muted': '#6B7280',
          'text-dim': '#9CA3AF',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
        'industrial': '0 4px 20px -2px rgba(27, 29, 31, 0.08)',
        'industrial-hover': '0 12px 30px -4px rgba(27, 29, 31, 0.16)',
        'dark-card': '0 8px 30px rgba(0,0,0,0.3)',
      }
    },
  },
  plugins: [],
}
