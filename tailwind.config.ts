import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#07ac4b',
          dim:     '#065f35',
          deep:    '#043d1e',
          light:   '#22c55e',
          muted:   '#a7f3c0',
          glow:    'rgba(7,172,75,0.15)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse at 65% 50%, rgba(7,172,75,0.10) 0%, transparent 70%)',
        'hero-glow-light': 'radial-gradient(ellipse at 65% 50%, rgba(7,172,75,0.07) 0%, transparent 70%)',
      },
      animation: {
        'blink': 'blink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
      },
    },
  },
  plugins: [],
}

export default config
