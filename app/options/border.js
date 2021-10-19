import { useContext } from 'react'
import { AppContext } from 'context'
import { SketchPicker } from 'react-color'

const radiusOptions = ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', 'full']

const Radius = () => {
  const {
    borderRadius,
    borderWidth,
    borderColor,
    setBorderRadius,
    setBorderWidth,
    setBorderColor,
  } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      <div>
        <label>Radius</label>
        <input
          type="range"
          min="0"
          max="50"
          value={borderRadius}
          onChange={(e) => {
            setBorderRadius(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Width</label>
        <input
          type="range"
          min="0"
          max="8"
          value={borderWidth}
          onChange={(e) => {
            setBorderWidth(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Color</label>
        <SketchPicker
          color={borderColor}
          onChange={(color) => setBorderColor(color.hex)}
        />
      </div>
    </div>
  )
}

export default Radius
