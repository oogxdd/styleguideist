/** @jsxImportSource theme-ui */
import { useState } from 'react'

export const Slider = ({
  label = 'Range',
  min = 0,
  max = 100,
  step = 1,
  value = 50,
  onChange = () => {},
}) => {
  // const [value, setValue] = useState(initialValue)
  // const onChange = (value) => {
  //   setValue(value)
  // }

  return (
    <div className="flex items-center justify-between">
      <label className="text-xs w-16">{label}</label>
      <input
        type="range"
        className="-ml-6 "
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          '::-webkit-slider-thumb': {
            color: 'red',
            background: 'red',
          },
          '::-moz-range-thum': {
            color: 'red',
            background: 'red',
          },
        }}
      />
      <input
        className="h-5 w-5 rounded flex items-center justify-center text-xs text-center border"
        style={{
          fontSize: 10.5,
        }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowDown' && value != 0) {
            onChange(+value - 1)
          }
          if (e.key === 'ArrowUp' && value != 100) {
            onChange(+value + 1)
          }
        }}
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
}
