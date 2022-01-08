/** @jsxImportSource theme-ui */
import { Heading as ThemeUIHeading } from 'theme-ui'

export const Heading = ({ children = 'Heading' }) => (
  <ThemeUIHeading className="text-3xl text-bold">{children}</ThemeUIHeading>
)
