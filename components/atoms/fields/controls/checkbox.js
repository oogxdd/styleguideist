import { useContext, useState } from 'react'
import { ThemeContext } from 'context'

export const Checkbox = ({
  label = 'Custom',
  value = false,
  onChange = () => {},
  labelWidth = 'w-16',
  className = '',
  style = {},
  // value: initialValue = false,
}) => {
  const { theme, setTheme } = useContext(ThemeContext)
  // const [value, setValue] = useState(initialValue)
  // const onChange = (value) => {
  //   setValue(value)
  // }

  return (
    <div
      className={`${className} flex items-center justify-between`}
      style={
        label === 'Custom'
          ? {
              // marginBottom: '0.5rem',
              // marginBottom: '0.75rem',
              // marginBottom: '1rem'
              ...style,
            }
          : {
              ...style,
            }
      }
      sx={{
        // 'hsla(82.37288135593238, 0%, 0%, 1)'.split(',').slice(0, -1).join() + ', 0.3)'
        borderColor:
          theme.colors.borderColor.split(',').slice(0, -1).join() + ', 0.3)',
      }}
    >
      <label className={`text-xs ${labelWidth}`} htmlFor="checkbox">
        {label}
      </label>

      <input
        type="checkbox"
        id="checkbox"
        name="checkbox"
        className="opacity-0 absolute h-6 w-8"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <div
        className="border rounded w-6 h-6 flex flex-shrink-0 justify-center items-center focus-within:border-indigo-500"
        onClick={() => onChange(!value)}
        sx={{
          borderColor: 'borderColor',
        }}
      >
        <svg
          className={`${value ? '' : 'hidden'} w-3 h-3 pointer-events-none`}
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
          sx={{ fill: 'primary' }}
        >
          <g fill="none" fillRule="evenodd">
            <g
              transform="translate(-9 -11)"
              fillRule="nonzero"
              sx={{ fill: 'primary' }}
            >
              <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  )
}
