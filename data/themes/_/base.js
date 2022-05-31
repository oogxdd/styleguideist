export const base = {
  label: 'white',
  // spacing
  space: {
    x: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
    y: [2, 4, 8, 12, 16, 20, 24, 32, 48, 64, 128, 256, 512, 1024],
  },
  // x  // 0 - 2
  // 2x  // 1 - 4
  // 4x  // 2 - 8
  // 6x  // 3 - 12
  // 8x  // 4 - 16
  // 10x  // 5 - 20
  // 12x  // 6 - 24
  // 16x  // 7 - 32
  // 24x  // 8 - 48
  // 32x  // 9 - 64
  // 64x  // 10 - 128
  // 128x  // 11 - 256
  // 256x  // 12 - 512
  // 512x  // 13 - 1024

  // font
  // fonts: {
  //   heading: 'system-ui, sans-serif',
  //   body: 'system-ui',
  //   monospace: 'monospace',
  // },
  fonts: {
    body: 'Euclid',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },

  fontSizes: [11, 13, 15, 18, 21, 24, 48],
  // 0 - extrasmall
  // 1 - small
  // 2 - regular
  // 3 - h3
  // 4 - h2
  // 5 - h1

  fontWeights: {
    bold: 900,
    heading: 600,
    medium: 500,
    regular: 400,
    caption: 300,
    light: 100,
  },
  lineHeights: ['280%'],
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

  // colors
  colors: {
    primary: 'hsla(208.23529411764707, 100%, 50%, 1)',
    secondary: 'green',
    text: 'hsla(82.08955223880601, 6.592762351436339%, 13.284203999999999%, 1)',
    text2: '#4E3E9F',
    background: 'hsla(0, 0%, 100%, 1)',
    card: 'white',
    borderColor: 'hsla(82.37288135593235, 5.887335874629394%, 42.809652%, 1)',
  },

  // borders
  borders: { border: '0px solid borderColor' },
  radii: ['0px', '4px', '20px', '10px', '100px'],

  // shadows
  shadows: {
    '0': '0 0px 0px rgba(0,0,0,0.12),',
    '1': '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    '2': '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    '3': '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    '4': '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    '5': '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    default: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  },
  // shadows: [
  //   '0 0px 0px rgba(0,0,0,0.12),',
  //   '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  //   '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  //   '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  //   '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
  //   '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
  // ],

  atoms: {
    text: {},
    card: {
      bg: 'card',
      border: 'border',
      borderColor: 'borderColor',
      // borderWidth:
      boxShadow: 'default',
      height: 'auto',
    },
    label: {
      color: 'primary',
      fontWeight: 'regular',
      fontSize: 1,
    },
    heading: {
      fontSize: 4,

      h1: {
        color: 'text',
        lineHeight: 'normal',
        fontSize: 5,
      },
      h2: {
        color: 'text',
        lineHeight: 'normal',
        fontSize: 4,
      },
      h3: {
        color: 'text',
        // fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 3,
      },
      h4: {
        color: 'text',
        fontWeight: 'regular',
        lineHeight: 'normal',
        fontSize: 2,
      },
    },
    paragraph: {
      color: 'text2',
      fontSize: 2,
      fontWeight: 'regular',
    },
    image: {},
    name: {},
    caption: {
      color: 'text2',
      fontSize: 1,
      fontWeight: 'regular',
    },
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
      card: {
        variant: 'atoms.card',
        override: false,
      },
      image: {
        variant: 'atoms.image',
        override: false,
        order: 1,
      },
      label: {
        variant: 'atoms.label',
        override: false,
        order: 2,
      },
      heading: {
        variant: 'atoms.heading.h2',
        override: false,
        order: 3,
      },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
        order: 4,
      },
      usercard: {
        variant: 'atoms.usercard',
        override: false,
        order: 5,
        name: {
          variant: 'atoms.heading.h4',
        },
        caption: {
          variant: 'atoms.caption',
        },
      },
    },
    form: {
      card: {
        variant: 'atoms.card',
        override: false,
        boxShadow: 'none',
      },
      input: {
        variant: 'atoms.input',
        override: false,
      },
      button: {
        variant: 'atoms.button',
        override: false,
      },
    },
    feeditem: {
      card: {
        variant: 'atoms.card',
        override: false,
      },
      avatar: {
        variant: 'atoms.avatar',
        override: false,
      },
      name: {
        variant: 'atoms.name',
        override: false,
      },
      username: {
        variant: 'atoms.username',
        override: false,
      },
      date: {
        variant: 'atoms.date',
        override: false,
      },
      title: {
        variant: 'atoms.title',
        override: false,
      },
      paragraph: {
        variant: 'atoms.paragraph',
        override: false,
      },
      actions: {
        variant: 'atoms.actions',
        override: false,
      },
      text: {
        variant: 'atoms.text',
        override: false,
      },
      preferredLayout: 2,
    },
  },
  organisms: {
    feed: {
      background: {},
      container: {},
      separator: {},
      preferredLayout: 2,
    },
    styleguide: { card: { variant: 'atoms.card' } },
  },
}
