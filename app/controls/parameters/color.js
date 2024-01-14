import { useState } from 'react'
import { useTheme } from 'context'

import { Cell, Row } from './cell'
import { ColorPicker } from 'components/atoms'

export const ColorPresets = () => {
  const {
    theme,
    setColor: setContextColor,
    borderWidth,
    borderRadius,
    setBorderWidth,
    setBorderRadius,
  } = useTheme()
  const [selectedPreset, setPreset] = useState(3)

  const setColor = (key, color) => {
    setContextColor(
      key,
      `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${
        color.hsl.a
      })`,
    )
  }

  const colors = [
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
    // {
    //   type: 'colorpicker',
    //   label: 'Text 1',
    //   key: 'text',
    //   value: theme.colors.text,
    //   onChange: (color) => setColor('text', color),
    // },
    // {
    //   type: 'colorpicker',
    //   label: 'Text 2',
    //   key: 'text2',
    //   value: theme.colors.text2,
    //   onChange: (color) => setColor('text2', color),
    // },
  ]

  // return (
  //   <Section name="Color" open={open}>
  //     {fields.map((field) => {
  //       if (field.type === 'colorpicker') {
  //         return (
  //           <ColorPicker
  //             key={field.label}
  //             label={field.label}
  //             value={field.value}
  //             onChange={field.onChange}
  //           />
  //         )
  //       }
  //       if (field.type === 'separator') {
  //         return <Separator key={field.label}>{field.label}</Separator>
  //       }
  //     })}
  //   </Section>
  // )

  return (
    <Row>
      {colors.map((field, index) => {
        // const isSelected = selectedPreset === index + 1

        return (
          <Cell
            key={field.label}
            isLast={index === colors.length - 1}
            onClick={() => {
              // setPreset(index + 1)
              // setBorderRadius(index * 4)
            }}
            // active={isSelected}
          >
            <ColorPicker
              key={field.label}
              // label={field.label}
              value={field.value}
              onChange={field.onChange}
            />
          </Cell>
        )
      })}
    </Row>
  )
}
