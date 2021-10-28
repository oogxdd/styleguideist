import { useContext } from 'react'
import { AppContext } from 'context'
import { ColorPicker } from 'components/atoms'

const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

const Colors = () => {
  const { color: selectedColor, setColor, theme, setTheme } = useContext(
    AppContext,
  )

  return (
    <div className="flex flex-col pb-5 pt-1 px-4 ">
      <ColorPicker
        label="Primary"
        color={theme.colors.primary}
        onChange={(color) =>
          setTheme((theme) => ({
            ...theme,
            colors: { ...theme.colors, primary: color.hex },
          }))
        }
      />
      <ColorPicker
        label="Secondary"
        color={theme.colors.secondary}
        onChange={(color) =>
          setTheme((theme) => ({
            ...theme,
            colors: { ...theme.colors, secondary: color.hex },
          }))
        }
      />
      <ColorPicker
        label="Background"
        color={theme.colors.background}
        onChange={(color) =>
          setTheme((theme) => ({
            ...theme,
            colors: { ...theme.colors, background: color.hex },
          }))
        }
      />
      <ColorPicker
        label="Text"
        color={theme.colors.text}
        onChange={(color) =>
          setTheme((theme) => ({
            ...theme,
            colors: { ...theme.colors, text: color.hex },
          }))
        }
      />
    </div>
  )
}

const Color = ({ color, active, onClick }) => {
  let colorClassnames = ''
  if (active) {
    colorClassnames = `bg-${color}-500 border-2 border-${color}-700`
  } else {
    colorClassnames = `bg-${color}-300`
  }
  return (
    <div
      className={`w-8 h-8 mr-1 ${colorClassnames} cursor-pointer`}
      onClick={onClick}
    />
  )
}

export default Colors
