// 1. onMouseOver
// 2. onMouseLeave

/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

import { LinkIcon } from '@heroicons/react/solid'

const Component = ({ component }) => {
  const {
    selectedComponent,
    setComponent,
    setShowNavigation,
    previewComponent,
    setPreviewComponent,
  } = useContext(AppContext)

  const isPreviewed = previewComponent === component.value
  const isSelected = selectedComponent === component.value

  // onMouseOver={() =>
  //   component.enabled && setPreviewComponent(component.value)
  // }
  // onMouseLeave={() => component.enabled && setPreviewComponent(null)}
  return (
    <div className="flex items-center">
      <a
        sx={{
          opacity: component.enabled ? '1' : '0.3',
          color:
            (isSelected && !previewComponent) || isPreviewed
              ? 'primary'
              : 'text',
          ':hover': { color: 'primary' },
        }}
        href={component.link}
        target="_blank"
        onClick={(e) => {
          if (component.enabled) {
            e.preventDefault()
            setComponent(component.value)
            setPreviewComponent(null)
            setShowNavigation(false)
          }
        }}
        className="flex items-center group cursor-pointer"
        sx={{
          opacity: component.enabled ? '1' : '0.4',
          color: isSelected ? 'primary' : 'text',
          ':hover': { color: 'primary' },
        }}
      >
        {component.label}
        <LinkIcon
          className={`h-4 w-4 ml-1 hidden ${
            !component.enabled ? 'group-hover:block' : ''
          }`}
        />
      </a>
    </div>
  )
}

export default Component
