export const base = {
  colors: {
    text: 'black',
    background: '#fff',
    primary: 'red',
    secondary: 'green',
    borderColor: 'red',
  },

  fonts: {
    body: 'system-ui',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },

  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],

  space: {
    base: {
      x: 4,
      y: 4,
    },
  },

  fontSizes: {
    base: 15,
  },

  radii: {
    default: '0px',
  },

  borders: {
    border: '100px solid black',
  },

  borderRadius: ['0px', '10px', '100px'],

  letterSpacings: ['0px'],
  lineHeights: ['100%', '125%', '150%', '175%', '200%'],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    textTransform: 'uppercase',
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },
  },

  buttons: {
    primary: {
      // textTransform: 'uppercase',
      bg: 'primary',
      color: 'background',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 0,
      border: 'border',
      borderRadius: 2,
      borderWidth: 'borderWidth',
      borderColor: 'borderColor',
      py: 2,
      px: 3,
      boxShadow: 0,
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
  styles: {
    progress: {
      color: 'red',
    },
  },
}
