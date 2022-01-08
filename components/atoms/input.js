import { Input as ThemeUIInput } from 'theme-ui'

export const Input = ({
  defaultValue = 'Enter text',
  placeholder,
  type = 'text',
}) => <ThemeUIInput defaultValue={placeholder || defaultValue} />
