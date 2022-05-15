import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Caption = ({ children, sxx = {} }) => {
  return (
    <p className="mt-2 text-sm text-gray-500" sx={{ ...sxx }}>
      {children}
    </p>
  )
}
