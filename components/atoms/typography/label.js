import { Label as ThemeUILabel } from 'theme-ui'

export const Label = ({ children = 'Label', href = '' }) => (
  <p
    className="text-sm font-medium"
    sx={{
      color: 'primary',
      variant: 'atoms.label',
    }}
  >
    <a href={href} className="hover:underline">
      {children}
    </a>
  </p>
)
