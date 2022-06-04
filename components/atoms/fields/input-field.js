import { Input } from './controls/input'

export const InputField = ({
  label,
  placeholder = 'Placeholder',
  type = 'text',
  hint,
  value,
  onChange = () => {},
  variant = 'atoms',
}) => {
  return (
    <div
      className="mb-4"
      sx={{
        variant: `${variant}.field`,
      }}
    >
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
          sx={{
            variant: variant === 'atoms' ? '' : `${variant}.label`,
          }}
        >
          {label}
        </label>
      )}
      <div className="mt-1 relative">
        <Input
          className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md`}
          placeholder={placeholder}
          type={type}
          value={value}
          onChange={onChange}
          style={{
            variant: `${variant}.input`,
          }}
        />
      </div>
      {hint && (
        <p
          className="mt-2 text-sm text-gray-500"
          id="email-description"
          sx={{
            variant: `${variant}.caption`,
          }}
        >
          {hint}
        </p>
      )}
    </div>
  )
}

// export const InputField = ({
//   label = 'Input',
//   value = '',
//   onChange = () => {},
//   placeholder = '',
//   variant = 'atoms',
// }) => (
//   <div className="flex flex-col justify-between">
//     <label
//       className="text-sm mb-0.5"
//       sx={{
//         variant: `${variant}.label`,
//       }}
//     >
//       {label}
//     </label>
//     <input
//       className="h-6 w-full rounded flex items-center justify-center text-xs border"
//       value={value}
//       onChange={(e) => onChange(e)}
//       placeholder={placeholder}
//       sx={{
//         variant: `${variant}.input`,
//         borderColor: 'borderColor',
//         bg: 'background',
//         ':focus': {
//           borderColor: 'primary',
//           color: 'primary',
//           // boxShadow:
//           //   'var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color)',
//         },
//       }}
//     />
//   </div>
// )
