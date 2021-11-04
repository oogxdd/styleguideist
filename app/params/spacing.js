import { useContext } from 'react'
import { AppContext } from 'context'
import { pxToNum, numToPx } from 'helpers'

const Spacing = () => {
  const { theme, setSpacing } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      <div>
        <label>Vertical</label>
        <input
          type="range"
          min={0}
          max={64}
          value={pxToNum(theme.buttons.primary.py)}
          onChange={(e) => setSpacing('vertical', numToPx(e.target.value))}
        />
      </div>
      <div>
        <label>Horizontal</label>
        <input
          type="range"
          min={0}
          max={64}
          value={pxToNum(theme.buttons.primary.px)}
          onChange={(e) => setSpacing('horizontal', numToPx(e.target.value))}
        />
      </div>
    </div>
  )
}

export default Spacing
