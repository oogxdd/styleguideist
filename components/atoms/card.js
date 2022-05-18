import { useContext } from 'react'
import { ThemeContext } from 'context'

export const Card = ({
  children,
  className = '',
  variant = 'atoms.card',
  sx = {},
}) => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      sx={{
        bg: 'card',
        border: 'border',
        borderColor: 'borderColor',
        boxShadow: 'default',

        width: theme.space.base ? 200 + theme.space.base.x * 50 : '375px',
        height: 'auto',
        paddingBottom: 12,
        // padding: '24px 16px',

        variant,
        ...sx,
      }}
      className={`${!children && 'w-52 h-52'} ${className}`}
    >
      {children}
    </div>
  )
}
