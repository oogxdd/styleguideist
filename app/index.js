import Parameters from 'app/parameters'
import ComponentGroups from 'app/navigation/groups'
import Components from 'app/navigation/components'
import Preview from 'app/preview'

const App = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Parameters />
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-gray-50">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <ComponentGroups />
            <div className="flex flex-row items-center h-full">
              <aside className="order-first flex flex-col flex-shrink-0 w-56 border-gray-200 mt-16 absolute self-start">
                <Components />
              </aside>
              <Preview />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default App
