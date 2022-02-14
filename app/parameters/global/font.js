import { useContext } from 'react'
import { ThemeContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Select, Checkbox } from 'app/ui'
import { percentToNum, pxToNum } from 'helpers'

export const Font = ({ open = false }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Section name="Font" open={open}>
      <Select />

      <Slider
        label="Size"
        min="6"
        max="64"
        value={theme.fontSizes[0]}
        onChange={(value) => {
          const x = parseInt(value)
          setTheme({
            ...theme,
            fontSizes: [x, x + 2, x + 4, x + 8, x + 12, x + 30, x + 46, x + 52],
          })
        }}
      />
      <Slider
        min="100"
        max="900"
        step="100"
        value={theme.fontWeights.bold}
        onChange={(value) => {
          setTheme({
            ...theme,
            fontWeights: {
              ...theme.fontWeights,
              bold: parseInt(value),
            },
          })
        }}
        label="Weight"
      />
      <Slider
        label="Kerning"
        min="-300"
        max="1200"
        step="10"
        value={
          +(
            theme.letterSpacings[0].substring(
              0,
              theme.letterSpacings[0].length - 2,
            ) * 100
          )
        }
        onChange={(value) => {
          const x = parseInt(value) / 100
          setTheme({
            ...theme,
            letterSpacings: [
              x + 'px',
              x + 2 + 'px',
              x + 4 + 'px',
              x + 8 + 'px',
              x + 12 + 'px',
              x + 30 + 'px',
              x + 46 + 'px',
              x + 52 + 'px',
            ],
          })
        }}
      />
      <Slider
        label="Leading"
        min="50"
        max="500"
        step="10"
        value={percentToNum(theme.lineHeights[0])}
        onChange={(value) => {
          setTheme({
            ...theme,
            lineHeights: [value + '%'],
          })
        }}
      />
      {/*
      <Checkbox label="Uppercase" />
      <ColorPicker
        label="Color"
        value={
          theme.buttons.primary.color === 'background'
            ? theme.colors.background
            : theme.buttons.primary.color
        }
        onChange={(color) =>
          setTheme((theme) => ({
            ...theme,
            buttons: {
              ...theme.buttons,
              primary: {
                ...theme.buttons.primary,
                color: color.hex,
              },
            },
          }))
        }
      />
      */}
    </Section>
  )
}

export default Font
