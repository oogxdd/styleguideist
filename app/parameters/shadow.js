/** @jsxImportSource theme-ui */
import { useState, useContext } from 'react'
import { AppContext } from 'context'
import { Section, ColorPicker, Slider, Presets, Checkbox } from 'app/ui'
import { shadowToObj, shadowToStr } from 'helpers'

export const Shadow = ({ open = false }) => {
  const { theme, setTheme } = useContext(AppContext)
  const [show, setShow] = useState(false)

  // console.log(theme.buttons.primary.boxShadow)
  // console.log(typeof theme.buttons.primary.boxShadow)
  // const shadow = {}
  const shadows =
    typeof theme.buttons.primary.boxShadow !== 'number'
      ? shadowToObj(theme.buttons.primary.boxShadow)
      : shadowToObj(theme.shadows[theme.buttons.primary.boxShadow])
  console.log(shadows)
  console.log(theme.shadows[theme.buttons.primary.boxShadow])

  return (
    <Section name="Shadow" open={open}>
      <Presets type="shadow" />
      <Checkbox
        label="Custom"
        value={show}
        onChange={(e) => {
          // setTheme((theme) => {
          //   theme.buttons.primary.boxShadow = '0 0 2px black'
          // })
          setShow(!show)
        }}
      />
      {show && (
        <>
          {shadows.map((shadow, index) => (
            <>
              {index !== 0 && (
                <div
                  className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5"
                  style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
                >
                  Shadow {index + 1}
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
          {/*
          <div
            className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5"
            style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
            sx={{ color: 'primary' }}
          >
            Shadow 2
          </div>
          <Slider label="X" />
          <Slider label="Y" />
          <Slider label="Radius" />
          <Slider label="Blur" />
          <ColorPicker label="Color" />
          */}
        </>
      )}
    </Section>
  )
}
