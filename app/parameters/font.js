import { useContext } from 'react'
import { ThemeContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  Select as FontPicker,
  Checkbox,
} from 'app/ui'
import { percentToNum, pxToNum } from 'helpers'

export const Font = ({ open = false, fields = [] }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeColor = (color, value) => {
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [color]: value },
    }))
  }

  return (
    <Section name="Font" open={open}>
      {fields.map((field) => {
        if (field.type === 'slider') {
          return (
            <Slider
              label={field.label}
              min={field.min}
              max={field.max}
              step={field.step || 1}
              value={field.value}
              onChange={field.onChange}
            />
          )
        }
      })}
    </Section>
  )
}

export default Font
