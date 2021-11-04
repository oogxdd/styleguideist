import { useContext } from 'react'
import { AppContext } from 'context'
import { Disclosure } from '@headlessui/react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/solid'
import { percentToNum, pxToNum } from 'helpers'
import {
  Checkbox,
  ColorPicker as Colorpicker,
  RangeSlider as Slider,
  Presets,
  Select,
  Section,
} from 'app/ui'
import Preview from 'app/preview'

const Page = ({ open }) => {
  const { color: selectedColor, setColor, theme, setTheme } = useContext(
    AppContext,
  )

  const changeColor = (color, value) => {
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [color]: value },
    }))
  }

  const borderRadius = theme.radii.default.substring(
    0,
    theme.radii.default.length - 2,
  )
  const borderWidth = theme.borders.border
    .split(' ')[0]
    .substring(0, theme.borders.border.split(' ')[0].length - 2)

  const setBorderRadius = (value) =>
    setTheme((theme) => ({
      ...theme,
      radii: {
        default: value + 'px',
      },
    }))

  const setBorderWidth = (value) =>
    setTheme((theme) => ({
      ...theme,
      borders: {
        ...theme.borders,
        border: `${value}px solid black`,
      },
    }))

  return (
    <div className="flex h-screen items-center">
      <div className="parameters grid grid-cols-1 gap-x-8 gap-y-10 ml-6 mt-2 min-h-screen">
        <form className="block">
          <Section name="Color" open>
            <Colorpicker
              label="Primary"
              value={theme.colors.primary}
              onChange={(color) => changeColor('primary', color.hex)}
            />
            <Colorpicker
              label="Secondary"
              value={theme.colors.secondary}
              onChange={(color) => changeColor('secondary', color.hex)}
            />
            <Colorpicker
              label="Background"
              value={theme.colors.background}
              onChange={(color) => changeColor('background', color.hex)}
            />
            <Colorpicker
              label="Container"
              value={theme.colors.container}
              onChange={(color) => changeColor('container', color.hex)}
            />
            <Colorpicker
              label="Text 1"
              value={theme.colors.text}
              onChange={(color) => changeColor('text', color.hex)}
            />
            <Colorpicker
              label="Text 2"
              value={theme.colors.muted}
              onChange={(color) => changeColor('muted', color.hex)}
            />
          </Section>
          <Section name="Shadow">
            <Presets type="shadow" />
            <Checkbox label="Custom" />
            <Slider label="X" />
            <Slider label="Y" />
            <Slider label="Radius" />
            <Slider label="Blur" />
            <Colorpicker label="Color" />
          </Section>
          <Section name="Border">
            <Presets type="border" />
            <Checkbox label="Custom" />
            <Slider
              label="Radius"
              value={borderRadius}
              onChange={(e) => setBorderRadius(e.target.value)}
            />
            <Slider
              label="Width"
              value={borderWidth}
              onChange={(e) => setBorderWidth(e.target.value)}
            />
            <Colorpicker
              label="Color"
              color={theme.colors.borderColor}
              onChange={(color) => changeColor('borderColor', color.hex)}
            />
          </Section>
          <Section name="Font">
            <Select />
            <Slider
              label="Size"
              min="6"
              max="64"
              value={theme.fontSizes[0]}
              onChange={(e) => {
                const x = parseInt(e.target.value)
                setTheme({
                  ...theme,
                  fontSizes: [
                    x,
                    x + 2,
                    x + 4,
                    x + 8,
                    x + 12,
                    x + 30,
                    x + 46,
                    x + 52,
                  ],
                })
              }}
            />
            <Slider
              min="100"
              max="900"
              step="100"
              value={theme.fontWeights.bold}
              onChange={(e) => {
                setTheme({
                  ...theme,
                  fontWeights: {
                    ...theme.fontWeights,
                    bold: parseInt(e.target.value),
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
              onChange={(e) => {
                const x = parseInt(e.target.value) / 100
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
              onChange={(e) => {
                setTheme({
                  ...theme,
                  lineHeights: [e.target.value + '%'],
                })
              }}
            />
            <Checkbox label="Uppercase" />
            <Colorpicker label="Color" />
          </Section>
          <Section name="Spacing">
            <Presets type="spacing" />
            <Slider
              label="Vertical"
              min={0}
              max={64}
              value={pxToNum(theme.buttons.primary.py)}
              onChange={(e) => setSpacing('vertical', numToPx(e.target.value))}
            />
            <Slider
              label="Horizontal"
              min={0}
              max={64}
              value={pxToNum(theme.buttons.primary.px)}
              onChange={(e) =>
                setSpacing('horizontal', numToPx(e.target.value))
              }
            />
          </Section>
          <Section name="Presets">
            <Presets type="themes" />
          </Section>
        </form>
      </div>

      <Preview />
    </div>
  )
}

export default Page
