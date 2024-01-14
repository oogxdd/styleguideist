export const Separator = ({
  children,
  first = false,
  className = '',
  style = {},
  ...props
}) => (
  <div
    className={`flex justify-center items-center text-sm strike whitespace-nowrap ${className}`}
    style={{
      marginTop: first ? 0 : '1.5rem',
      marginBottom: '1.5rem',
      borderColor: 'borderColor',
      ...style,
    }}
  >
    {children}
  </div>
)
