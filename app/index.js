import Parameters from 'app/parameters'
import Preview from 'app/preview'
import Navigation from 'app/navigation'

const App = () => (
  <div className="flex h-screen items-center">
    <Parameters />
    <Preview />
    <Navigation />
  </div>
)

export default App
