import { AppProvider, ThemeProvider, UIProvider } from 'context'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="icon" type="image/x-icon" href="/logo-gray3.png" />
      <title>MakeUI</title>
      <script src="https://unpkg.com/@babel/standalone@7/babel.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.5.0-beta4/html2canvas.min.js"></script>
      {/* <title>Styleguideist</title> */}
      <meta
        name="description"
        content="Parametric design tool for building UI"
      />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <ThemeProvider>
      <AppProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </AppProvider>
    </ThemeProvider>
  </>
)

export default App
