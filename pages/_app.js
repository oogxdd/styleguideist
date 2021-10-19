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
    </>
  )
}

export default MyApp
