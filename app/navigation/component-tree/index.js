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
    selectedComponentVariant,
    fullscreen,
  } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  if (
    (selectedComponent && selectedComponent.group === 'atoms') ||
    !selectedComponent.children
  )
    return null
  if (fullscreen) return null

  return (
    <div
      className="overflow-hidden mt-11 -ml-1 absolute z-10"
      style={{
        left: '18rem',
        top: 0,
        marginTop: '22px',
      }}
    >
      <div
        className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 overflow-scroll"
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
            // if component is not available in this variant: return null
            if (c1.availableIn) {
              if (c1.availableIn.indexOf(selectedComponentVariant) === -1) {
                return null
              }
            }

            // level 1 components
            return (
              <div
                key={c1.group + c1.value + i}
                className="flex flex-col gap-y-3"
              >
                <Item
                  level={1}
                  underline={
                    selectedSubComponent.value === c1.value &&
                    selectedSubComponent.variant === c1.variant
                    // && (c1.variant
                    //     ? selectedSubComponent.variant === c1.variant
                    //     : true)
                  }
                  onClick={() => {
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
                        underline={
                          selectedSubComponent.value === c2.value &&
                          selectedSubComponent.variant === c2.variant
                        }
                        key={c2.group + c2.value}
                        onClick={() => {
                          setSelectedSubComponent({
                            ...components[c2.group].find(
                              (component) => component.value === c2.value,
                            ),
                            variant: c2.variant,
                          })
                        }}
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
