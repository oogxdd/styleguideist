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
    theme,
    setTheme,
  } = useContext(AppContext)

  console.log(theme)
  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      <div>
        <label>Radius</label>
        <input
          type="range"
          min="0"
          max="100"
          value={
            // theme.radii.default === '100%'
            //   ? 100
            //   : theme.radii.default.substring(0, theme.radii.default.length - 2)
            theme.radii.default.substring(0, theme.radii.default.length - 2)
          }
          onChange={(e) => {
            setTheme((theme) => ({
              ...theme,
              radii: {
                // default: e.target.value == 100 ? '100%' : e.target.value + 'px',
                default: e.target.value + 'px',
              },
            }))
            // setBorderRadius(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Width</label>
        <input
          type="range"
          min="0"
          max="20"
          value={theme.borders.border
            .split(' ')[0]
            .substring(0, theme.borders.border.split(' ')[0].length - 2)}
          onChange={(e) => {
            setTheme((theme) => ({
              ...theme,
              borders: {
                ...theme.borders,
                border: `${e.target.value}px solid black`,
              },
            }))
            // setBorderWidth(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Color</label>
        <SketchPicker
          color={theme.colors.borderColor}
          onChange={(color) =>
            setTheme((theme) => ({
              ...theme,
              colors: {
                ...theme.colors,
                borderColor: color.hex,
              },
            }))
          }
        />
      </div>
    </div>
  )
}

export default Radius
// setBorderColor(color.hex)
