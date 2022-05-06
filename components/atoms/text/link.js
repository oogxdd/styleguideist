/** @jsxImportSource theme-ui */
import { Link as ThemeUILink } from 'theme-ui'

export const Link = ({ children, href }) => (
  <ThemeUILink href={href} sx={{ color: 'primary' }}>
    {children}
  </ThemeUILink>
)
