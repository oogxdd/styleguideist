import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Label as ThemeUILabel } from 'theme-ui'

export const Label = ({ children = 'Label', href = '' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <a
      href={href}
      className="hover:underline"
      sx={{
        fontWeight: 700,
        fontSize: 15,
        color: 'primary',
        variant: theme.atoms.label ? 'atoms.label' : null,
      }}
    >
      {children}
    </a>
  )
}
