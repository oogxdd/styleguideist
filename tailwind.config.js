module.exports = {
  // mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
      },
      textColor: {
        primary: 'var(--primary-text-color)',
      },
      backgroundColor: {
        primary: 'var(--primary-color)',
      },
      borderRadius: {
        'button-small': 'var(--button-border-radius-small)',
        'button-big': 'var(--button-border-radius-big)',
      },
      lineHeight: {
        default: 'var(--line-height)',
      },
      letterSpacing: {
        default: 'var(--letter-spacing)',
      },
      height: {
        'button-big': 'var(--button-height-big)',
      },
      fontSize: {
        'button-big': 'var(--button-font-size-big)',
      },
      padding: {
        'button-small': 'var(--button-padding-small)',
        'button-big': 'var(--button-padding-big)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
  presets: [require('./data/tailwind-presets/soundcloud')],
}
