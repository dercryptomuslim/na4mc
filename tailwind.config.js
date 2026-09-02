/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0A0C12',
        ink: '#F4F1EA',
        accent: {
          DEFAULT: '#E8553F',
          soft: '#F0803C',
        },
      },
      fontFamily: {
        sans: ['Nimbus Sans TW01', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      transitionTimingFunction: {
        brand: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      letterSpacing: {
        label: '0.18em',
      },
    },
  },
  plugins: [],
}
