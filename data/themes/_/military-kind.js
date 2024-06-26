export const militaryKind = {
  name: 'military',
  label: 'military',
  type: 'light',
  space: { base: { x: '6', y: '5' } },
  fontSizes: { base: 19 },
  fonts: {
    body: 'Signika_Negative',
    heading: 'Signika_Negative',
    monospace: 'Menlo, monospace',
  },
  fontWeights: { body: 400, heading: 700, bold: 900 },
  lineHeights: ['280%'],
  colors: {
    text: 'hsla(70.7441844496616, 100%, 73.81%, 1)',
    text2: 'hsla(16.325579798498808, 61.230000000000004%, 92.67%, 1)',
    background: 'hsla(59.23076923076929, 45.31715469011116%, 23.6241895%, 1)',
    primary: 'hsla(0, 84.6164572586716%, 56.641977%, 1)',
    secondary: 'hsla(32.7659574468085, 100%, 72.35294117647058%, 1)',
    muted: '#f6f6f6',
    card: 'hsla(59.23076923076923, 100%, 69.41176470588235%, 1)',
    borderColor: 'hsla(82.37288135593238, 0%, 0%, 1)',
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
  radii: ['3.5px', '7px', '14px', '28px', '56px'],
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
    default: '0 0 0 0 #0a0b1e',
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
      borderWidth: 1,
      width: 413,
      pt: 0,
      pb: 0,
      pl: 0,
      pr: 0,
      borderRadius: 3,
    },
    label: { fontWeight: 800, letterSpacing: -0.5, display: 'none' },
    heading: { textAlign: 'center', mt: 30 },
    paragraph: {
      fontSize: 18,
      fontWeight: 100,
      textAlign: 'center',
      pl: 6,
      pr: 6,
    },
    image: {
      borderWidth: 0,
      borderColor: 'hsla(249.7833672913951, 0%, 0%, 1)',
      mt: 0,
      mb: 0,
      ml: 0,
      mr: 0,
      height: 331,
    },
    name: { color: 'hsla(0, 91.30434782608697%, 72.94117647058823%, 1)' },
    caption: { fontSize: 16 },
    avatar: { width: 48, height: 48, objectFit: 'cover' },
    button: {
      pt: 0,
      pb: 0,
      height: 48,
      width: 484,
      borderRadius: 16,
      fontSize: 16,
      fontWeight: 600,
    },
    input: { height: 48 },
    usercard: { pl: 52, mb: 20, ml: 10 },
  },
  molecules: {
    blogpost: {
      name: 'Blog post',
      value: 'blogpost',
      image: { order: 1, width: '100%', height: 192 },
      label: { order: 2 },
      heading: { order: 3 },
      paragraph: { order: 4 },
      usercard: { order: 5 },
      card: {
        background: 'hsla(249.99999999999963, 8.020000000000008%, 20.81%, 0)',
        borderWidth: 1,
        pt: 16,
        pb: 16,
        pl: 16,
        pr: 16,
        borderColor: 'hsla(14.23255654268477, 87.72000000000003%, 82.3%, 0.17)',
        boxShadow: '10px 10px 0 rgb(0 0 0 / 12%), 0 0 0',
        width: 413,
      },
      props: {
        title: 'Amprove your customer experience',
        href: '#',
        label: 'Case Study',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
        imageUrl: '/img/ukraine2.png',
        authorName: 'Daniela Metz',
        authorAvatar: '/img/avatar/3.jpeg',
        caption: 'Feb 12, 2020  ·  11 min read',
      },
    },
    form: {
      card: {
        background: 'hsla(0, 0%, 100%, 0.01)',
        width: 564,
        pt: 40,
        pb: 40,
        pl: 40,
        pr: 40,
      },
    },
    feeditem: {
      card: {},
      avatar: {},
      name: {},
      username: {},
      date: {},
      title: {},
      paragraph: {},
      actions: {
        textColor: '#111827',
      },
      text: {},
      actions: {},
      preferredLayout: 1,
    },
  },
  organisms: {
    feed: {
      background: {},
      container: {},
      separator: {},
      preferredLayout: 1,
      preferredFeedItemLayout: 1,
    },
  },
}
