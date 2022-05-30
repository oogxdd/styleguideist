import { useContext, useState } from 'react'
import { ThemeContext, AppContext } from 'context'
import { downloadFile } from 'helpers'
import { DownloadIcon, PlusIcon } from '@heroicons/react/solid'
import {
  // FolderDownloadIcon,
  ArrowSmDownIcon,
} from '@heroicons/react/outline'

// import { presets } from 'data/themes'
import { presets, base as defaultTheme } from 'data/themes'

import { organisms } from 'data/components'

const sd = ['none', 'md', 'lg', 'xl', 'full']

export const ThemesPresets = ({ type }) => {
  const {
    selectedComponent,
    setComponent,
    setSelectedSubComponent,
    setComponentVariant,
  } = useContext(AppContext)
  const { theme, setTheme, adThemes, setAdThemes } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(
    [...presets, ...adThemes].findIndex((th) => th.label === theme.label) + 1,
  )

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
      {[...presets, ...adThemes].map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <Theme
            key={`${preset.name}-${index}`}
            preset={preset}
            isSelected={isSelected}
            selectedPreset={selectedPreset}
            setPreset={setPreset}
            index={index}
          />
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
          const newThemeNumber = presets.length + adThemes.length + 1
          const newTheme = {
            ...defaultTheme,
            name: newThemeNumber,
            label: newThemeNumber,
          }
          setAdThemes([...adThemes, newTheme])
          setTheme(newTheme)
          setPreset(newThemeNumber)

          // setComponent(organisms.find((c) => c.value === 'styleguide'))
          // setSelectedSubComponent(
          //   organisms.find((c) => c.value === 'styleguide'),
          // )

          // window.localStorage.setItem('themes', JSON.stringify(theme))
          // downloadFile(`${presets.length + 1}.js`, JSON.stringify(theme))
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
        <PlusIcon
          className="h-3 w-3"
          sx={
            {
              // color: preset.colors.primary,
            }
          }
        />
      </div>
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
          downloadFile(`theme.js`, JSON.stringify(theme))
        }}
        sx={{
          opacity: 0.5,
          borderColor: 'borderColor',
          color: 'text',

          ':hover': {
            opacity: 1,
          },
        }}
      >
        <ArrowSmDownIcon
          className="h-4 w-4"
          sx={
            {
              // color: preset.colors.primary,
            }
          }
        />
      </div>
    </div>
  )

  return
}

const Theme = ({ preset, isSelected, selectedPreset, setPreset, index }) => {
  const [clicked, setClicked] = useState(false)
  const { selectedComponent, setComponentVariant } = useContext(AppContext)
  const { theme, setTheme, adThemes, setAdThemes } = useContext(ThemeContext)

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
              group

            `}
      onClick={() => {
        if (isSelected) {
          setClicked(true)
          if (clicked) {
            downloadFile(`${preset.name}.js`, JSON.stringify(preset))
          }
        } else {
          setClicked(false)
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
        }
      }}
      title={preset.name}
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
      <div
        className={`block ${isSelected && clicked ? 'group-hover:hidden' : ''}`}
      >
        {preset.logo || preset.label || index + 1}
      </div>
      <div
        className={`hidden ${isSelected && clicked ? 'group-hover:block' : ''}`}
      >
        <DownloadIcon
          className="h-4 w-4"
          sx={{
            color: preset.colors.primary,
          }}
        />
      </div>
    </div>
  )
}
