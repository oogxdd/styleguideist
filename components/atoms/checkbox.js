import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Checkbox = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  const label = props.label || "Check something"

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div className="relative flex items-start">
        <div className="flex items-center h-5">
            <input
            type="checkbox"
            className={`
              form-checkbox
              px-${spacing * 2}
              py-${spacing * 2}
              text-${color}-600
              rounded-${radius}
              focus:ring-${color}-500
              border-gray-300
              `}
            />
          <div className="ml-3 text-sm">
            <label
              htmlFor="label"
              className={`
                font-medium
                text-gray-700
                text-${spacingToFont[spacing]}
                `}>
              {label}
            </label>
          </div>
        </div>
    </div>
  )
}
