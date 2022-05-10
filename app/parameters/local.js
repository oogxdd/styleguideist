import { useContext, Fragment } from 'react'
import { AppContext, ThemeContext } from 'context'

import { Color } from './local/color'
import { Font } from './local/font'
import { Border } from './local/border'
import { Spacing } from './local/spacing'

import { InputField, TextareaField } from 'components/atoms'

import { XIcon } from '@heroicons/react/solid'

import {
  Section,
  ColorPicker,
  Slider,
  Presets,
  Separator,
} from 'app/parameters/ui'
import { shadowToObj, shadowToStr } from 'helpers'
// import { Shadow } from './local/shadow'

const LocalParameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { selectedComponent, selectedSubComponent } = useContext(AppContext)

  return (
    <>
      {selectedSubComponent.params &&
        selectedSubComponent.params.map((param) => {
          if (param.type === 'props') {
            const group = selectedSubComponent.group
            const component = selectedSubComponent.value

            return (
              <Section name="Props" open={false}>
                {param.fields.map((field) => {
                  if (field.type === 'input') {
                    return (
                      <InputField
                        // placeholder={field.label}
                        value={
                          theme[group][component]['props']
                            ? theme[group][component]['props'][field.key]
                            : ''
                        }
                        label={field.label}
                        onChange={(e) => {
                          setTheme((theme) => {
                            theme[group][component]['props'][field.key] =
                              e.target.value
                          })
                        }}
                      />
                    )
                  }
                  if (field.type === 'textarea') {
                    return (
                      <TextareaField
                        // placeholder={field.label}
                        value={
                          theme[group][component]['props']
                            ? theme[group][component]['props'][field.key]
                            : ''
                        }
                        label={field.label}
                        onChange={(e) => {
                          setTheme((theme) => {
                            theme[group][component]['props'][field.key] =
                              e.target.value
                          })
                        }}
                      />
                    )
                  }
                })}
              </Section>
              // <div className="flex flex-col">
              // </div>
            )
          }

          const label = param.type[0].toUpperCase() + param.type.substring(1)

          if (param.type === 'color') {
            return (
              <Color
                open={false}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value

                  const variant = selectedSubComponent.variant
                  // theme[variant.split('.')[0]][variant.split('.')[1]][
                  //   variant.split('.')[2]
                  // ][field.key]

                  return {
                    ...field,
                    value: variant
                      ? theme[variant.split('.')[0]][variant.split('.')[1]][
                          variant.split('.')[2]
                        ][field.key]
                      : theme[group][component][field.key],
                    onChange: variant
                      ? (color) => {
                          setTheme((theme) => {
                            theme[variant.split('.')[0]][variant.split('.')[1]][
                              variant.split('.')[2]
                            ][field.key] = `hsla(${color.hsl.h}, ${
                              color.hsl.s * 100
                            }%, ${color.hsl.l * 100}%, ${color.hsl.a})`
                          })
                        }
                      : (color) => {
                          setTheme((theme) => {
                            theme[group][component][field.key] = `hsla(${
                              color.hsl.h
                            }, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${
                              color.hsl.a
                            })`
                          })
                        },
                  }
                })}
              />
            )
          }

          if (param.type === 'shadow') {
            const group = selectedSubComponent.group
            const component = selectedSubComponent.value

            const variant = selectedSubComponent.variant
            // theme[variant.split('.')[0]][variant.split('.')[1]][
            //   variant.split('.')[2]
            // ][field.key]

            let shadows
            let value
            let onChange

            if (variant) {
              shadows = shadowToObj(
                theme[variant.split('.')[0]][variant.split('.')[1]][
                  variant.split('.')[2]
                ][param.field] || '0 0 0 rgb(0 0 0 / 12%), 0 0 0',
              )

              onChange = (obj) =>
                setTheme((theme) => {
                  theme[variant.split('.')[0]][variant.split('.')[1]][
                    variant.split('.')[2]
                  ][param.field] = obj
                })
            } else {
              shadows = shadowToObj(
                theme[group][component][param.field] ||
                  '0 0 0 rgb(0 0 0 / 12%), 0 0 0',
              )

              onChange = (obj) =>
                setTheme((theme) => {
                  theme[group][component][param.field] = obj
                })
            }

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
                        console.log('shadows')
                        console.log(shadows)
                        const newShadowObj = [...shadows]
                        console.log(newShadowObj)
                        newShadowObj[index] = {
                          ...newShadowObj[index],
                          offsetX: `${value}px`,
                        }
                        console.log(newShadowObj)
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

                        // {console.log('shadow.color')}
                        // {console.log(shadow.color)}
                        console.log(color)
                        console.log(color.hsla)
                        console.log(color.hsla)
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

          if (param.type === 'font') {
            return (
              <Font
                open={false}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value

                  const variant = selectedSubComponent.variant

                  if (field.type === 'font-picker') {
                    return {
                      ...field,
                      value: theme[group][component][field.key],
                      onChange: (value) => {
                        setTheme((theme) => {
                          theme[group][component][field.key] = value
                        })
                      },
                    }
                  }

                  // theme[group][component][field]
                  // theme.atoms.paragraph.fontSize

                  return {
                    ...field,
                    value: theme[group][component][field.key],
                    onChange: (value) => {
                      if (variant) {
                        setTheme((theme) => {
                          theme[variant.split('.')[0]][variant.split('.')[1]][
                            variant.split('.')[2]
                          ] = +value
                        })
                      } else {
                        setTheme((theme) => {
                          theme[group][component][field.key] = +value
                        })
                      }
                    },
                  }
                })}
              />
            )
          }

          if (param.type === 'border') {
            return (
              <Border
                open={false}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value

                  let onChange
                  const variant = selectedSubComponent.variant
                  console.log('variant')
                  console.log(variant)

                  if (field.type === 'slider') {
                    if (variant) {
                      onChange = (value) => {
                        setTheme((theme) => {
                          theme[variant.split('.')[0]][variant.split('.')[1]][
                            variant.split('.')[2]
                          ][field.key] = +value
                        })
                      }
                    } else {
                      onChange = (value) => {
                        setTheme((theme) => {
                          theme[group][component][field.key] = +value
                        })
                      }
                    }
                  }

                  if (field.type === 'colorpicker') {
                    if (variant) {
                      onChange = (color) => {
                        setTheme((theme) => {
                          theme[variant.split('.')[0]][variant.split('.')[1]][
                            variant.split('.')[2]
                          ][field.key] = `hsla(${color.hsl.h}, ${
                            color.hsl.s * 100
                          }%, ${color.hsl.l * 100}%, ${color.hsl.a})`
                        })
                      }
                    } else {
                      onChange = (color) => {
                        setTheme((theme) => {
                          theme[group][component][field.key] = `hsla(${
                            color.hsl.h
                          }, ${color.hsl.s * 100}%, ${color.hsl.l * 100}%, ${
                            color.hsl.a
                          })`
                        })
                      }
                    }
                  }

                  return {
                    ...field,
                    value: variant
                      ? theme[variant.split('.')[0]][variant.split('.')[1]][
                          variant.split('.')[2]
                        ][field.key]
                      : theme[group][component][field.key],
                    onChange,
                  }
                })}
              />
            )
          }

          if (param.type === 'spacing') {
            const variant = selectedSubComponent.variant

            return (
              <Spacing
                open={false}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value
                  // theme[group][component][field]
                  // theme.atoms.paragraph.fontSize

                  return {
                    ...field,
                    value: variant
                      ? theme[variant.split('.')[0]][variant.split('.')[1]][
                          variant.split('.')[2]
                        ][field.key]
                      : theme[group][component][field.key],

                    onChange: (value) => {
                      if (field.key === 'width') {
                      }

                      if (variant) {
                        setTheme((theme) => {
                          theme[variant.split('.')[0]][variant.split('.')[1]][
                            variant.split('.')[2]
                          ][field.key] = +value
                        })
                      } else {
                        setTheme((theme) => {
                          theme[group][component][field.key] = +value
                        })
                      }
                    },
                    // onChange: (value) => {
                    //   setTheme((theme) => {
                    //     theme[group][component][field.key] = +value
                    //   })
                    // },
                  }
                })}
              />
            )
          }

          if (param.type === 'other') {
            const group = selectedSubComponent.group
            const component = selectedSubComponent.value

            const variant = selectedSubComponent.variant
            // theme[variant.split('.')[0]][variant.split('.')[1]][variant.split('.')[2]][field.key]

            return (
              <Section name="Other" open={false}>
                {param.fields.map((field) => {
                  if (field.key === 'order') {
                    return (
                      <InputField
                        value={
                          theme[selectedComponent.group][
                            selectedComponent.value
                          ][selectedSubComponent.value].order
                        }
                        label={field.label}
                        onChange={(e) => {
                          setTheme((theme) => {
                            theme[selectedComponent.group][
                              selectedComponent.value
                            ][selectedSubComponent.value].order = e.target.value
                          })
                        }}
                      />
                    )
                  }
                  if (field.type === 'input') {
                    return (
                      <InputField
                        // placeholder={field.label}
                        value={
                          variant
                            ? theme[variant.split('.')[0]][
                                variant.split('.')[1]
                              ][variant.split('.')[2]][field.key]
                            : theme[group][component][field.key]
                        }
                        label={field.label}
                        onChange={(e) => {
                          console.log(theme)
                          if (variant) {
                            setTheme((theme) => {
                              theme[variant.split('.')[0]][
                                variant.split('.')[1]
                              ][variant.split('.')[2]][field.key] =
                                e.target.value
                            })
                          } else {
                            setTheme((theme) => {
                              theme[group][component][field.key] =
                                e.target.value
                            })
                          }
                        }}
                      />
                    )
                  }
                  if (field.type === 'textarea') {
                    return (
                      <TextareaField
                        // placeholder={field.label}
                        value={
                          theme[group][component]
                            ? theme[group][component][field.key]
                            : ''
                        }
                        label={field.label}
                        onChange={(e) => {
                          setTheme((theme) => {
                            theme[group][component][field.key] = e.target.value
                          })
                        }}
                      />
                    )
                  }
                })}
              </Section>
              // <div className="flex flex-col">
              // </div>
            )
          }
        })}
    </>
  )
}

// return (
//   <Section name={label} open={false}>
//     {param.fields.map((f) => {
//       const group = selectedSubComponent.group
//       const component = selectedSubComponent.value

//       const value = theme[group][component][field.key]
//       const onChange = (value) => {
//         setTheme((theme) => {
//           theme[group][component][field.key] = +value
//         })
//       }

//       const field = { ...f, value, onChange }

//       if (field.type === 'slider') {
//         return (
//           <Slider
//             label={field.label}
//             min={field.min}
//             max={field.max}
//             step={field.step || 1}
//             value={field.value}
//             onChange={field.onChange}
//           />
//         )
//       }

//       if (field.type === 'colorpicker') {
//         return (
//           <Colorpicker
//             key={field.label}
//             label={field.label}
//             value={field.value}
//             onChange={field.onChange}
//           />
//         )
//       }

//       if (field.type === 'separator') {
//         return (
//           <Separator first={field.first}>{field.label}</Separator>
//         )
//       }

//       if (field.type === 'font-picker') {
//         return (
//           <FontPicker onChange={field.onChange} value={field.value} />
//         )
//       }
//     })}
//   </Section>
// )

export default LocalParameters
