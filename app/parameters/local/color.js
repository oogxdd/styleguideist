import { useContext } from 'react'
import { ThemeContext } from 'context'
import { ColorPicker as Colorpicker, Section, Separator } from 'app/ui'

export const Color = ({ open = false, fields = [] }) => {
  const { theme, setColor } = useContext(ThemeContext)

  return (
    <Section name="Color" open={open}>
      {fields.map((field) => {
        if (field.type === 'colorpicker') {
          return (
            <Colorpicker
              key={field.label}
              label={field.label}
              value={field.value}
              onChange={field.onChange}
            />
          )
        }
        if (field.type === 'separator') {
          return <Separator key={field.label}>{field.label}</Separator>
        }
      })}
    </Section>
  )
}
