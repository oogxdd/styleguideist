import { useContext, useState, useEffect, Fragment } from 'react'
import { ThemeContext } from 'context'
import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  Checkbox,
} from 'app/parameters/ui'
import { shadowToObj, shadowToStr } from 'helpers'
import { XIcon } from '@heroicons/react/solid'

export const Shadow = ({ open = false }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [shadowObj, setShadowObj] = useState(shadowToObj(theme.shadows.default))

  useEffect(() => {
    if (shadowObj) {
      setTheme((theme) => {
        // console.log(shadowToStr(shadowObj))
        theme.shadows.default = shadowToStr(shadowObj)
      })
    }
  }, [shadowObj])

  useEffect(() => {
    setShadowObj(shadowToObj(theme.shadows.default))
  }, [theme.shadows.default])

  // const shadow = {}

  const shadows = shadowToObj(theme.shadows.default)
  // console.log(shadows)

  return (
    <Section name="Shadow" open={open}>
      <Presets type="shadow" />
      {shadows.map((shadow, index) => (
        <Fragment key={`${shadow}-${index}`}>
          {index !== 0 && (
            <div
              className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5 relative group cursor-default"
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
                onClick={() => {
                  const newShadowObj = [...shadowObj]
                  newShadowObj.splice(index, 1)
                  setShadowObj(newShadowObj)
                }}
              />
            </div>
          )}
          <Slider
            label="X"
            value={shadow.offsetX}
            onChange={(value) => {
              const newShadowObj = [...shadowObj]
              newShadowObj[index] = {
                ...newShadowObj[index],
                offsetX: `${value}px`,
              }
              setShadowObj(newShadowObj)
            }}
          />
          <Slider
            label="Y"
            value={shadow.offsetY}
            onChange={(value) => {
              const newShadowObj = [...shadowObj]
              newShadowObj[index] = {
                ...newShadowObj[index],
                offsetY: `${value}px`,
              }
              setShadowObj(newShadowObj)
            }}
          />
          <Slider
            label="Spread"
            value={shadow.spreadRadius}
            onChange={(value) => {
              const newShadowObj = [...shadowObj]
              newShadowObj[index] = {
                ...newShadowObj[index],
                spreadRadius: `${value}px`,
              }
              setShadowObj(newShadowObj)
            }}
          />
          <Slider
            label="Blur"
            value={shadow.blurRadius}
            onChange={(value) => {
              const newShadowObj = [...shadowObj]
              newShadowObj[index] = {
                ...newShadowObj[index],
                blurRadius: `${value}px`,
              }
              setShadowObj(newShadowObj)
            }}
          />
          <ColorPicker
            label="Color"
            value={shadow.color}
            onChange={(color) => {
              const newShadowObj = [...shadowObj]
              newShadowObj[index] = {
                ...newShadowObj[index],
                color: color.hex,
              }
              setShadowObj(newShadowObj)
            }}
          />
        </Fragment>
      ))}
      <div
        className="border text-sm flex justify-center align-center rounded py-1 cursor-pointer hover:shadow-md"
        sx={{
          borderColor: 'borderColor',
          color: 'text',
          '&:hover': {
            // color: 'primary',
            borderColor: 'primary',
          },
        }}
        style={{ marginTop: '1rem' }}
        onClick={() => {
          setShadowObj([
            ...shadowObj,
            {
              offsetX: 0,
              offsetY: '6px',
              spreadRadius: '6px',
              blurRadius: '6px',
              color: 'rgba(0,0,0,0.23)',
            },
          ])
        }}
      >
        Add shadow
      </div>
    </Section>
  )
}

const Separator = () => (
  <div
    className="flex justify-center items-center text-sm mt-3 strike whitespace-nowrap mt-5 cursor-default"
    style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}
  >
    Shadow {index + 1}
  </div>
)
