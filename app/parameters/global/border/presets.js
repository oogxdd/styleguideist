import { useContext, useState } from 'react'
import { ThemeContext } from 'context'

const shadowPresets = [
  {
    label: '',
    value: '',
  },
]

const sd = ['none', 'md', 'lg', 'lg', 'full']

export const BorderPresets = ({
  presets = ['none', 'sm', 'md', 'lg', 'full'],
  type,
}) => {
  const { theme, setTheme, setBorderRadius } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(3)

  return (
    <div className="flex items-center justify-between mb-6">
      {presets.map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <div
            className={`
              h-10 w-10
              border
              focus:ring-indigo-500
              cursor-pointer
              flex
              justify-center 
              items-center
              rounded-${sd[index]}
              shadow-${isSelected ? sd[index] : 'none'}
              hover:shadow-${sd[index]}
              transition-sm
              transition-75
              transition-ease-out
              text-xs

            `}
            onClick={() => {
              setPreset(index + 1)
              setBorderRadius(index * 4)
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
            {preset}
          </div>
        )
      })}
    </div>
  )
  return
}

// text-gray-${isSelected ? 500 : 300}
// border-gray-${isSelected ? 500 : 300}
// hover:text-gray-500
// hover:border-gray-500
