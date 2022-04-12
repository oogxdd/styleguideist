import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Title = ({ children = 'Title' }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <h3
      className="text-xl font-semibold"
      sx={{
        color: 'text',
        // variant: null,
        variant: theme.atoms.heading ? 'atoms.heading' : null,
      }}
    >
      {children}
    </h3>
  )
}
