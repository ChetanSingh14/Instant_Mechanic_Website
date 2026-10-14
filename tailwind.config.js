/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#EA580C',
          hover: '#C2410C',
          active: '#9A3412',
          light: '#FFF7ED',
          subtle: '#FFEDD5',
        },
        dark: {
          DEFAULT: '#18181B',
          muted: '#27272A',
        },
        brand: {
          bg: '#FBF8F3',
          surface: '#FFFFFF',
          subtle: '#F4EFEA',
          border: '#EADBCE',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        card: '0 4px 20px -2px rgba(24, 24, 27, 0.04), 0 1px 3px rgba(24, 24, 27, 0.02)',
        glow: '0 8px 24px -4px rgba(234, 88, 12, 0.35)',
      },
    },
  },
  plugins: [],
}
