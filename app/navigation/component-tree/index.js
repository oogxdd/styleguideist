import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'
import { ChevronDownIcon } from '@heroicons/react/solid'

import * as components from 'data/components'
import Item from './item'

export default () => {
  const {
    selectedComponent,
    selectedSubComponent,
    setSelectedSubComponent,
    fullscreen,
  } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  if (selectedComponent && selectedComponent.group === 'atoms') return null
  if (fullscreen) return null

  return (
    <div
      className="max-h-screen overflow-hidden mt-11 -ml-1 absolute z-10"
      style={{
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
          >
            {selectedComponent.label}
          </Item>
          {selectedComponent.children.map((c1, i) => {
            // level 1 components
            return (
              <div key={c1.value} className="flex flex-col gap-y-3">
                <Item
                  level={1}
                  underline={
                    selectedSubComponent.value === c1.value
                    // && (c1.variant
                    //     ? selectedSubComponent.variant === c1.variant
                    //     : true)
                  }
                  onClick={() => {
                    console.log(
                      components[c1.group].find(
                        (component) => component.value === c1.value,
                      ),
                    )
                    console.log(c1)
                    setSelectedSubComponent({
                      ...components[c1.group].find(
                        (component) => component.value === c1.value,
                      ),
                      variant: c1.variant,
                    })
                  }}
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
                        key={c2.group + c2.value}
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
              </div>
            )
          })}
        </form>
      </div>
    </div>
  )
}
