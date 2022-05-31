import { Button as ThemeUIButton } from 'theme-ui'

export const Button = ({ children = 'Submit', variant = 'atoms.button' }) => (
  <ThemeUIButton
    className="select-none"
    sx={{
      // shadow: 'shadow',
      border: 'inherit',
      variant,
    }}
  >
    {children}
  </ThemeUIButton>
)
