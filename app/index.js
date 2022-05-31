import { useContext, useState } from 'react'
import { AppContext, ThemeContext, UIContext } from 'context'

import Parameters from 'app/parameters'
import Preview from 'app/preview'
import Navigation from 'app/navigation'
import ComponentTree from 'app/navigation/component-tree'

import ReactTooltip from 'react-tooltip'
import { presets } from 'data/themes'
import { molecules, organisms, templates } from 'data/components'

import { ChipIcon } from '@heroicons/react/outline'

const App = () => {
  const { fullscreen } = useContext(UIContext)

  return (
    <div className="flex h-screen items-center">
      <Parameters />
      <>
        <ComponentTree />
        <Preview />
        <Navigation />
        {fullscreen && <Presets />}
        {fullscreen && <Components />}
      </>
    </div>
  )
}

const Presets = () => {
  const { selectedComponent, setComponentVariant } = useContext(AppContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(1)

  return (
    <div className="fixed bottom-2 left-9 h-8 flex items-center">
      {presets.map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <>
            <div
              style={{ marginLeft: 2, marginRight: 2 }}
              className={`
                text-xs
                h-5 w-5
                max-h-10 max-w-10
                border
                focus:ring-indigo-500
                cursor-pointer
                flex
                justify-center 
                items-center
                rounded
                hover:shadow-md
                transition-sm
                transition-75
                transition-ease-out
                relative
              `}
              onClick={() => {
                // text-gray-${isSelected ? 500 : 300}
                // border-gray-${isSelected ? 500 : 300}
                // hover:text-gray-500
                // hover:border-gray-500

                setTheme(preset)
                setPreset(index + 1)

                const preferredLayout =
                  preset[selectedComponent.group][selectedComponent.value]
                    .preferredLayout

                if (preferredLayout) {
                  setComponentVariant(preferredLayout)
                } else {
                  setComponentVariant(1)
                }
              }}
              title={preset.name}
              key={`${preset.name}-${index}`}
              sx={{
                borderColor: 'borderColor',
                opacity: isSelected ? 1 : 0.5,
                color: 'text',

                ':hover': {
                  borderColor: preset.colors.primary,
                  color: preset.colors.primary,
                  background: preset.colors.background,
                },
              }}
              data-tip
              data-for={`preset-${index}`}
            >
              {(preset.logo || preset.label || index + 1)[0].toUpperCase()}
            </div>
            <ReactTooltip
              id={`preset-${index}`}
              effect="solid"
              // className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 !important"
              className="sg-tooltip"
            >
              <span>{preset.logo || preset.label || index + 1}</span>
            </ReactTooltip>
          </>
        )
      })}
    </div>
  )
}

const Components = () => {
  const { selectedComponent, setComponent, setComponentVariant } = useContext(
    AppContext,
  )
  const components = [
    {
      label: 'Article',
      value: 'blogpost',
    },
    {
      label: 'Form',
      value: 'form',
    },
    {
      label: 'Feed',
      value: 'feed',
    },
    {
      label: 'Guide',
      value: 'styleguide',
    },
  ]

  return (
    <div className="fixed bottom-3 right-6 flex">
      {components.map((component) => {
        const isSelected = component === 'Blog'

        return (
          <>
            <div
              key={component.value}
              style={{ marginLeft: 2, marginRight: 2 }}
              onClick={() => {
                const comp = [...molecules, ...organisms, ...templates].find(
                  (m) => m.value === component.value,
                )
                setComponent(comp)
                setComponentVariant(comp.preferredLayout || 1)
              }}
              className={`
                text-xs
                h-5 w-5
                max-h-10 max-w-10
                border
                focus:ring-indigo-500
                cursor-pointer
                flex
                justify-center 
                items-center
                rounded
                hover:border-gray-500
                hover:shadow-md
                transition-sm
                transition-75
                transition-ease-out
                relative
              `}
              data-tip
              data-for={`component-${component.value}`}
              sx={{
                borderColor: 'borderColor',
                opacity: isSelected ? 1 : 0.5,
                color: 'text',

                ':hover': {
                  borderColor: 'primary',
                  color: 'primary',
                  // color: preset.colors.primary,
                  // background: preset.colors.background,
                },
              }}
            >
              {component.label[0]}
              {/*component.value === 'styleguide' ? (
                <span className="text-lg">¤</span>
              ) : (
                component.label[0]
                  )*/}
            </div>
            <ReactTooltip
              id={`component-${component.value}`}
              effect="solid"
              place="top"
              className="sg-tooltip"
            >
              <span>{component.label}</span>
            </ReactTooltip>
          </>
        )
      })}
    </div>
  )
}

// <ChipIcon className="w-3 h-3" />
export default App
