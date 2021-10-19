// 1) vertical
// 2) horizontal
import { useContext } from 'react'
import { AppContext } from 'context'

const spacingOptions = ['0.5', '1', '2', '3']

const Spacing = () => {
  const { spacing, setSpacing } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      <input
        type="range"
        min="0"
        max="3"
        value={spacingOptions.findIndex((s) => s === spacing)}
        onChange={(e) => {
          setSpacing(spacingOptions[e.target.value])
        }}
      />
    </div>
  )
}

export default Spacing
