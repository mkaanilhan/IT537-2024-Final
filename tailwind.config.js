/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-back': '#12121a',
        'lite-text': '#e5e7eb',
        'posi-text': '#3cea8c',
        'nega-text': '#fb7957',
        'head-text': '#22d3ee',
        'dimmed-text': '#808080',
        'hilite-text': '#ffffff',
      },
    },
  },
  plugins: [],
}

