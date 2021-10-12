import { useState, useContext } from 'react'
import { AppContext } from 'context'
import Color from './color'
import Spacing from './spacing'
import Radius from './radius'
import Presets from './presets'
import Font from './font'
import Shadow from './shadow'

// preset - ? icon
// radius - radius icon
// spacing - ruler icon
// color - palette icon
// font - letter icon

export default () => {
  // const { color } = useContext(AppContext)

  return (
    <div className="hidden lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-72">
        <div className={`flex flex-col h-0 flex-1 border-r border-gray-100`}>
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <nav className="mt-0 flex-1" aria-label="Sidebar">
              <div className="space-y-2">
                <Item label="Color">
                  <Color />
                </Item>
                <Item label="Font">
                  <Font />
                </Item>
                <Item label="Border">
                  <Radius />
                </Item>
                <Item label="Shadow">
                  <Shadow />
                </Item>
                <Item label="Presets">
                  <Presets />
                </Item>
                {/*
                 */}
                {/*
              <Item label="Spacing">
                <Spacing />
              </Item>
               */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

const Item = ({ label, children }) => {
  const [opened, setOpened] = useState(false)

  return (
    <div className="flex flex-col border-b">
      <a
        className="text-gray-500 hover:bg-gray-50 hover:text-gray-900 group flex items-center py-4 text-xs font-bold px-4 cursor-pointer uppercase"
        onClick={() => setOpened(!opened)}
      >
        {/*
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
        */}
        {label}
      </a>
      {opened && children}
    </div>
  )
}
