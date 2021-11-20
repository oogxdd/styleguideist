import { useContext } from 'react'
import { AppContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets as PresetPicker,
} from 'components/ui'
import { percentToNum, pxToNum, numToPx } from 'helpers'

export const Presets = ({ open = false }) => {
  const { theme, setTheme, setSpacing } = useContext(AppContext)

  return (
    <Section name="Presets" open={open}>
      <PresetPicker type="themes" />
    </Section>
  )
}
