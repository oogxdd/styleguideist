/** @jsxImportSource theme-ui */

export const Card = ({
  children,
  className = '',
  width = '128px',
  height = '128px',
  sx = {},
}) => (
  <div
    sx={{
      bg: 'card',
      border: 'border',
      borderColor: 'borderColor',
      borderRadius: 1,
      boxShadow: 3,
      width,
      height,
      ...sx,
      // variant: 'atoms.card',
      // width: 'atoms.card.width',
      // height: 'atoms.card.height',
    }}
    className={`${!children && 'w-52 h-52'} ${className}`}
  >
    {children}
  </div>
)
