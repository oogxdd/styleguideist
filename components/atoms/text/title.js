import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Title = ({ children = 'Title', variant = 'atoms.heading' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <h3
      className="text-xl font-semibold"
      sx={{
        color: 'text',
        fontSize: theme.fontSizes ? theme.fontSizes.base * 1.25 : undefined,
        variant,
      }}
    >
      {children}
    </h3>
  )
}
