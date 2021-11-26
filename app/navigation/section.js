import { useContext } from 'react'
import { AppContext } from 'context'

import Component from './component'
import Template from './template'
// import SubSection from './sub-section'

const Section = ({ components, label }) => {
  const { navigationFilter, setNavigationFilter } = useContext(AppContext)

  const filteredComponents = components.filter((c) =>
    c.label.toLowerCase().includes(navigationFilter.toLowerCase()),
  )

  if (filteredComponents.length === 0) return null

  // templates
  if (label === 'Templates') {
    return (
      <div className="flex flex-col space-y-3 mb-16 mt-8">
        <span
          className="mb-4 text-lg"
          style={{
            fontSize: '17px',
          }}
        >
          {label}
        </span>

        <div className="grid grid-cols-4 grid-rows-1">
          {filteredComponents.map((component) => (
            <Template template={component} />
          ))}
        </div>
      </div>
    )
  }

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

      <div className="grid grid-cols-4 gap-y-1.5">
        {filteredComponents.map((component) => (
          <Component component={component} />
        ))}
      </div>
    </div>
  )
}

export default Section