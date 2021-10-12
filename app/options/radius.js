import { useContext } from 'react'
import { AppContext } from 'context'

const radiusOptions = ['none', 'sm', '', 'md', 'lg', 'xl', '2xl', '3xl', 'full']

const Radius = () => {
  const { radius, setRadius } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      <input
        type="range"
        min="0"
        max="8"
        value={radiusOptions.findIndex((r) => r === radius)}
        onChange={(e) => {
          setRadius(radiusOptions[e.target.value])
        }}
      />
    </div>
  )
}

export default Radius
