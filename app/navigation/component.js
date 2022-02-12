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
  const isSelected = selectedComponent.value === component.value

  // const enabled = component.enabled
  const enabled = true

  return (
    <div className="flex items-center">
      <a
        sx={{
          opacity: enabled ? '1' : '0.3',
          color:
            (isSelected && !previewComponent) || isPreviewed
              ? 'primary'
              : 'text',
          ':hover': { color: 'primary' },
        }}
        href={component.link}
        target="_blank"
        onClick={(e) => {
          if (enabled) {
            e.preventDefault()
            setComponent(component)
            setPreviewComponent(null)
            setShowNavigation(false)
          }
        }}
        className="flex items-center group cursor-pointer"
        sx={{
          opacity: enabled ? '1' : '0.4',
          color: isSelected ? 'primary' : 'text',
          ':hover': { color: 'primary' },
        }}
      >
        {component.label}
        <LinkIcon
          className={`h-4 w-4 ml-1 hidden ${
            !enabled ? 'group-hover:block' : ''
          }`}
        />
      </a>
    </div>
  )
}

export default Component
