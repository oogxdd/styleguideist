/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Caption = ({ children = 'Caption', style = {} }) => {
  return (
    <span
      className="d uration-200"
      sx={{
        variant: 'atoms.caption',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
