// 1. colors
// 2. fonts
// 3. shadows
// 4. borders
// 5. spacing
//
//
// component-specific props
export const vercel = {
  name: 'default',
  fonts: {
    body: 'system-ui',
    // body: '"Spotify Circular", sans-serif',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'white',
    background: 'black',
    primary: 'white',
    secondary: 'green',
    borderColor: 'white',
  },
  radii: ['0px', '4px', '8px', '10px', '100px'],
  // borderStyles: [
  //   {
  //     borderWidth: 2,
  //     borderStyle: 'solid',
  //     borderRadius: '0px',
  //   },
  //   {
  //     borderWidth: 2,
  //     borderStyle: 'solid',
  //     borderRadius: '10px',
  //   },
  //   {
  //     borderWidth: 2,
  //     borderStyle: 'solid',
  //     borderRadius: '100px',
  //   },
  // ],
  borders: {
    border: '0px solid borderColor',
  },
  // borderRadius: ['0px', '100px', '100px'],

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
      borderRadius: 2,
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
