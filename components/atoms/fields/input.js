import { Input as ThemeUIInput } from 'theme-ui'

export const Input = ({
  defaultValue = 'Enter text',
  placeholder,
  type = 'text',
}) => (
  <ThemeUIInput defaultValue={placeholder} sx={{ variant: 'atoms.input' }} />
)

export const InputField = ({
  label = 'Input',
  value = '',
  onChange = () => {},
  placeholder = '',
}) => (
  <div className="flex flex-col justify-between">
    <label className="text-sm mb-0.5">{label}</label>
    <input
      className="h-6 w-full rounded flex items-center justify-center text-xs border"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      sx={{
        borderColor: 'borderColor',
        bg: 'background',
        ':focus': {
          borderColor: 'primary',
          color: 'primary',
          // boxShadow:
          //   'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        },
      }}
    />
  </div>
)

export const TextareaField = ({
  label = 'Input',
  value = 'hello',
  onChange = () => {},
  placeholder = '',
}) => (
  <div className="flex flex-col justify-between">
    <label className="text-sm mb-0.5">{label}</label>
    <textarea
      className="w-full rounded flex items-center justify-center text-xs border"
      value={value}
      onChange={(e) => onChange(e)}
      placeholder={placeholder}
      rows="5"
      sx={{
        borderColor: 'borderColor',
        bg: 'background',
        ':focus': {
          borderColor: 'primary',
          color: 'primary',
          // boxShadow:
          //   'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
        },
      }}
    />
  </div>
)
