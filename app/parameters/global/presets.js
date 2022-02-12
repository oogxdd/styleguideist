import { useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets as PresetPicker } from 'app/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Presets = ({ open = false }) => {
  const { theme, setTheme, setSpacing } = useContext(AppContext)

  return (
    <Section name="Presets" open={open} withoutBottomBorder>
      <PresetPicker type="themes" />
    </Section>
  )
}
