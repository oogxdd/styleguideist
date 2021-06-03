import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Select = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div className="sm:col-span-3">
      <label
      htmlFor="country"
      className={`
        block
        font-${spacing === '3' || spacing === '0.5' ? 'bold' : 'bold'}
        text-${spacingToFont[spacing]}
        text-gray-700
        `}>
        Country / Region
      </label>
      <div className="mt-1">
        <select
          id="country"
          name="country"
          autoComplete="country"
          className={`
            shadow-sm
            focus:ring-${color}-500
            focus:border-${color}-500
            block
            w-full
            text-${spacingToFont[spacing]}
            py-${(spacing * 2) / 2}
            border-gray-300
            rounded-${radius}
            `}
        >
          <option>United States</option>
          <option>Canada</option>
          <option>Mexico</option>
        </select>
      </div>
    </div>
  )
}
