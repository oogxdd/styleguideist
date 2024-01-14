import { useState } from 'react'
import { useTheme } from 'context'

import { Cell, Row } from './cell'

const borderOptions = ['none', 'sm', 'md', 'lg', 'xl', 'full']

export const BorderPresets = () => {
  const { setBorderRadius } = useTheme()
  const [selectedPreset, setPreset] = useState(3)

  return (
    <Row>
      {borderOptions.map((option, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <Cell
            key={option}
            isLast={index === borderOptions.length - 1}
            onClick={() => {
              setPreset(index + 1)
              setBorderRadius(index * 4)
            }}
            active={isSelected}
          >
            {option}
          </Cell>
        )
      })}
    </Row>
  )
}
