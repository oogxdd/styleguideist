export const Separator = ({ children, first = false }) => (
  <div
    className="flex justify-center items-center text-sm strike whitespace-nowrap"
    style={{ marginTop: first ? 0 : '1.5rem', marginBottom: '1.5rem' }}
  >
    {children}
  </div>
)
