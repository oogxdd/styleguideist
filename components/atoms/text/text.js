export const Text = ({ children, variant, style = {}, as, className = '' }) => {
  return (
    <span
      className={className}
      sx={{
        color: 'text',
        variant,
        ...style,
      }}
    >
      {children}
    </span>
  )
}
