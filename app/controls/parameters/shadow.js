import { useState } from 'react'
import { useTheme } from 'context'

import { Cell, Row } from './cell'

const shadowPresets = [
  {
    label: '',
    value: '',
  },
]

const sd = ['none', 'sm', 'md', 'lg', 'xl']

export const ShadowPresets = ({ presets = [1, 2, 3, 4, 5], type }) => {
  const { theme, setTheme, setShadow } = useTheme()
  const [selectedPreset, setPreset] = useState(1)

  return (
    <Row>
      {presets.map((option, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <Cell
            key={option}
            isLast={index === sd.length - 1}
            onClick={() => {
              setPreset(index + 1)
              setTheme((theme) => {
                theme.shadows.default = theme.shadows[index]
              })
              // setShadow(index)
            }}
            active={isSelected}
          >
            <div className={`w-4 h-4 border shadow-${sd[index]}`} />
          </Cell>
        )

        // return (
        //   <div
        //     className={`
        //       h-10 w-10
        //       rounded
        //       border
        //       focus:ring-indigo-500
        //       cursor-pointer
        //       flex
        //       justify-center
        //       items-center
        //       text-gray-${isSelected ? 500 : 300}
        //       border-gray-${isSelected ? 500 : 300}
        //       shadow-${isSelected ? sd[index] : 'none'}
        //       hover:text-gray-500
        //       hover:border-gray-500
        //       hover:shadow-${sd[index]}
        //       transition-all
        //       transition-75
        //       transition-ease-out
        //       text-sm
        //     `}
        //     onClick={() => {
        //       setPreset(index + 1)
        //       setTheme((theme) => {
        //         theme.shadows.default = theme.shadows[index]
        //       })
        //       // setShadow(index)
        //     }}
        //     key={preset}
        //     sx={{
        //       borderColor: 'borderColor',
        //       color: 'text',
        //     }}
        //   >
        //     {index + 1}
        //   </div>
        // )
      })}
    </Row>
  )
}
