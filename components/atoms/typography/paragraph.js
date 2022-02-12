export const Paragraph = ({ children = 'Paragraph' }) => (
  <p
    className="mt-3 text-base"
    sx={{
      color: 'text2',
      variant: 'atoms.paragraph',
    }}
  >
    {children}
  </p>
)
