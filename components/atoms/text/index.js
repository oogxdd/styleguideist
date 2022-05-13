export const Text = ({ children, variant, sx = {}, as, className = '' }) => {
  if (as === 'h2') {
    return (
      <h2
        className={className}
        sx={{
          color: 'text',
          variant,
          ...sx,
        }}
      >
        {children}
      </h2>
    )
  }

  if (as === 'p') {
    return (
      <p
        className={className}
        sx={{
          color: 'text',
          variant,
          ...sx,
        }}
      >
        {children}
      </p>
    )
  }

  return (
    <span
      className={className}
      sx={{
        color: 'text',
        variant,
        ...sx,
      }}
    >
      {children}
    </span>
  )
}
