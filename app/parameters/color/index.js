import { useState, useEffect } from 'react'
import { useTheme } from 'context'
// import { HexColorPicker } from 'react-colorful'
import { HslaStringColorPicker as HexColorPicker } from 'react-colorful'

import { Cell } from '../cell'
import { Label } from '../index'
// import { Label } from '../label'

import { GRID_WIDTH } from '../index'

// function reverseColor(color) {
//   // Check if the input is in hex format
//   if (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color)) {
//     // Extract the RGB components
//     let r = parseInt(color.slice(1, 3), 16)
//     let g = parseInt(color.slice(3, 5), 16)
//     let b = parseInt(color.slice(5, 7), 16)

//     // Reverse each RGB component
//     return `#${(255 - r).toString(16).padStart(2, '0')}${(255 - g)
//       .toString(16)
//       .padStart(2, '0')}${(255 - b).toString(16).padStart(2, '0')}`
//   }
//   // Check if the input is in rgb format
//   else if (/^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.test(color)) {
//     // Extract the RGB components
//     let [r, g, b] = color.match(/\d{1,3}/g).map(Number)

//     // Reverse each RGB component
//     return `rgb(${255 - r}, ${255 - g}, ${255 - b})`
//   } else {
//     throw new Error('Invalid color format')
//   }
// }

function reverseColor(color) {
  function getLuminance(r, g, b) {
    const gammaCorrect = (c) =>
      c / 255 <= 0.03928
        ? c / 255 / 12.92
        : Math.pow((c / 255 + 0.055) / 1.055, 2.4)
    const rLinear = gammaCorrect(r)
    const gLinear = gammaCorrect(g)
    const bLinear = gammaCorrect(b)
    return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear
  }

  function parseColorString(colorString) {
    const matchHex = /^#(?:([0-9a-fA-F]{3})|([0-9a-fA-F]{6}))$/
    const matchRgb = /^rgb\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/
    const matchRgba =
      /^rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), ([01](?:\.\d+)?)\)$/
    const matchHsl = /^hsl\((\d+), (\d+)%, (\d+)%\)$/
    const matchHsla = /^hsla\((\d+), (\d+)%, (\d+)%, ([01](?:\.\d+)?)\)$/

    let match
    if ((match = colorString.match(matchHex))) {
      let hex = match[1] || match[2]
      return hex.match(/.{1,2}/g).map((c) => parseInt(c, 16))
    } else if ((match = colorString.match(matchRgb))) {
      return match.slice(1, 4).map(Number)
    } else if ((match = colorString.match(matchRgba))) {
      return match.slice(1, 5).map(Number)
    } else if ((match = colorString.match(matchHsl))) {
      let [, h, s, l] = match.map(Number)
      return hslToRgb(h, s, l)
    } else if ((match = colorString.match(matchHsla))) {
      let [, h, s, l, a] = match.map(Number)
      let [r, g, b] = hslToRgb(h, s, l)
      return [r, g, b, a]
    } else {
      throw new Error('Invalid color format')
    }
  }

  function hslToRgb(h, s, l) {
    h /= 360
    s /= 100
    l /= 100

    let r, g, b

    if (s === 0) {
      r = g = b = l
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1
        if (t > 1) t -= 1
        if (t < 1 / 6) return p + (q - p) * 6 * t
        if (t < 1 / 2) return q
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
        return p
      }

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s
      const p = 2 * l - q

      r = hue2rgb(p, q, h + 1 / 3)
      g = hue2rgb(p, q, h)
      b = hue2rgb(p, q, h - 1 / 3)
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)]
  }

  let [r, g, b, a] = parseColorString(color)
  let luminance = getLuminance(r, g, b)

  // Use white or black based on luminance
  let contrastingColor =
    luminance > 0.5 ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'

  return a !== undefined
    ? contrastingColor.replace(/1\)$/, `${a})`)
    : contrastingColor
}

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
      console.log(event.target)
      console.log(openedPicker)
      if (
        openedPicker !== undefined &&
        !event.target.className.includes('color-cell') &&
        !event.target.className.includes('color-abrv') &&
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
      abrv: 'PR',
      key: 'primary',
      value: theme.colors.primary,
      onChange: (color) => setColor('primary', color),
    },
    {
      type: 'colorpicker',
      abrv: 'SC',
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
      abrv: 'BG',
      label: 'Background',
      key: 'background',
      value: theme.colors.background,
      onChange: (color) => setColor('background', color),
    },
    {
      type: 'colorpicker',
      abrv: 'CRD',
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
      abrv: 'TXT',
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
        {console.log(colors)}
        {colors.map((color, index) => (
          <>
            <Cell
              className="color-cell"
              onClick={() =>
                setOpenedPicker(openedPicker === index ? undefined : index)
              }
              key={color.label}
              width={(GRID_WIDTH - 5 * 2) / 6}
              // height={(GRID_WIDTH - 5 * 2) / 6}
              onChange={color.onChange}
              sx={{
                background: color.value,

                ...(color.key === 'background' && {
                  borderColor: 'borderColor',
                }),
                ...(color.key === 'card' && {
                  borderColor: 'borderColor',
                }),
                // primary
                // background: 'rgb(91, 91, 214)',
              }}
            >
              <span
                className="color-abrv select-none"
                style={{ color: reverseColor(color.value) }}
              >
                {color.abrv}
              </span>
              {/*
               */}
            </Cell>
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
