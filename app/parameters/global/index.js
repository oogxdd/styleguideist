import { useContext } from 'react'
import { AppContext } from 'context'

import { shadowToObj, shadowToStr } from 'helpers'

import { Font } from './font'
import { Color } from '../color'
import { Border } from './border'
import { Spacing } from './spacing'
// import { Shadow } from './shadow'
import { Presets } from './presets'

const GlobalParameters = ({ open = false }) => {
  const { theme, setColor: setColorContext } = useContext(AppContext)

  const borderRadius = theme.radii[2].substring(0, theme.radii[2].length - 2)
  const borderWidth = theme.borders.border
    .split(' ')[0]
    .substring(0, theme.borders.border.split(' ')[0].length - 2)

  const setBorderRadius = (value) => {
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

  const shadows =
    typeof theme.buttons.primary.boxShadow !== 'number'
      ? shadowToObj(theme.buttons.primary.boxShadow)
      : shadowToObj(theme.shadows[theme.buttons.primary.boxShadow])

  const setColor = (key, color) => {
    setColor(
      'primary',
      `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${
        color.hsl.a
      })`,
    )
  }

  return (
    <>
      <Color
        open
        fields={[
          {
            type: 'colorpicker',
            label: 'Primary',
            key: 'primary',
            value: theme.colors.primary,
            onChange: (color) => setColor('primary', color),
          },
          {
            type: 'colorpicker',
            label: 'Secondary',
            key: 'secondary',
            value: theme.colors.secondary,
            onChange: (color) => setColor('secondary', color),
          },
          {
            type: 'separator',
            label: 'Containers',
          },
          {
            type: 'colorpicker',
            label: 'Background',
            key: 'background',
            value: theme.colors.background,
            onChange: (color) => setColor('background', color),
          },
          {
            type: 'colorpicker',
            label: 'Card',
            key: 'card',
            value: theme.colors.card,
            onChange: (color) => setColor('card', color),
          },
          {
            type: 'colorpicker',
            label: 'Border',
            key: 'border',
            value: theme.colors.border,
            onChange: (color) => setColor('border', color),
          },
          {
            type: 'separator',
            label: 'Text',
          },
          {
            type: 'colorpicker',
            label: 'Text 1',
            key: 'text',
            value: theme.colors.text,
            onChange: (color) => setColor('text', color),
          },
          {
            type: 'colorpicker',
            label: 'Text 2',
            key: 'text2',
            value: theme.colors.text2,
            onChange: (color) => setColor('text2', color),
          },
        ]}
      />
      <Font fields={[]} />
      <Border
        fields={[
          {
            type: 'slider',
            label: 'Radius',
            key: 'borderRadius',
            value: borderRadius,
            onChange: (value) => setBorderRadius(value),
          },
          {
            type: 'slider',
            label: 'Width',
            key: 'borderWidth',
            value: borderWidth,
            onChange: (value) => setBorderWidth(value),
          },
        ]}
      />
      <Spacing fields={[]} />
      {/* <Shadow /> */}
      {/* <Presets open /> */}
    </>
  )
}

const Separator = () => (
  <div
    className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5"
    style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
  >
    Shadow {index + 1}
  </div>
)

export default GlobalParameters
