import Parameters from 'app/parameters'
import Preview from 'app/preview'
import Navigation from 'app/navigation'
import ComponentTree from 'app/navigation/component-tree'

const App = () => (
  <div className="flex h-screen items-center">
    <Parameters />
    <>
      <ComponentTree />
      <Preview />
      <Navigation />
    </>
  </div>
)

export default App
