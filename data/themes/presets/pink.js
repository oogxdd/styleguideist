export const pink = {
  name: 'pink',
  label: 'pink',
  type: 'light',

  space: {
    base: {
      x: 4,
      y: 4,
    },
  },
  fontSizes: {
    base: 15,
  },
  fonts: { body: 'Sora', heading: 'Sora', monospace: 'Menlo, monospace' },
  fontWeights: { body: 400, heading: 700, bold: 400 },
  lineHeights: ['260%'],
  colors: {
    text: 'hsla(82.08955223880618, 17.55716217010521%, 13.4657895%, 1)',
    background:
      'hsla(263.3023239845453, 41.82000000000003%, 84.51000000000002%, 1)',
    primary:
      'hsla(241.0526315789473, 64.5931487827854%, 52.918716499999995%, 1)',
    secondary: 'green',
    muted: '#f6f6f6',
    card: 'white',
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
  radii: ['0px', '0px', '0px', '0px', '0px'],
  borders: { border: '0px solid borderColor' },
  letterSpacings: [
    '-0.6px',
    '1.4px',
    '3.4px',
    '7.4px',
    '11.4px',
    '29.4px',
    '45.4px',
    '51.4px',
  ],
  shadows: {
    default: '0 1px 3px red, 0 1px 2px red',
    0: '0 0px 0px rgba(0,0,0,0.12),',
    1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  },
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
      py: '0px',
      px: '34px',
      boxShadow: 3,
      lineHeight: 0,
    },
    secondary: { color: 'background', bg: 'secondary' },
    atoms: { card: { width: '100px', height: '100px' } },
  },
  forms: {
    input: {
      bg: 'primary',
      border: 'border',
      borderRadius: 4,
      color: 'background',
      fontFamily: 'body',
      fontSize: 3,
      fontWeight: 'bold',
      letterSpacing: 0,
      borderWidth: 'borderWidth',
      borderColor: 'borderColor',
      py: 2,
      px: 3,
      boxShadow: 3,
      lineHeight: 0,
    },
  },
  atoms: {
    card: {
      width: 357,
      height: 618,
      borderRadius: 61,
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      px: 26,
      py: 26,
      borderWidth: 1,
    },
    label: {
      color:
        'hsla(349.5238095238096, 75.65403743216065%, 56.83062449999999%, 1)',
      fontSize: 12,
      fontWeight: 800,
      letterSpacing: -0.5,
    },
    heading: { color: 'hsla(0, 100%, 89.75500000000001%, 1)', fontSize: 18 },
    paragraph: { color: 'hsla(0, 79.63%, 89.33%, 0.58)', fontSize: 15 },
    image: {
      borderRadius: 40,
      borderWidth: 5,
      borderColor:
        'hsla(249.99999999999991, 8.766586904502937%, 38.458502%, 1)',
    },
    name: {},
    caption: {},
    avatar: {},
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      container: {
        width: 357,
        height: 618,
        borderRadius: 61,
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        px: 26,
        py: 26,
        borderWidth: 1,
      },
      image: { width: '100%', height: 192 },
      children: [
        { name: 'Card', value: 'card', group: 'atoms' },
        { name: 'Image', value: 'image', group: 'atoms' },
        { name: 'Label', value: 'label', group: 'atoms' },
        { name: 'Heading', value: 'heading', group: 'atoms' },
        { name: 'Paragraph', value: 'paragraph', group: 'atoms' },
        {
          name: 'User card',
          value: 'usercard',
          group: 'molecules',
          children: [
            { name: 'Avatar', value: 'avatar', group: 'atoms' },
            { name: 'Name', value: 'name', group: 'atoms' },
            { name: 'Caption', value: 'caption', group: 'atoms' },
          ],
        },
      ],
    },
    usercard: {},
  },
}
