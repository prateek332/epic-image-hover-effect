/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      keyframes: {
        scaleAndReset: {
          'from, to': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        }
      },
      animation: {
        scaleAndReset: 'scaleAndReset 800ms ease-in-out',
      },
    },
  },
  plugins: [],
}

