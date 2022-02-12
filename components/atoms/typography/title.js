export const Title = ({ children = 'Title' }) => (
  <h3
    className="text-xl font-semibold"
    sx={{
      color: 'text',
      variant: 'atoms.heading',
    }}
  >
    {children}
  </h3>
)
