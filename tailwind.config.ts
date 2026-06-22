import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B2A',
          2: '#1A2940',
          3: '#0a1520',
        },
        cyan: {
          brand: '#00D4FF',
        },
        green: {
          brand: '#39FF14',
        },
        card: '#111E2E',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        gridMove: {
          to: { backgroundPosition: '50px 50px' },
        },
        slideIn: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        'grid-move': 'gridMove 20s linear infinite',
        'slide-in': 'slideIn 0.4s cubic-bezier(0.22,1,0.36,1)',
      },
    },
  },
  plugins: [],
} satisfies Config
