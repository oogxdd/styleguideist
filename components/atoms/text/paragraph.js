import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Paragraph = ({ children = 'Paragraph', style = {} }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <p
      className="text-base uration-200"
      sx={{
        variant: 'atoms.paragraph',
        ...style,
      }}
    >
      {children}
    </p>
  )
}
