import { Heading as ThemeUIHeading } from 'theme-ui'

export const Heading = ({ children = 'Heading', style = {}, as = 'h1' }) => {
  if (as === 'h2') {
    return (
      <ThemeUIHeading
        className="text-xl text-bold cursor-default uration-200"
        sx={{ variant: 'atoms.heading.h2', ...style }}
        as={as}
      >
        {children}
      </ThemeUIHeading>
    )
  }

  if (as === 'h3') {
    return (
      <ThemeUIHeading
        className="text-lg text-bold cursor-default uration-200"
        sx={{ variant: 'atoms.heading.h3', ...style }}
        as={as}
      >
        {children}
      </ThemeUIHeading>
    )
  }

  if (as === 'h4') {
    return (
      <ThemeUIHeading
        className="text-lg text-bold cursor-default uration-200"
        sx={{ variant: 'atoms.heading.h4', ...style }}
        as={as}
      >
        {children}
      </ThemeUIHeading>
    )
  }

  return (
    <ThemeUIHeading
      className="text-3xl text-bold cursor-default uration-200"
      sx={{ variant: 'atoms.heading.h1', ...style }}
      as={as}
    >
      {children}
    </ThemeUIHeading>
  )
}
