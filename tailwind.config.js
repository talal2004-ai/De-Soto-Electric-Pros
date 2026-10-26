/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#182538',
          50: '#eef1f4',
          100: '#d6dde4',
          200: '#adbac8',
          300: '#7e91a8',
          400: '#4f6888',
          500: '#344c6b',
          600: '#283c57',
          700: '#1e3046',
          800: '#182538',
          900: '#101a2a',
        },
        brand: {
          yellow: '#FACC15',
          'yellow-dark': '#e0b80f',
        },
        surface: {
          light: '#F4F6F8',
          white: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        nav: '0 1px 0 0 rgba(24, 37, 56, 0.08), 0 4px 16px -4px rgba(24, 37, 56, 0.12)',
        card: '0 1px 2px rgba(24, 37, 56, 0.04), 0 8px 24px -8px rgba(24, 37, 56, 0.10)',
        hero: '0 20px 48px -16px rgba(24, 37, 56, 0.18)',
      },
    },
  },
  plugins: [],
};
