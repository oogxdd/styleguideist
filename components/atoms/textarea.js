import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Textarea = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <textarea
      id="about"
      name="about"
      rows={3}
      className={`
        shadow-sm
        focus:ring-${color}-500
        focus:border-${color}-500
        block
        text-${spacingToFont[spacing]}
        w-full
        py-${(spacing * 3) / 2}
        border-gray-300
        rounded-${radius}
        `}
      defaultValue={''}
    />
  )
}
