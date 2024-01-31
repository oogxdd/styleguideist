import { useState, useEffect } from 'react'
import { useTheme } from 'context'
// import { HexColorPicker } from 'react-colorful'
import { HslaStringColorPicker as HexColorPicker } from 'react-colorful'

import { Cell } from '../cell'
import { Label } from '../index'
// import { Label } from '../label'

import { GRID_WIDTH } from '../index'

const ColorParameters = ({}) => {
  // const [color, setColor] = useState('#aabbcc')
  // return <HexColorPicker color={color} onChange={setColor} />

  const { theme, setColor: setContextColor } = useTheme()
  const [openedPicker, setOpenedPicker] = useState(undefined)

  const setColor = (key, color) => {
    setContextColor(
      key,
      color,
      // `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${color.hsl.a})`,
    )
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      window.ev = event
      console.log(event)
      console.log(openedPicker)
      if (
        openedPicker !== undefined &&
        !event.target.className.includes('Cell') &&
        !event.target.closest('.react-colorful')
      ) {
        setOpenedPicker(undefined)
      }
    }

    if (openedPicker !== 'undefined') {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      if (openedPicker !== 'undefined') {
        document.removeEventListener('click', handleClickOutside)
      }
    }
  }, [openedPicker])

  console.log(theme.colors.primary)

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
    // {
    //   type: 'separator',
    //   label: 'Containers',
    // },
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
    // {
    //   type: 'colorpicker',
    //   label: 'Border',
    //   key: 'borderColor',
    //   value: theme.colors.borderColor,
    //   onChange: (color) => setColor('borderColor', color),
    // },
    {
      type: 'colorpicker',
      label: 'Text 1',
      key: 'text',
      value: theme.colors.text,
      onChange: (color) => setColor('text', color),
    },
    // {
    //   type: 'colorpicker',
    //   label: 'Text 2',
    //   key: 'text2',
    //   value: theme.colors.text2,
    //   onChange: (color) => setColor('text2', color),
    // },
  ]

  return (
    <>
      <Label>Colors</Label>
      <div className="flex mb-2.5">
        {colors.map((color, index) => (
          <>
            <Cell
              className="color-cell"
              onClick={() => setOpenedPicker(index)}
              key={color.label}
              width={(GRID_WIDTH - 5 * 2) / 6}
              // height={(GRID_WIDTH - 5 * 2) / 6}
              onChange={color.onChange}
              style={{
                background: color.value,
                // primary
                // background: 'rgb(91, 91, 214)',
              }}
            ></Cell>
            {openedPicker === index && (
              <div className="absolute z-10 mt-14">
                <HexColorPicker
                  color={color.value}
                  onChange={color.onChange}
                  style={{
                    width: 220,
                    height: 220,

                    boxShadow: '0px 10px 10px 20px #2222256b',
                  }}
                />
              </div>
            )}
          </>
        ))}
      </div>
    </>
  )
}

export default ColorParameters
