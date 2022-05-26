import { useContext } from 'react'
import { ThemeContext } from 'context'

import { shadowToObj, shadowToStr } from 'helpers'

import { Font } from './global/font'
import { Color } from './global/color'
import { Border } from './global/border'
import { Spacing } from './global/spacing'
import { Presets } from './global/presets'
import { Shadow } from './global/shadow'

const GlobalParameters = ({ open = false }) => {
  const {
    theme,
    setColor: setContextColor,
    borderWidth,
    borderRadius,
    setBorderWidth,
    setBorderRadius,
  } = useContext(ThemeContext)

  const setColor = (key, color) => {
    setContextColor(
      key,
      `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${
        color.hsl.a
      })`,
    )
  }

  return (
    <>
      <Color
        open={false}
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
            key: 'borderColor',
            value: theme.colors.borderColor,
            onChange: (color) => setColor('borderColor', color),
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
      <Font fields={[]} open={false} />
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
      <Spacing open={false} fields={[]} />
      <Shadow open={false} />
      <Presets open={false} />
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
