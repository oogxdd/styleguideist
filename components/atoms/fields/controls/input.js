import { Input as ThemeUIInput } from 'theme-ui'

export const Input = ({
  defaultValue = 'Enter text',
  placeholder,
  type = 'text',
  style = {},
}) => (
  <ThemeUIInput
    defaultValue={placeholder}
    sx={{
      variant: 'atoms.input',
      ...style,
    }}
  />
)
