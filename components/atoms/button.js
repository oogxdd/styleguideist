import { Button as ThemeUIButton } from 'theme-ui'

export const Button = ({ children = 'Submit' }) => (
  <ThemeUIButton>{children}</ThemeUIButton>
)
