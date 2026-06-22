/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy:      '#0D1B2A',
        'navy-alt': '#1A2940',
        'navy-dark': '#0a1520',
        'cyan-brand': '#00D4FF',
        'green-brand': '#39FF14',
        card: '#111E2E',
        gray: '#8A9BB0',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter:    ['Inter', 'sans-serif'],
      },
      keyframes: {
        gridMove: { to: { backgroundPosition: '50px 50px' } },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
      },
    },
  },
  plugins: [],
}
