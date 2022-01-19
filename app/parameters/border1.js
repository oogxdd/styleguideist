import { useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Checkbox } from 'app/ui'

export const BorderOne = ({ open = false, fields = [] }) => {
  const { theme, setTheme } = useContext(AppContext)

  return (
    <Section name="Border" open={open}>
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

        if (field.type === 'colorpicker') {
          return (
            <ColorPicker
              label={field.label}
              value={field.value}
              onChange={field.onChange}
            />
          )
        }
      })}
    </Section>
  )
}
