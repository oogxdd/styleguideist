import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Paragraph = ({ children = 'Paragraph' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <p
      className="mt-3 text-base"
      sx={{
        color: 'text2',
        variant: theme.atoms.paragraph ? 'atoms.paragraph' : null,
      }}
    >
      {children}
    </p>
  )
}
