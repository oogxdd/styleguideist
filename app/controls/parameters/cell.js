export const Cell = ({
  children,
  isLast,
  active = false,
  onClick,
  w = 'w-1/5',
}) => (
  <div
    className={`
      p-2
      ${!isLast ? 'border-r' : ''}
      ${active ? 'border-blue-600 border' : ''}
      ${w} flex items-center justify-center cursor-pointer hover:opacity-60
    `}
    onClick={onClick}
  >
    {children}
  </div>
)

export const Row = ({ children, isLast }) => (
  <div className={`flex ${!isLast ? 'border-b' : ''}`}>{children}</div>
)
