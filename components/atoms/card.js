import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Card = ({ children, className = '', style = {} }) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      sx={{
        variant: 'atoms.card',
        ...style,
      }}
      className={`${!children && 'w-52 h-52'} ${className}`}
    >
      {children}
    </div>
  )
}
