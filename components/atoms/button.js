import { Button as ThemeUIButton } from 'theme-ui'

export const Button = ({ children = 'Submit' }) => (
  <ThemeUIButton
    className="select-none"
    sx={{
      // shadow: 'shadow',
      border: 'inherit',
      variant: 'atoms.button',
    }}
  >
    {children}
  </ThemeUIButton>
)
