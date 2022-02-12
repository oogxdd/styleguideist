/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

export const Card = ({
  children,
  className = '',
  // width = '100%',
  // height = '100%',
  // width = '128px',
  // height = '128px',
  sx = {},
}) => {
  console.log(sx)
  const { theme, setTheme } = useContext(AppContext)
  return (
    <div
      sx={{
        bg: 'card',
        border: 'border',
        borderColor: 'borderColor',
        borderRadius: 1,
        boxShadow: 3,
        ...sx,
        variant: 'atoms.card',
      }}
      className={`${!children && 'w-52 h-52'} ${className}`}
    >
      {children}
    </div>
  )
}
