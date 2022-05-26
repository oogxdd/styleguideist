/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Caption = ({ children, style = {} }) => {
  return (
    <span
      className="uration-200"
      sx={{
        variant: 'atoms.caption',
        ...style,
      }}
    >
      {children}
    </span>
  )
}
