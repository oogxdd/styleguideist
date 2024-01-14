import { useState } from 'react'
import { useTheme } from 'context'

import { FontPicker } from 'components/atoms'
import { Cell, Row } from './cell'

const borderOptions = ['none', 'sm', 'md', 'lg', 'xl', 'full']

export const FontPresets = () => {
  const { setBorderRadius } = useTheme()
  const [selectedPreset, setPreset] = useState(3)

  return (
    <Row>
      <Cell w="w-1/3">
        <FontPicker />
      </Cell>
      <Cell w="w-1/3">
        <FontPicker />
      </Cell>
      <Cell w="w-1/3">
        <FontPicker />
      </Cell>
    </Row>
  )
}
