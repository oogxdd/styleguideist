import { useContext } from 'react'
import { ThemeContext } from 'context'
import { ColorPicker, Section, Separator } from 'components/atoms'

export const Color = ({ open = false, fields = [] }) => {
  const { theme, setColor } = useContext(ThemeContext)

  return (
    <Section name="Color" open={open}>
      {fields.map((field) => {
        if (field.type === 'colorpicker') {
          return (
            <ColorPicker
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
