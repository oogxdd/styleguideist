export const someLightValeraRound = {
  name: 'light-valera',
  label: 'light-valera',
  type: 'light',
  space: { base: { x: 4, y: 4 } },
  fontSizes: { base: 15 },
  fonts: {
    body: 'Varela_Round',
    heading: 'Varela_Round',
    monospace: 'Menlo, monospace',
  },
  fontWeights: { body: 400, heading: 700, bold: 900 },
  lineHeights: ['280%'],
  colors: {
    text: 'hsla(82.08955223880601, 6.592762351436339%, 13.284203999999999%, 1)',
    text2:
      'hsla(249.89690721649487, 96.23323469505708%, 68.93886649999999%, 1)',
    background: 'hsla(277.9534867752429, 100%, 95.38%, 1)',
    primary:
      'hsla(208.23529411764707, 61.446561188246704%, 37.67810199999999%, 1)',
    secondary: 'green',
    muted: '#f6f6f6',
    card: 'white',
    borderColor: 'hsla(82.37288135593235, 5.887335874629394%, 42.809652%, 1)',
    border: 'hsla(246.04617032991104, 100%, 50%, 1)',
  },
  styles: {
    root: { fontFamily: 'body', lineHeight: 'body', fontWeight: 'body' },
    h1: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h2: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h3: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h4: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
    },
    h5: {
      color: 'text',
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading',
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
  radii: ['0px', '0px', '0px', '0px', '0px'],
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
  shadows: {
    '0': '0 0px 0px rgba(0,0,0,0.12),',
    '1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    default: '0 0 0 rgba(0,0,0,0.12), 0 0 0',
  },
  buttons: {
    primary: {},
    secondary: { color: 'background', bg: 'secondary' },
    atoms: { card: { width: '100px', height: '100px' } },
  },
  forms: { input: {} },
  atoms: {
    card: {
      background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
      borderWidth: 0,
    },
    label: { fontWeight: 800, letterSpacing: -0.5 },
    heading: { fontWeight: 800, fontSize: 30, mb: 17 },
    paragraph: {},
    image: {
      borderWidth: 5,
      borderColor:
        'hsla(249.99999999999991, 8.766586904502937%, 38.458502%, 1)',
      width: 308,
      height: 194,
      ml: 20,
    },
    name: {},
    caption: {},
    avatar: {},
    button: { height: 40, borderRadius: 6, borderWidth: 0, pl: 16, pr: 16 },
    input: {
      height: 40,
      color: 'hsla(250, 0%, 0%, 1)',
      borderRadius: 6,
      background: 'hsla(250, 0%, 96.86274509803921%, 1)',
      borderColor: 'hsla(250, 0%, 90.19607843137256%, 1)',
    },
    usercard: {},
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      card: {
        width: 603,
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        borderWidth: 1,
        pt: 52,
      },
      image: { order: 1, width: '100%', height: 192 },
      label: { order: 2 },
      heading: { order: 3 },
      paragraph: { order: 4 },
      usercard: { order: 5 },
      props: {
        title: 'Amprove your customer experience',
        href: '#',
        label: 'Case Study',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        imageUrl: '/img/burn.jpeg',
        authorName: 'Daniela Metz',
        authorAvatar:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        caption: 'Feb 12, 2020  ·  11 min read',
      },
    },
    form: { card: {} },
  },
}