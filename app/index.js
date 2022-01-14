import Parameters from 'app/parameters'
import Preview from 'app/preview'
import Navigation from 'app/navigation'
import NavigationOne from 'app/navigation/one'

const App = () => (
  <div className="flex h-screen items-center">
    <NavigationOne />
    <Preview />
    <Parameters />
    {/*
     */}
  </div>
)

export default App
