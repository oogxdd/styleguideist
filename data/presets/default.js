export const defaultPreset = {
  borderRadius: '20px',
  name: 'default',
  fonts: {
    body: '"Spotify Circular", sans-serif',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'black',
    background: '#fff',
    primary: 'red',
    secondary: 'green',
    borderColor: 'red',
  },
  radii: {
    default: '0px',
  },
  borderStyles: {
    borderWidth: 2,
    borderStyle: 'solid',
  },
  borders: {
    border: '0px solid transparent',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  letterSpacings: ['0px', '10px'],
  lineHeights: ['100%', '125%', '150%', '175%', '200%'],

  // fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },

  space: [2, 4, 8, 16, 32, 48, 64],
  // space: {
  //   default: '8px',
  // },

  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  // shadows: {
  //   default: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  // },

  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 0,
      border: 'border',
      borderRadius: 'default',
      borderWidth: 'borderWidth',
      borderColor: 'borderColor',
      py: 2,
      px: 3,
      boxShadow: 0,
      lineHeight: 0,
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
  },
}
