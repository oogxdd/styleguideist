import { useContext } from 'react'
import { ThemeContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  Separator,
} from 'app/parameters/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Spacing = ({ open = false, fields = [] }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Section name="Spacing" open={open}>
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

        if (field.type === 'separator') {
          return <Separator first={field.first}>{field.label}</Separator>
        }
      })}
    </Section>
  )
}
