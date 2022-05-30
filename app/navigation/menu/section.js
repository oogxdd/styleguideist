import { useContext } from 'react'
import { UIContext } from 'context'

import Component from './component'
import Template from './template'

const Section = ({ components, label }) => {
  const { navigationFilter, setNavigationFilter } = useContext(UIContext)

  const filteredComponents = components
    .filter((c) =>
      c.label.toLowerCase().includes(navigationFilter.toLowerCase()),
    )
    .filter((c) => !!c.component)
  // .filter((c) => c.enabled)

  // if (filteredComponents.length === 0) return null
  const noneFound = filteredComponents.length === 0

  // templates
  // if (label === 'Templates') {
  //   // return null
  //   return (
  //     <div className="flex flex-col space-y-3 mb-16 mt-8">
  //       <span
  //         className="mb-4 text-lg"
  //         style={{
  //           fontSize: '17px',
  //         }}
  //       >
  //         {label}
  //       </span>

  //       <div className="grid grid-cols-4 grid-rows-1">
  //         {filteredComponents.map((component) => (
  //           <Template template={component} key={component.value} />
  //         ))}
  //       </div>
  //     </div>
  //   )
  // }

  // atoms, molecules, organisms
  return (
    <div className="flex flex-col space-y-3 mb-16">
      <span
        className="mb-4 text-lg"
        style={{
          fontSize: '17px',
        }}
      >
        {label}
      </span>

      <div
        className={`grid grid-cols-4 gap-y-1.5 ${
          noneFound ? 'opacity-50' : ''
        }`}
      >
        {noneFound
          ? '—'
          : filteredComponents
              .sort((a, b) => {
                if (a.enabled === true && b.enabled === true) return 0
                if (a.enabled === true) return -1
                return 1
              })
              .map((component) => (
                <Component component={component} key={component.value} />
              ))}
      </div>
    </div>
  )
}

export default Section
