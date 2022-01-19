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
        // width,
        // height,
        ...sx,
        variant: 'atoms.card',
        // variant: 'molecules.blogpost.container',
        // width: 'atoms.card.width',
        // height: 'atoms.card.height',
      }}
      className={`${!children && 'w-52 h-52'} ${className}`}
    >
      {children}
    </div>
  )
}
