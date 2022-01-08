import { defaultPreset } from './default'
import { superpeer } from './superpeer'
import { base } from './base'
import { vercel } from './vercel'
import { spotify } from './spotify'
import { twitter } from './twitter'
import { redWhite } from './custom/red-white'
import { blueRed } from './custom/blue-white'
import { one } from './one'
import { another } from './another'
import { greenPurple } from './green-purple'
import { hackClubTheme } from './hack-club'
import {
  // base,
  system,
  funk,
  future,
  roboto,
  dark,
  deep,
  swiss,
  tosh,
  bootstrap,
  bulma,
  tailwind,
  sketchy,
} from '@theme-ui/presets'

export {
  defaultPreset,
  base,
  twitter,
  vercel,
  spotify,
  redWhite,
  blueRed,
  one,
  another,
  anan,
  greenPurple,
  hackClubTheme,
}

const anan = {
  name: 'default',
  fonts: {
    body: 'Eesti',
    heading: '"Spotify Circular", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: '#888b83',
    background: '#071620',
    primary: '#93a0a0',
    secondary: 'green',
    borderColor: '#59712d',
  },
  radii: ['0px', '4px', '8px', '10px', '100px'],
  borders: { border: '0px solid borderColor' },
  fontSizes: [38, 40, 42, 46, 50, 68, 84, 90],
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
  lineHeights: ['280%'],
  fontWeights: { body: 400, heading: 700, bold: 900 },
  space: [2, 4, 8, 16, 32, 48, 64],
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
}

// twitter
// vercel
// superpeer
// spotify
// soundcloud

// Twitter, Slack, Uber, Github, Airbnb, Stripe, Vercel, Spotify
//
// Airtable
// Asana

// export const presets = [
//   {
//     label: 'Default',
//     value: 'default',
//   },
//   {
//     label: 'Twitter',
//     value: 'twitter',
//   },
//   {
//     label: 'Uber',
//     value: 'uber',
//   },
//   {
//     label: 'Slack',
//     value: 'slack',
//   },
//   {
//     // https://copilot.github.com/
//     label: 'Github',
//     value: 'github',
//   },
//   {
//     label: 'Airbnb',
//     value: 'airbnb',
//   },
//   {
//     label: 'Stripe',
//     value: 'stripe',
//   },
//   {
//     label: 'Vercel',
//     value: 'vercel',
//   },
//   {
//     label: 'Spotify',
//     value: 'spotify',
//   },
//   {
//     label: 'Soundcloud',
//     value: 'soundcloud',
//   },
//   {
//     label: 'Superpeer',
//     value: 'superpeer',
//   },
//   {
//     label: 'Bookmate',
//     value: 'bookmate',
//   },
//   {
//     label: 'ASOS',
//     value: 'asos',
//   },
//   {
//     label: 'Blablacar',
//     value: 'blablacar',
//   },
//   {
//     label: 'Producthunt',
//     value: 'producthunt',
//   },
//   {
//     label: 'Youtube',
//     value: 'youtube',
//   },
//   {
//     label: 'Upwork',
//     value: 'upwork',
//   },
//   {
//     label: 'Poetizer',
//     value: 'poetizer',
//   },
//   {
//     label: 'IBM Carbon',
//     value: 'ibm-carbon',
//   },
//   {
//     label: 'Discord',
//     value: 'discord',
//   },
//   {
//     label: 'Next.js',
//     value: 'nextjs',
//   },
// {
//   label: 'ASOS',
//   value: 'asos',
// },
// {
//   label: 'Blablacar',
//   value: 'blablacar',
// },
// {
//   label: 'Soundcloud',
//   value: 'soundcloud',
// },
// {
//   label: 'Youtube',
//   value: 'youtube',
// },
// {
//   label: 'Upwork',
//   value: 'upwork',
// },
// {
//   label: 'Spotify',
//   value: 'spotify',
// },
// {
//   label: 'Vercel',
//   value: 'vercel',
// },
// ]
