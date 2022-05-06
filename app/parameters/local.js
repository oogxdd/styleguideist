import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'

import { Color } from './local/color'
import { Font } from './local/font'
import { Border } from './local/border'
import { Spacing } from './local/spacing'
// import { Shadow } from './local/shadow'

const LocalParameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { selectedComponent, selectedSubComponent } = useContext(AppContext)

  console.log(theme)

  return (
    <>
      {selectedSubComponent.params &&
        selectedSubComponent.params.map((param) => {
          if (param.type === 'color') {
            return (
              <Color
                open={true}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value
                  console.log('group')
                  console.log(group)
                  console.log('component')
                  console.log(component)

                  return {
                    ...field,
                    value: theme[group][component][field.key],
                    onChange: (color) => {
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

          if (param.type === 'font') {
            return (
              <Font
                open={true}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value

                  const variant = selectedSubComponent.variant

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
                open={true}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value

                  let onChange

                  if (field.type === 'slider') {
                    onChange = (value) => {
                      setTheme((theme) => {
                        theme[group][component][field.key] = +value
                      })
                    }
                  }

                  if (field.type === 'colorpicker') {
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

                  return {
                    ...field,
                    value: theme[group][component][field.key],
                    onChange,
                  }
                })}
              />
            )
          }

          if (param.type === 'spacing') {
            return (
              <Spacing
                open={true}
                fields={param.fields.map((field) => {
                  const group = selectedSubComponent.group
                  const component = selectedSubComponent.value
                  // theme[group][component][field]
                  // theme.atoms.paragraph.fontSize

                  return {
                    ...field,
                    value: theme[group][component][field.key],
                    onChange: (value) => {
                      setTheme((theme) => {
                        theme[group][component][field.key] = +value
                      })
                    },
                  }
                })}
              />
            )
          }
        })}
    </>
  )
}

export default LocalParameters
