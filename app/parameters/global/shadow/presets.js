import { useContext, useState } from 'react'
import { ThemeContext } from 'context'

const shadowPresets = [
  {
    label: '',
    value: '',
  },
]

const sd = ['none', 'sm', 'md', 'lg', 'xl']

export const ShadowPresets = ({ presets = [1, 2, 3, 4, 5], type }) => {
  const { theme, setTheme, setShadow } = useContext(ThemeContext)
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
              text-xs


            `}
            onClick={() => {
              setPreset(index + 1)
              setTheme((theme) => {
                theme.shadows.default = theme.shadows[index]
              })
              // setShadow(index)
            }}
            key={preset}
            sx={{
              // borderColor: isSelected ? 'primary' : 'borderColor',
              // color: isSelected ? 'primary' : 'text',
              borderColor: 'borderColor',
              color: 'text',
              opacity: isSelected ? 1 : 0.5,
              ':hover': {
                opacity: 1,
              },
            }}
          >
            {index + 1}
          </div>
        )
      })}
    </div>
  )
  return
}
