import Head from 'next/head'
import { AppProvider } from 'context'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Styleguideist</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/css/index.css" rel="stylesheet" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
      <style global jsx>{`
        input:checked + div {
          @apply border-indigo-500;
        }
        input:checked + div svg {
          @apply block;
        }

        .sketch-picker {
          z-index: 10;
        }

        .parameters {
          min-width: calc(16rem + 30px);
          max-width: calc(16rem + 30px);
          transform: scale(0.8);
          transform-origin: top left;
        }

        .parameters > form {
          padding-right: 30px;
          border-right: 1px solid rgb(229, 231, 235);
        }
      `}</style>
    </>
  )
}

export default MyApp
