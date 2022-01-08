import { useContext } from 'react'
import { AppContext } from 'context'
import { ColorPicker as Colorpicker, Section } from 'app/ui'

export const Color = ({ open = false }) => {
  const { theme, setColor } = useContext(AppContext)

  return (
    <Section name="Color" open={open}>
      <Colorpicker
        label="Primary"
        value={theme.colors.primary}
        onChange={(color) => setColor('primary', color.hex)}
      />
      <Colorpicker
        label="Background"
        value={theme.colors.background}
        onChange={(color) => setColor('background', color.hex)}
      />
      <Colorpicker
        label="Text"
        value={theme.colors.text}
        onChange={(color) => setColor('text', color.hex)}
      />
      <Colorpicker
        label="Border"
        value={theme.colors.borderColor}
        onChange={(color) => setColor('borderColor', color.hex)}
      />
      <div
        className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5"
        style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
      >
        Button
      </div>
      <Colorpicker
        label="Text"
        value={theme.colors.borderColor}
        onChange={(color) => setColor('borderColor', color.hex)}
      />
      <Colorpicker
        label="Border"
        value={theme.colors.borderColor}
        onChange={(color) => setColor('borderColor', color.hex)}
      />
      <Colorpicker
        label="Background"
        value={theme.colors.borderColor}
        onChange={(color) => setColor('borderColor', color.hex)}
      />
    </Section>
  )
}

// {/*
// <Colorpicker
//   label="Text"
//   value={theme.colors.text}
//   onChange={(color) => setColor('buttonText', color.hex)}
// />
// */}
// {/*
// <Colorpicker
//   label="Secondary"
//   value={theme.colors.secondary}
//   onChange={(color) => changeColor('secondary', color.hex)}
// />
// */}
// {/*
// <Colorpicker
//   label="Container"
//   value={theme.colors.container}
//   onChange={(color) => changeColor('container', color.hex)}
// />
// */}
