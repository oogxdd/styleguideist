import { useContext } from 'react'
import { AppContext } from 'context'
import { ColorPicker as Colorpicker, Section, Separator } from 'app/ui'

export const ColorOne = ({ open = false, fields = [] }) => {
  const { theme, setColor } = useContext(AppContext)

  return (
    <Section name="Color" open={open}>
      {fields.map((field) => {
        if (field.type === 'colorpicker') {
          return (
            <Colorpicker
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
