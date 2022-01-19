import { useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Separator } from 'app/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const SpacingOne = ({ open = false, fields = [] }) => {
  const { theme, setTheme } = useContext(AppContext)

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
