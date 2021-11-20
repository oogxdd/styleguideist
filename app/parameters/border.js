// if preset is selected - use default value
// if custom - disable presets and set a strong value for the button
//
//
// one of options: custom or preset
import { useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Checkbox } from 'components/ui'

export const Border = ({ open = false }) => {
  const { theme, setTheme } = useContext(AppContext)

  const borderRadius = theme.radii[2].substring(0, theme.radii[2].length - 2)
  const borderWidth = theme.borders.border
    .split(' ')[0]
    .substring(0, theme.borders.border.split(' ')[0].length - 2)

  const setBorderRadius = (value) => {
    // setTheme((theme) => ({
    //   ...theme,
    //   buttons: {
    //     ...theme.buttons,
    //     primary: {
    //       ...theme.buttons.primary,
    //       borderRadius: value + 'px',
    //     },
    //   },
    // }))
    const values = [
      value / 4 + 'px',
      value / 2 + 'px',
      value + 'px',
      value * 2 + 'px',
      // value * 3 + 'px',
      value * 4 + 'px',
      // value * 10 + 'px',
    ]
    setTheme((theme) => ({
      ...theme,
      radii: values,
    }))
  }

  const setBorderWidth = (value) =>
    setTheme((theme) => ({
      ...theme,
      borders: {
        ...theme.borders,
        border: `${value}px solid black`,
      },
    }))

  const changeColor = (color, value) => {
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [color]: value },
    }))
  }

  return (
    <Section
      name="Border"
      customOptions={
        <>
          <Slider
            label="Radius"
            value={borderRadius}
            onChange={(value) => setBorderRadius(value)}
          />
          <Slider
            label="Width"
            value={borderWidth}
            onChange={(value) => setBorderWidth(value)}
          />
          <ColorPicker
            label="Color"
            value={theme.colors.borderColor}
            onChange={(color) => changeColor('borderColor', color.hex)}
          />
        </>
      }
    >
      <Presets type="border" />
    </Section>
  )
}
