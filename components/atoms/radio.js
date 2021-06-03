import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Radio = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  const label = props.label || "Push something"

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div className="flex items-center">
      <input
        id="push_nothing"
        name="push_notifications"
        type="radio"
        className={`
          focus:ring-${color}-500
          px-${spacing * 2}
          py-${spacing * 2}
          text-${color}-600
          rounded-${radius}
          border-gray-300
          `}
      />
      <label
        htmlFor="push_nothing"
        className={`
          ml-3
          block
          font-${spacing === '3' || spacing === '0.5' ? 'bold' : 'bold'}
          text-${spacingToFont[spacing]}
          text-gray-700
          `}>
        {label}
      </label>
    </div>
  )
}
