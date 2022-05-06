// if preset is selected - use default value
// if custom - disable presets and set a strong value for the button
//
//
// one of options: custom or preset
import { useContext } from 'react'
import { ThemeContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  Checkbox,
} from 'app/parameters/ui'

export const Border = ({ open = false }) => {
  const {
    theme,
    setTheme,
    borderWidth,
    borderRadius,
    setBorderWidth,
    setBorderRadius,
  } = useContext(ThemeContext)

  return (
    <Section name="Border">
      <Presets type="border" />
      <Slider
        min="0"
        max="48"
        label="Radius"
        value={borderRadius}
        onChange={(value) => setBorderRadius(value)}
      />
      <Slider
        label="Width"
        value={borderWidth}
        onChange={(value) => setBorderWidth(value)}
      />
    </Section>
  )
}
