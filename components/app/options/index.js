import Color from './color'
import Spacing from './spacing'
import Radius from './radius'
import Style from './style'
import Font from './font'

export default () => (
  <div className="hidden lg:flex lg:flex-shrink-0">
    <div className="flex flex-col w-64">
      {/* Sidebar component, swap this element with another sidebar if you like */}
      <div className="flex flex-col h-0 flex-1 border-r border-gray-100">
        <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <nav className="mt-5 flex-1" aria-label="Sidebar">
            <div className="px-2 space-y-1">
              {/* Current: "bg-gray-200 text-gray-900", Default: "text-gray-600 hover:bg-gray-50 hover:text-gray-900" */}
              <Item label="Style">
                <Style />
              </Item>
              <Item label="Color">
                <Color />
              </Item>
              <Item label="Spacing">
                <Spacing />
              </Item>
              <Item label="Radius">
                <Radius />
              </Item>
              <Item label="Font">
                <Font />
              </Item>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </div>
)

const Item = ({ label, children }) => (
  <div className="flex flex-col">
    <a
      href="#"
      className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-sm font-medium rounded-md"
    >
      {/* Heroicon name: outline/map */}
      <svg
        className="text-gray-400 group-hover:text-gray-500 mr-3 h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
      {label}
    </a>
    {children}
  </div>
)
