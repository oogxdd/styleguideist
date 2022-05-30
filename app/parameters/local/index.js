import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'

import ShadowParams from './shadow'

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
  InputField as Input,
  TextareaField as Textarea,
  Checkbox,
} from 'components/atoms'
import {
  Section,
  ColorPicker as Colorpicker,
  Select as FontPicker,
  Slider,
  Separator,
} from 'app/parameters/ui'

// 1. props
// 2. color
// 3. font
// 4. border
// 5. shadow
// 6. spacing
// 7. other

const LocalParameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const {
    selectedComponent: comp,
    selectedSubComponent: sub,
    //
  } = useContext(AppContext)

  return (
    <>
      {sub.params &&
        sub.params.map((param) => {
          let override =
            comp.group !== 'atoms' &&
            theme[comp.group][comp.value][sub.value] &&
            !!theme[comp.group][comp.value][sub.value].override

          if (param.type === 'shadow') {
            return <ShadowParams param={param} key={param.type} />
          }

          // console.log(sub)
          return (
            <Section name={param.name} open={false} key={param.type}>
              {param.fields.map((field) => {
                let value
                let onChange

                if (override) {
                  if (sub.subvalue) {
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
                    // this one is done for atoms.heading.h1

                    console.log('sub.subvalue')
                    console.log(sub.subvalue)
                    console.log(comp)
                    console.log(sub)
                    // console.log(theme[comp.group])
                    console.log(theme[comp.group][comp.value])
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
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
                    // console.log(sub)
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

                // console.log('----')
                // console.log(comp.group)
                // console.log(comp.value)
                // console.log(sub.group)
                // console.log(sub.value)

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
                    <Colorpicker
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

                // 5.
                if (field.type === 'slider') {
                  return (
                    <Slider
                      key={field.label}
                      label={field.label}
                      min={field.min}
                      max={field.max}
                      step={field.step || 1}
                      value={value}
                      onChange={(v) => onChange(+v)}
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
      {comp.group !== 'atoms' && theme[comp.group][comp.value][sub.value] && (
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
            console.log(value)
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
