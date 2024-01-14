// const colors = require('tailwindcss/colors')

const { createPlugin } = require('windy-radix-palette')
const radixColors = createPlugin()

module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  // darkMode: 'media',
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    radixColors.plugin,
  ],
}
