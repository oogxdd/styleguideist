import { useContext, useState } from 'react'
import { ThemeContext } from 'context'

const sd = ['none', 'sm', 'md', 'lg', 'xl']

export const SpacingPresets = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(1)

  return (
    <div className="flex items-center justify-between mb-6">
      {presets.map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <div
            className={`
              h-10 w-10
              rounded
              border
              focus:ring-indigo-500
              cursor-pointer
              flex
              justify-center
              items-center
              shadow-${isSelected ? sd[index] : 'none'}
              hover:shadow-${sd[index]}
              transition-all
              transition-75
              transition-ease-out
              group

            `}
            onClick={() => {
              setPreset(index + 1)

              const x = index + 1
              const sizes = [
                x,
                2 * x,
                4 * x,
                6 * x,
                8 * x,
                10 * x,
                12 * x,
                16 * x,
                24 * x,
                32 * x,
                64 * x,
                128 * x,
                256 * x,
                512 * x,
              ]
              setTheme((theme) => {
                theme.space.x = sizes
                theme.space.y = sizes
              })
              // setShadow(index)
            }}
            key={preset}
            sx={{
              borderColor: 'borderColor',
              color: 'text',
              opacity: isSelected ? 1 : 0.5,
              ':hover': {
                opacity: 1,
              },
            }}
          >
            {isSelected ? preset.activeChildren : preset.children}
          </div>
        )
      })}
    </div>
  )
}

const presets = [
  {
    activeChildren: (
      <div
        className="h-3 w-3 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
    children: (
      <div
        className="h-3 w-3 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
  },
  {
    activeChildren: (
      <div
        className="h-5 w-5 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
    children: (
      <div
        className="h-5 w-5 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
  },
  {
    activeChildren: (
      <div
        className="h-7 w-7 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
    children: (
      <div
        className="h-7 w-7 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
  },
  {
    activeChildren: (
      <div
        className="h-8 w-8 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
    children: (
      <div
        className="h-8 w-8 rounded-sm border group-hover transition-all transition-75 transition-ease-out"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
      ></div>
    ),
  },
  {
    activeChildren: null,
    children: null,
  },
]
