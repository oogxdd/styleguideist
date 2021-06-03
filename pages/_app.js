import { AppProvider } from 'context'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}

export default MyApp
