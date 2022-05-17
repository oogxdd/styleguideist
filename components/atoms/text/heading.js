import { Heading as ThemeUIHeading } from 'theme-ui'

export const Heading = ({ children = 'Heading', sxx = {}, as = 'h1' }) => {
  if (as === 'h2') {
    return (
      <ThemeUIHeading
        className="text-xl text-bold cursor-default"
        sx={{ ...sxx }}
      >
        {children}
      </ThemeUIHeading>
    )
  }

  if (as === 'h3') {
    return (
      <ThemeUIHeading
        className="text-lg text-bold cursor-default"
        sx={{ ...sxx }}
      >
        {children}
      </ThemeUIHeading>
    )
  }

  return (
    <ThemeUIHeading
      className="text-3xl text-bold cursor-default"
      sx={{ ...sxx }}
    >
      {children}
    </ThemeUIHeading>
  )
}
