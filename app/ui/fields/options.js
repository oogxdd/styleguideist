/** @jsxImportSource theme-ui */
import { useContext, useState } from 'react'
import { ThemeContext } from 'context'

import { ShadowPresets } from './options/shadow'
import { BorderPresets } from './options/border'
import { SpacingPresets } from './options/spacing'
import { ThemesPresets } from './options/themes'

export const Presets = ({ type }) => {
  const { theme, setTheme, setShadow } = useContext(ThemeContext)
  const [selectedPreset, setPreset] = useState(3)

  if (type === 'shadow') return <ShadowPresets />
  if (type === 'border') return <BorderPresets />
  if (type === 'spacing') return <SpacingPresets />
  if (type === 'themes') return <ThemesPresets />

  return <div />
}
