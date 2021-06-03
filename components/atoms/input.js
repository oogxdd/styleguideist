import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Input = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div>
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className={`
          shadow-sm
          focus:ring-${color}-500
          focus:border-${color}-500
          block
          w-full
          text-${spacingToFont[spacing]}
          px-${spacing * 3}
          py-${(spacing * 2) / 2}
          border-gray-300
          rounded-${radius}
          `}
        placeholder="you@example.com"
      />
    </div>
  )
}
