import { useContext } from 'react'
import { ThemeContext } from 'context'
import { Section, ColorPicker, Slider, Presets } from 'app/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Spacing = ({ open = false }) => {
  const { theme, setTheme, setSpacing } = useContext(ThemeContext)

  return (
    <Section name="Spacing" open={open}>
      <Presets type="spacing" />
      <Slider
        label="Base (Y)"
        min={0}
        max={16}
        value={theme.space.base ? theme.space.base.y : undefined}
        onChange={(value) =>
          setTheme((theme) => {
            theme.space.base.y = value
          })
        }
      />
      <Slider
        label="Base (X)"
        min={0}
        max={16}
        value={theme.space.base ? theme.space.base.x : undefined}
        onChange={(value) =>
          setTheme((theme) => {
            theme.space.base.x = value
          })
        }
      />
    </Section>
  )
}
