/** @jsxImportSource theme-ui */
import { useContext, useState } from 'react'
import { AppContext } from 'context'
import { downloadFile } from 'helpers'

import { presets } from 'data'

const sd = ['none', 'md', 'lg', 'xl', 'full']

export const ThemesPresets = ({ type }) => {
  const { theme, setTheme } = useContext(AppContext)
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
              text-gray-${isSelected ? 500 : 300}
              border-gray-${isSelected ? 500 : 300}
              hover:text-gray-500
              hover:border-gray-500
              hover:shadow-md
              transition-sm
              transition-75
              transition-ease-out

            `}
            onClick={() => {
              setTheme(preset)
              setPreset(index + 1)
            }}
            title={preset.name}
            key={`${preset.name}-${index}`}
            sx={{
              ':hover': {
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
              border-gray-300
              hover:text-gray-500
              hover:border-gray-500
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
          borderColor: 'borderColor',
          // color: 'text',
        }}
      >
        +
      </div>
    </div>
  )
  return
}
