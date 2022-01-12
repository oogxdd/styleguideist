/** @jsxImportSource theme-ui */

export const Card = ({ children, className = '' }) => (
  <div
    sx={{
      bg: 'card',
      border: 'border',
      borderColor: 'borderColor',
      borderRadius: 1,
      boxShadow: 3,
    }}
    className={`${!children && 'w-52 h-52'} ${className}`}
  >
    {children}
  </div>
)
