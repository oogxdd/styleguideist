import { Input as ThemeUIInput } from 'theme-ui'

export const Input = ({
  defaultValue = 'Enter text',
  placeholder,
  type = 'text',
  style = {},
  value = '',
  onChange = () => {},
}) => (
  <ThemeUIInput
    defaultValue={placeholder}
    value={value}
    onChange={onChange}
    sx={{
      variant: 'atoms.input',
      ...style,
    }}
  />
)
