import { useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets } from 'app/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Spacing = ({ open = false }) => {
  const { theme, setTheme, setSpacing } = useContext(AppContext)

  return (
    <Section name="Spacing" open={open}>
      <Presets type="spacing" />
      <Slider
        label="Vertical"
        min={0}
        max={64}
        value={
          typeof theme.buttons.primary.py === 'number'
            ? pxToNum(theme.space[theme.buttons.primary.py])
            : pxToNum(theme.buttons.primary.py)
        }
        onChange={(value) => setSpacing('vertical', numToPx(value))}
      />
      <Slider
        label="Horizontal"
        min={0}
        max={64}
        value={
          typeof theme.buttons.primary.px === 'number'
            ? pxToNum(theme.space[theme.buttons.primary.px])
            : pxToNum(theme.buttons.primary.px)
        }
        onChange={(value) => setSpacing('horizontal', numToPx(value))}
      />
    </Section>
  )
}
