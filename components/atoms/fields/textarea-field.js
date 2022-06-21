export const TextareaField = ({
  label = 'Input',
  value = 'hello',
  onChange = () => {},
  placeholder = '',
}) => (
  <div className="flex flex-col justify-between">
    <label className="text-xs mb-0.5">{label}</label>
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
