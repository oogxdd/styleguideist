import { useContext } from 'react'
import { ThemeContext } from 'context'
import { Section, ColorPicker, Slider, Presets } from 'app/parameters/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Spacing = ({ open = false }) => {
  const { theme, setTheme, setSpacing } = useContext(ThemeContext)

  return (
    <Section name="Spacing" open={open}>
      <Presets type="spacing" />
      <Slider
        label="Base (X)"
        min={1}
        max={8}
        step="0.01"
        value={theme.space.x[0]}
        onChange={(value) => {
          const x = value

          const sizes = [
            x,
            2 * x,
            4 * x,
            6 * x,
            8 * x,
            10 * x,
            12 * x,
            16 * x,
            24 * x,
            32 * x,
            64 * x,
            128 * x,
            256 * x,
            512 * x,
          ]
          setTheme((theme) => {
            theme.space.x = sizes
          })
        }}
      />
      <Slider
        label="Base (Y)"
        min={1}
        max={8}
        step="0.01"
        value={theme.space.y[0]}
        onChange={(value) => {
          const x = value

          const sizes = [
            x,
            2 * x,
            4 * x,
            6 * x,
            8 * x,
            10 * x,
            12 * x,
            16 * x,
            24 * x,
            32 * x,
            64 * x,
            128 * x,
            256 * x,
            512 * x,
          ]
          setTheme((theme) => {
            theme.space.y = sizes
          })
        }}
      />
    </Section>
  )
}
