/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        source: ['source-serif', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        'source-italic': ['source-serif-italic', 'serif']
      },
    },
  },
  plugins: [],
}

