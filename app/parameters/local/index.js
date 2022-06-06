import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'

import ShadowParams from './shadow'

import { pxToNum } from 'helpers'

// import {
//   Input,
//   Textarea,
//   Fontpicker,
//   Colorpicker,
//   Slider,
//   Checkbox,
//   Separator,
// } from './fields'

import {
  ColorPicker,
  FontPicker,
  Slider,
  Separator,
  Section,
  InputField as Input,
  TextareaField as Textarea,
  Checkbox,
} from 'components/atoms'

// 1. props
// 2. color
// 3. font
// 4. border
// 5. shadow
// 6. spacing
// 7. other

const LocalParameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  let {
    selectedComponent: comp,
    selectedSubComponent: sub,
    //
  } = useContext(AppContext)

  return (
    <>
      {sub.params &&
        sub.params.map((param) => {
          if (sub.variant === 'molecules.feeditem.username') {
            sub.value = 'username'
          }

          if (sub.variant === 'molecules.feeditem.name') {
            sub.value = 'name'
          }

          if (sub.variant === 'molecules.feeditem.date') {
            sub.value = 'date'
          }

          if (sub.variant === 'molecules.feeditem.heading') {
            sub.value = 'heading'
          }

          if (sub.variant === 'molecules.feeditem.card') {
            sub.value = 'card'
          }

          let override = sub.subvalue
            ? comp.group !== 'atoms' &&
              theme[comp.group][comp.value][sub.value][sub.subvalue] &&
              !!theme[comp.group][comp.value][sub.value][sub.subvalue].override
            : comp.group !== 'atoms' &&
              theme[comp.group][comp.value][sub.value] &&
              !!theme[comp.group][comp.value][sub.value].override

          if (param.type === 'shadow') {
            return <ShadowParams param={param} key={param.type} />
          }

          return (
            <Section name={param.name} open={false} key={param.type}>
              {param.fields.map((field) => {
                let value
                let onChange

                if (override) {
                  if (sub.subvalue) {
                    // this one is done for atoms.heading.h1

                    if (sub.parent) {
                      //
                      value =
                        theme[comp.group][comp.value][sub.parent][sub.value][
                          field.key
                        ]
                      onChange = (value) => {
                        setTheme((theme) => {
                          theme[comp.group][comp.value][sub.parent][sub.value][
                            field.key
                          ] = value
                        })
                      }
                    } else {
                      value =
                        theme[comp.group][comp.value][sub.value][field.key]
                      onChange = (value) => {
                        setTheme((theme) => {
                          theme[comp.group][comp.value][sub.value][
                            field.key
                          ] = value
                        })
                      }
                    }
                    // value =
                    //   theme[comp.group][comp.value][sub.value][sub.subvalue][
                    //     field.key
                    //   ]
                    // onChange = (value) => {
                    //   setTheme((theme) => {
                    //     theme[comp.group][comp.value][sub.value][sub.subvalue][
                    //       field.key
                    //     ] = value
                    //   })
                    // }
                  } else {
                    // modify variant parameters
                    value = theme[comp.group][comp.value][sub.value][field.key]
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[comp.group][comp.value][sub.value][
                          field.key
                        ] = value
                      })
                    }
                  }
                } else {
                  // modify subcomponent original parameters
                  if (sub.subvalue) {
                    // this one is done for atoms.heading.h1

                    value = theme[sub.group][sub.value][sub.subvalue][field.key]
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[sub.group][sub.value][sub.subvalue][
                          field.key
                        ] = value
                      })
                    }
                  } else {
                    value = theme[sub.group][sub.value][field.key]
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[sub.group][sub.value][field.key] = value
                      })
                    }
                  }
                }

                if (param.type === 'props') {
                  value = theme[comp.group][comp.value]['props']
                    ? theme[comp.group][comp.value]['props'][field.key]
                    : ''
                  onChange = (value) => {
                    setTheme((theme) => {
                      theme[comp.group][comp.value]['props'][field.key] = value
                    })
                  }
                }

                if (param.type === 'other') {
                  if (sub.parent) {
                    //
                    value =
                      theme[comp.group][comp.value][sub.parent][sub.value][
                        field.key
                      ]
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[comp.group][comp.value][sub.parent][sub.value][
                          field.key
                        ] = value
                      })
                    }
                  } else {
                    value = theme[comp.group][comp.value][sub.value][field.key]
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[comp.group][comp.value][sub.value][
                          field.key
                        ] = value
                      })
                    }
                  }
                }

                // here if we are modifying organisms, but which consists of molecules ->
                // we modify molecules straitght
                if (
                  comp.group === 'organisms' &&
                  comp.value === 'feed' &&
                  sub.value !== 'separator' &&
                  sub.value !== 'container'
                ) {
                  value = theme.molecules.feeditem[sub.value][field.key]
                  onChange = (value) => {
                    setTheme((theme) => {
                      theme.molecules.feeditem[sub.value][field.key] = value
                    })
                  }
                }

                // ___fields___:
                // 1. input
                // 2. textarea
                // 3. fontpicker
                // 4. colorpicker [color]
                // 5. slider [number]
                // 6. checkbox [boolean]
                // 7. separator

                // 1.
                if (field.type === 'input') {
                  return (
                    <Input
                      key={field.label}
                      label={field.label}
                      placeholder={field.label}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  )
                }

                // 2.
                if (field.type === 'textarea') {
                  return (
                    <Textarea
                      key={field.label}
                      label={field.label}
                      placeholder={field.label}
                      value={value}
                      onChange={(e) => onChange(e.target.value)}
                    />
                  )
                }

                // 3.
                if (field.type === 'fontpicker') {
                  return (
                    <FontPicker
                      key={field.label}
                      label={field.label}
                      value={value}
                      onChange={onChange}
                    />
                  )
                }

                // 4.
                if (field.type === 'colorpicker') {
                  return (
                    <ColorPicker
                      key={field.label}
                      label={field.label}
                      value={value}
                      onChange={(color) =>
                        onChange(
                          `hsla(${color.hsl.h}, ${color.hsl.s * 100}%, ${
                            color.hsl.l * 100
                          }%, ${color.hsl.a})`,
                        )
                      }
                    />
                  )
                }

                let convertToPx =
                  field.key === 'borderRadius' ||
                  field.key === 'fontSize' ||
                  field.key === 'letterSpacing'
                // || field.key === 'lineHeight'

                // 5.
                if (field.type === 'slider') {
                  return (
                    <Slider
                      key={field.key}
                      label={field.label}
                      min={field.min}
                      max={field.max}
                      step={field.step || 1}
                      value={convertToPx ? pxToNum(value) : value}
                      onChange={(v) => {
                        if (convertToPx) {
                          onChange(+v + 'px')
                        } else {
                          onChange(+v)
                        }
                      }}
                    />
                  )
                }

                // 6.

                // 7.
                if (field.type === 'separator') {
                  return <Separator key={field.label}>{field.label}</Separator>
                }
              })}
            </Section>
          )
        })}

      {/* OVERRIDE COMPONENT SETTINGS */}
      {comp.group !== 'atoms' &&
        theme[comp.group][comp.value][sub.value] &&
        theme[comp.group][comp.value][sub.value].unique !== true && (
          <Checkbox
            className="py-6 px-6 flex-row-reverse justify-start border-b"
            labelWidth="w-auto"
            style={{ justifyContent: 'flex-end' }}
            label={
              <div
                className="flex space-x-1 select-none"
                style={{ marginLeft: 8 }}
              >
                Override{' '}
                <b
                  className=""
                  style={{
                    marginLeft: 3.5,
                    marginRight: 3.5,
                    // fontWeight: 600,
                    fontWeight: 'normal',
                  }}
                >
                  {sub.label}
                </b>{' '}
                for{' '}
                <b
                  style={{
                    marginLeft: 3.5,
                    marginRight: 3.5,
                    // fontWeight: 600,
                    fontWeight: 'normal',
                  }}
                >
                  {comp.label}
                </b>
              </div>
            }
            value={theme[comp.group][comp.value][sub.value].override}
            onChange={(value) => {
              setTheme((theme) => {
                theme[comp.group][comp.value][sub.value].override =
                  value === 'false'
              })
            }}
          />
        )}
    </>
  )
}

export default LocalParameters
