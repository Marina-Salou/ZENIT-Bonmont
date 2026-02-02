/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#c9a866',
        text: '#2c2c2c',
        'hero-text': '#f8f8f7',
        muted: '#666666',
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
        serif: ['Crimson Text', 'ui-serif', 'Georgia'],
        bodoni: ['Libre Bodoni', 'serif'],
      },
    },
  },
  plugins: [],
}
