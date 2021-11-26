/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

import { LinkIcon } from '@heroicons/react/solid'

const Component = ({ component }) => {
  const { selectedComponent, setComponent, setShowNavigation } = useContext(
    AppContext,
  )

  const isSelected = selectedComponent === component.value

  return (
    <div
      className="flex items-center group cursor-pointer"
      sx={{
        opacity: component.enabled ? '1' : '0.3',
        color: isSelected ? 'primary' : 'text',
        ':hover': { color: 'primary' },
      }}
    >
      <a
        href={component.link}
        target="_blank"
        onClick={(e) => {
          if (component.enabled) {
            e.preventDefault()
            setComponent(component.value)
            setShowNavigation(false)
          }
        }}
      >
        {component.label}
      </a>
      {component.enabled}
      <LinkIcon
        className={`h-4 w-4 ml-1 hidden ${
          !component.enabled ? 'group-hover:block' : ''
        }`}
      />
      {/*
       */}
    </div>
  )
  return
}

export default Component
