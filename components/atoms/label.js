import { Label as ThemeUILabel } from 'theme-ui'

export const Label = ({ children = 'Label' }) => (
  <ThemeUILabel className="text-sm inline" style={{ display: 'inline' }}>
    {children}
  </ThemeUILabel>
)
