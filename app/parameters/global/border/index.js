// if preset is selected - use default value
// if custom - disable presets and set a strong value for the button
//
//
// one of options: custom or preset
import { useContext } from 'react'
import { ThemeContext } from 'context'
import { Section, ColorPicker, Slider, Checkbox } from 'components/atoms'
import { BorderPresets } from './presets'

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
      <BorderPresets />
      <Slider
        min="0"
        max="12"
        step="0.01"
        label="Radius"
        value={borderRadius}
        onChange={(value) => setBorderRadius(value)}
      />
      <Slider
        label="Width"
        step="0.01"
        value={borderWidth}
        onChange={(value) => setBorderWidth(value)}
      />
    </Section>
  )
}
