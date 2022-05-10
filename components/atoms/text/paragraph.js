import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Paragraph = ({ children = 'Paragraph', style = {} }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <p
      className="text-base"
      sx={{
        ...style,
        color: 'text2',
        fontSize: theme.fontSizes ? theme.fontSizes.base : undefined,
        variant: theme.atoms.paragraph ? 'atoms.paragraph' : null,
      }}
    >
      {children}
    </p>
  )
}
