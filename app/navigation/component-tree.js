import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'
import { ChevronDownIcon } from '@heroicons/react/solid'

import * as components from 'data/components'

export default () => {
  const {
    selectedComponent,
    selectedSubComponent,
    setSelectedSubComponent,
  } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  if (selectedComponent && selectedComponent.group === 'atoms') return null

  return null

  console.log('selectedComponent')
  console.log(selectedComponent)
  console.log('selectedSubComponent')
  console.log(selectedSubComponent)
  const component = theme.molecules.blogpost

  return (
    <div
      className="max-h-screen overflow-hidden mt-11 -ml-1 absolute z-10"
      style={{
        // width: 'calc(20rem - 6px)',
        // minWidth: 'calc(20rem - 6px)'
        // width: 'calc(18rem - 0px)',
        // minWidth: 'calc(16rem - 0px)',
        // minWidth: 'calc(18rem - 0px)',
        left: '18rem',
      }}
    >
      <div
        className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
        style={{
          maxHeight: '125vh',
          // marginLeft: '-31px',
        }}
      >
        <form
          className="block pt-2 pb-6 flex flex-col gap-y-3"
          sx={{
            borderColor: 'borderColor',
            // paddingRight: 30,
            minHeight: '125vh',
          }}
        >
          <Item
            underline={selectedSubComponent.value === selectedComponent.value}
            onClick={() => setSelectedSubComponent(selectedComponent)}
            selectedSubComponent={selectedSubComponent}
          >
            {selectedComponent.label}
          </Item>
          {selectedComponent.children.map((c1) => {
            // level 1 components
            return (
              <>
                <Item
                  level={1}
                  underline={selectedSubComponent.value === c1.value}
                  onClick={() => {
                    setSelectedSubComponent(
                      components[c1.group].find(
                        (component) => component.value === c1.value,
                      ),
                    )
                  }}
                  selectedSubComponent={selectedSubComponent}
                >
                  {c1.name}
                </Item>
                {c1.children &&
                  c1.children.map((c2) => {
                    // level 2 components
                    return (
                      <Item
                        level={2}
                        underline={selectedSubComponent.value === c2.value}
                        onClick={() => {
                          setSelectedSubComponent(
                            components[c2.group].find(
                              (component) => component.value === c2.value,
                            ),
                          )
                        }}
                        selectedSubComponent={selectedSubComponent}
                      >
                        {c2.name}
                      </Item>
                    )
                  })}
              </>
            )
          })}
        </form>
      </div>
    </div>
  )
}

const Item = ({
  level = 0,
  children,
  underline,
  onClick = () => {},
  selectedSubComponent,
}) => {
  return (
    <span
      style={{
        marginLeft: level * 16,
      }}
      onClick={onClick}
      className={`flex items-center cursor-pointer hover:underline w-max ${
        underline ? 'underline' : ''
      }`}
    >
      {children}
    </span>
  )
}
