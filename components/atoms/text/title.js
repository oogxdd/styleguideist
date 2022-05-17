import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Title = ({
  children = 'Title',
  variant = 'atoms.heading',
  style = {},
  sxx = {},
  yo,
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <h3
      className="text-xl font-semibold"
      sx={{
        color: 'text',
        fontSize: theme.fontSizes ? theme.fontSizes.base * 1.25 : undefined,
        variant,
        ...style,
      }}
    >
      {children}
    </h3>
  )
}
