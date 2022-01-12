import Parameters from 'app/parameters'
// import Preview from 'app/preview'
import Navigation from 'app/navigation'

import dynamic from 'next/dynamic'
const Preview = dynamic(() => import('app/preview'), { ssr: false })

const App = () => (
  <div className="flex h-screen items-center">
    <Parameters />
    <Preview />
    <Navigation />
  </div>
)

export default App
