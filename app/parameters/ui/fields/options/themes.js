import { useContext, useState } from 'react'
import { ThemeContext, AppContext } from 'context'
import { downloadFile } from 'helpers'

import { presets } from 'data/themes'

const sd = ['none', 'md', 'lg', 'xl', 'full']

export const ThemesPresets = ({ type }) => {
  const { selectedComponent, setComponentVariant } = useContext(AppContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(1)

  return (
    <div
      className="flex items-center justify-between mb-6 flex-wrap"
      style={{
        justifyContent: 'space-between',
        gridTemplateColumns: '2.5rem 2.5rem 2.5rem 2.5rem 2.5rem',
        display: 'grid',
        gridRowGap: '12px',
      }}
    >
      {presets.map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <div
            className={`
              text-xs
              h-10 w-10
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

            `}
            onClick={() => {
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
              // text-gray-${isSelected ? 500 : 300}
              // border-gray-${isSelected ? 500 : 300}
              // hover:text-gray-500
              // hover:border-gray-500

              ':hover': {
                opacity: 1,
                borderColor: preset.colors.primary,
                color: preset.colors.primary,
                background: preset.colors.background,
              },
              // borderColor: preset.colors
              //   ? preset.colors.primary
              //   : 'borderColor',
              // background: 'transparent',
              // color: preset.colors
              //   ? preset.colors.primary
              //   : 'background',
              // background: preset.colors
              //   ? preset.colors.background
              //   : 'background',
              // borderColor: 'borderColor',
              // color: 'text',
            }}
            style={
              {
                // borderColor: preset.colors
                //   ? preset.colors.primary
                //   : 'borderColor',
                // background: preset.colors
                //   ? preset.colors.background
                //   : 'background',
                // borderColor: preset.colors.primary,
                // background: preset.colors.background,
                // borderColor: 'borderColor',
                // color: 'text',
              }
            }
          >
            {preset.logo || preset.label || index + 1}
          </div>
        )
      })}
      <div
        className={`
              h-10 w-10
              max-h-10 max-w-10
              border
              focus:ring-indigo-500
              cursor-pointer
              flex
              justify-center 
              items-center
              rounded
              text-gray-300
              hover:shadow-md
              transition-sm
              transition-75
              transition-ease-out

            `}
        onClick={() => {
          window.localStorage.setItem('themes', JSON.stringify(theme))
          downloadFile(`${presets.length + 1}.js`, JSON.stringify(theme))
          // setTheme(preset)
          // setPreset(index + 1)
        }}
        sx={{
          opacity: 0.5,
          // border-gray-300
          // hover:text-gray-500
          // hover:border-gray-500
          borderColor: 'borderColor',
          color: 'text',

          ':hover': {
            opacity: 1,
            // borderColor: preset.colors.primary,
            // color: preset.colors.primary,
            // background: preset.colors.background,
          },
          // color: 'text',
        }}
      >
        +
      </div>
    </div>
  )
  return
}
