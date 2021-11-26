import { base } from '@theme-ui/presets'
import { merge } from 'theme-ui'

export const greenPurple = merge(base, {
  space: [2, 4, 8, 16, 32, 48, 64],
  fonts: {
    body: 'Eesti',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [23, 25, 27, 31, 35, 53, 69, 75],
  fontWeights: { body: 400, heading: 700, bold: 900 },
  lineHeights: ['280%'],
  colors: {
    text: '#7fc900',
    // text: '#B6F34F',

    background: '#071620',
    primary: '#5754ff',
    // primary: '#FFDA9C',

    secondary: 'green',
    muted: '#f6f6f6',
    borderColor: '#2c4207',
  },
  styles: {
    root: { fontFamily: 'body', lineHeight: 'body', fontWeight: 'body' },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 5,
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 4,
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 3,
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 2,
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 1,
    },
    h6: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
      fontSize: 0,
    },
    p: {
      color: 'text',
      fontFamily: 'body',
      fontWeight: 'body',
      lineHeight: 'body',
    },
    a: { color: 'primary' },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: { color: 'inherit' },
    },
    code: { fontFamily: 'monospace', fontSize: 'inherit' },
    table: { width: '100%', borderCollapse: 'separate', borderSpacing: 0 },
    th: { textAlign: 'left', borderBottomStyle: 'solid' },
    td: { textAlign: 'left', borderBottomStyle: 'solid' },
    img: { maxWidth: '100%' },
  },
  name: 'default',
  radii: ['0px', '4px', '8px', '10px', '100px'],
  borders: { border: '0px solid borderColor' },
  letterSpacings: [
    '3.9px',
    '5.9px',
    '7.9px',
    '11.9px',
    '15.9px',
    '33.9px',
    '49.9px',
    '55.9px',
  ],
  shadows: [
    'none',
    '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  ],
  buttons: {
    primary: {
      bg: 'primary',
      color: 'background',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 0,
      border: 'border',
      borderRadius: 4,
      borderWidth: 'borderWidth',
      borderColor: 'borderColor',
      py: '24px',
      px: '39px',
      boxShadow: 3,
      lineHeight: 0,
    },
    secondary: { color: 'background', bg: 'secondary' },
  },
  forms: {
    input: {
      bg: 'primary',
      border: 'border',
      borderRadius: 4,
      bg: 'primary',
      color: 'background',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 0,
      border: 'border',
      borderRadius: 4,
      borderWidth: 'borderWidth',
      borderColor: 'borderColor',
      py: 2,
      px: 3,
      boxShadow: 3,
      lineHeight: 0,
    },
  },
})
