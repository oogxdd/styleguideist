import { useContext } from 'react'
import { ThemeContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  FontPicker,
  Checkbox,
} from 'components/atoms'
import { percentToNum, pxToNum } from 'helpers'

export const Font = ({ open = false }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <Section name="Font" open={open}>
      <FontPicker />

      <Slider
        label="Base size"
        min={10}
        step="0.01"
        max={32}
        value={theme.fontSizes[2]}
        onChange={(value) => {
          const x = +value
          const fontSizes = [
            (x * 11) / 15,
            (x * 13) / 15,
            x,
            (x * 18) / 15,
            (x * 21) / 15,
            (x * 24) / 15,
            (x * 48) / 15,
          ]
          setTheme((theme) => {
            theme.fontSizes = fontSizes
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

// <Slider
//   min="100"
//   max="900"
//   step="100"
//   value={theme.fontWeights.bold}
//   onChange={(value) => {
//     setTheme({
//       ...theme,
//       fontWeights: {
//         ...theme.fontWeights,
//         bold: parseInt(value),
//       },
//     })
//   }}
//   label="Weight"
// />
// <Slider
//   label="Kerning"
//   min="-300"
//   max="1200"
//   step="10"
//   value={
//     +(
//       theme.letterSpacings[0].substring(
//         0,
//         theme.letterSpacings[0].length - 2,
//       ) * 100
//     )
//   }
//   onChange={(value) => {
//     const x = parseInt(value) / 100
//     setTheme({
//       ...theme,
//       letterSpacings: [
//         x + 'px',
//         x + 2 + 'px',
//         x + 4 + 'px',
//         x + 8 + 'px',
//         x + 12 + 'px',
//         x + 30 + 'px',
//         x + 46 + 'px',
//         x + 52 + 'px',
//       ],
//     })
//   }}
// />
// <Slider
//   label="Leading"
//   min="50"
//   max="500"
//   step="10"
//   value={percentToNum(theme.lineHeights[0])}
//   onChange={(value) => {
//     setTheme({
//       ...theme,
//       lineHeights: [value + '%'],
//     })
//   }}
// />

export default Font
