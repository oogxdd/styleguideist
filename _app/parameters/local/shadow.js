import { useContext, Fragment } from 'react'
import { AppContext, ThemeContext } from 'context'

import { XIcon } from '@heroicons/react/solid'
import { shadowToObj, shadowToStr } from 'helpers'
import { Slider, ColorPicker } from 'components'
import { Section } from 'components/atoms'

const ShadowParams = ({ param }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { selectedComponent: comp, selectedSubComponent: sub } = useContext(
    AppContext,
  )

  const group = sub.group
  const component = sub.value
  const variant = sub.variant

  let override =
    comp.group !== 'atoms' &&
    theme[comp.group][comp.value][sub.value] &&
    !!theme[comp.group][comp.value][sub.value].override

  let shadows
  let value
  let onChange

  if (variant) {
    shadows = shadowToObj(
      theme[variant.split('.')[0]][variant.split('.')[1]][
        variant.split('.')[2]
      ][param.field] || '0 0 0 rgb(0 0 0 / 12%), 0 0 0',
    )

    onChange = (obj) => {
      setTheme((theme) => {
        theme[variant.split('.')[0]][variant.split('.')[1]][
          variant.split('.')[2]
        ][param.field] = obj
      })
    }
  } else {
    shadows = shadowToObj(
      theme[group][component][param.field] || '0 0 0 rgb(0 0 0 / 12%), 0 0 0',
    )

    onChange = (obj) =>
      setTheme((theme) => {
        theme[group][component][param.field] = obj
      })
  }

  console.log(variant)

  return (
    <Section name="Shadow" open={false}>
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
                  const newShadowObj = [...shadows]
                  newShadowObj.splice(index, 1)
                  onChange(shadowToStr(newShadowObj))
                }}
              />
            </div>
          )}
          <Slider
            label="X"
            value={shadow.offsetX}
            onChange={(value) => {
              const newShadowObj = [...shadows]
              newShadowObj[index] = {
                ...newShadowObj[index],
                offsetX: `${value}px`,
              }

              onChange(shadowToStr(newShadowObj))
            }}
          />
          <Slider
            label="Y"
            value={shadow.offsetY}
            onChange={(value) => {
              const newShadowObj = [...shadows]
              newShadowObj[index] = {
                ...newShadowObj[index],
                offsetY: `${value}px`,
              }
              onChange(shadowToStr(newShadowObj))
            }}
          />
          {param.field === 'boxShadow' && (
            <Slider
              label="Spread"
              value={shadow.spreadRadius}
              onChange={(value) => {
                const newShadowObj = [...shadows]
                newShadowObj[index] = {
                  ...newShadowObj[index],
                  spreadRadius: `${value}px`,
                }
                onChange(shadowToStr(newShadowObj))
              }}
            />
          )}
          <Slider
            label="Blur"
            value={shadow.blurRadius}
            onChange={(value) => {
              const newShadowObj = [...shadows]
              newShadowObj[index] = {
                ...newShadowObj[index],
                blurRadius: `${value}px`,
              }
              onChange(shadowToStr(newShadowObj))
            }}
          />
          <ColorPicker
            label="Color"
            value={shadow.color}
            onChange={(color) => {
              const newShadowObj = [...shadows]
              newShadowObj[index] = {
                ...newShadowObj[index],
                color: `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${
                  color.hsl.l * 100
                }%, ${color.hsl.a})`,
              }

              onChange(shadowToStr(newShadowObj))
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
          onChange(
            shadowToStr([
              ...shadows,
              param.field === 'boxShadow'
                ? {
                    offsetX: 0,
                    offsetY: '6px',
                    spreadRadius: '6px',
                    blurRadius: '6px',
                    color: 'rgba(0,0,0,0.23)',
                  }
                : {
                    offsetX: 0,
                    offsetY: '6px',
                    blurRadius: '6px',
                    color: 'rgba(0,0,0,0.23)',
                  },
            ]),
          )
        }}
      >
        Add shadow
      </div>
    </Section>
  )
}

export default ShadowParams
