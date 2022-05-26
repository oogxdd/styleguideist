import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Image = ({
  src = 'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  alt = '',
  style = {},
  className = '',
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <img
      className={`h-48 w-full object-cover duration-200 ${className}`}
      src={src}
      alt=""
      sx={{
        ...style,
        variant: theme.atoms.image ? 'atoms.image' : null,
      }}
    />
  )
}
