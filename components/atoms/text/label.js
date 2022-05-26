import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Label as ThemeUILabel } from 'theme-ui'

export const Label = ({ children = 'Label', href = '', style = {} }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <a
      href={href}
      className="hover:underline uration-200"
      sx={{
        display: 'block',
        ...style,
      }}
    >
      {children}
    </a>
  )
}
