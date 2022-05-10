import { Heading as ThemeUIHeading } from 'theme-ui'

export const Heading = ({ children = 'Heading', sxx = {} }) => (
  <ThemeUIHeading className="text-3xl text-bold cursor-default" sx={{ ...sxx }}>
    {children}
  </ThemeUIHeading>
)
