import { useState } from 'react'

export const RangeSlider = ({
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
      <label className="text-sm text-gray-600 w-16">{label}</label>
      <input
        type="range"
        className="-ml-8 "
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e)}
      />
      <input
        className="h-6 w-6 border-gray-300 rounded text-gray-800 flex items-center justify-center text-xs text-center focus:ring-indigo-500 border"
        value={value}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}
