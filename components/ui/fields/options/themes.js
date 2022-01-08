/** @jsxImportSource theme-ui */
import { useContext, useState } from 'react'
import { AppContext } from 'context'

import {
  defaultPreset,
  vercel,
  spotify,
  twitter,
  redWhite,
  blueRed,
  one,
  another,
  anan,
  greenPurple,
  hackClubTheme,
} from 'data/presets'

const presets = [
  {
    label: 'DE',
    value: 'default',
    preset: defaultPreset,
  },
  // {
  //   label: 'Twitter',
  //   value: 'twiter',
  //   logo: <img src="/img/logo/twitter.svg" alt="Twitter" className="w-7 h-7" />,
  //   preset: twitter,
  // },
  // {
  //   label: 'Spotify',
  //   value: 'spotify',
  //   logo: <img src="/img/logo/spotify.svg" alt="Spotify" className="w-7 h-7" />,
  //   preset: spotify,
  // },
  // {
  //   label: 'Vercel',
  //   value: 'vercel',
  //   logo: <img src="/img/logo/vercel.svg" alt="Vercel" className="w-7 h-7" />,
  //   preset: vercel,
  // },
  // {
  //   // label: '1',
  //   value: 'blur-red',
  //   preset: blueRed,
  // },
  // {
  //   // label: 'Red-white',
  //   value: 'red-white',
  //   preset: redWhite,
  // },
  // {
  //   label: 'CU',
  //   value: 'custom',
  //   preset: blueRed,
  // },
  {
    value: 'one',
    preset: one,
  },
  {
    value: 'another',
    preset: another,
  },
  {
    value: 'anan',
    preset: anan,
  },
  {
    name: 'Green+Purple',
    value: 'green',
    preset: greenPurple,
  },
  // {
  //   value: 'hack-club',
  //   preset: hackClubTheme,
  // },
]

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
              setTheme(preset.preset)
              setPreset(index + 1)
            }}
            title={preset.name}
            key={preset}
            sx={{
              ':hover': {
                borderColor: preset.preset.colors.primary,
                color: preset.preset.colors.primary,
                background: preset.preset.colors.background,
              },
              // borderColor: preset.preset.colors
              //   ? preset.preset.colors.primary
              //   : 'borderColor',
              // background: 'transparent',
              // color: preset.preset.colors
              //   ? preset.preset.colors.primary
              //   : 'background',
              // background: preset.preset.colors
              //   ? preset.preset.colors.background
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
            {preset.logo || preset.label || index}
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
          // alert('save')
          window.localStorage.setItem('themes', JSON.stringify(theme))
          // setTheme(preset.preset)
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
