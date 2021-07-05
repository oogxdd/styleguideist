import Options from 'app/options'
import Components from 'app/components'
import Tabs from 'app/tabs'
import Preview from 'app/preview'

const App = () => {
  return (
    <div className="h-screen flex overflow-hidden bg-white">
      <Options />
      <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-gray-50">
        <div className="flex-1 relative z-0 flex overflow-hidden">
          <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
            <Tabs />
            <div
              className="flex flex-row items-center"
              style={{
                height: 'calc(100vh - 4.25rem)',
              }}
            >
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
