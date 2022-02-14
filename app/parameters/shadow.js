import { useState, useContext } from 'react'
import { ThemeContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Checkbox } from 'app/ui'
import { shadowToObj, shadowToStr } from 'helpers'
import { XIcon } from '@heroicons/react/solid'

export const Shadow = ({ open = false }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [show, setShow] = useState(false)

  // console.log(theme.buttons.primary.boxShadow)
  // console.log(typeof theme.buttons.primary.boxShadow)
  // const shadow = {}
  const shadows =
    typeof theme.buttons.primary.boxShadow !== 'number'
      ? shadowToObj(theme.buttons.primary.boxShadow)
      : shadowToObj(theme.shadows[theme.buttons.primary.boxShadow])

  return (
    <Section name="Shadow" open={open}>
      <Presets type="shadow" />
      {shadows.map((shadow, index) => (
        <>
          {index !== 0 && (
            <div
              className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5 relative group"
              style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
            >
              Shadow {index + 1}
              <XIcon
                className="absolute w-6 h-6 p-1 border rounded right-0 z-10 cursor-pointer  hidden group-hover:block"
                sx={{
                  bg: 'background',
                  borderColor: 'borderColor',
                  color: 'red',
                  ':hover': { borderColor: 'red' },
                }}
                onClick={() => alert('remove shadow')}
              />
            </div>
          )}
          <Slider label="X" value={shadow.offsetX} />
          <Slider label="Y" value={shadow.offsetY} />
          <Slider label="Spread" value={shadow.spreadRadius} />
          <Slider label="Blur" value={shadow.blurRadius} />
          <ColorPicker label="Color" value={shadow.color} />
        </>
      ))}
      <div
        className="border text-sm flex justify-center align-center rounded py-1 cursor-pointer"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
        }}
        style={{ marginTop: '1rem' }}
      >
        Add shadow
      </div>
    </Section>
  )
}

const Separator = () => (
  <div
    className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5"
    style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
  >
    Shadow {index + 1}
  </div>
)
