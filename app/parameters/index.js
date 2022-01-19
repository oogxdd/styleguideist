/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

import { Font } from './font'
import { Color } from './color'
import { Border } from './border'
import { Spacing } from './spacing'
import { Shadow } from './shadow'
import { Presets } from './presets'

import { FontOne } from './font1'
import { ColorOne } from './color1'
import { BorderOne } from './border1'
import { SpacingOne } from './spacing1'

const Parameters = () => {
  const {
    theme,
    setTheme,
    paramsType,
    setParamsType,
    selectedComponent,
    selectedSubcomponent,
  } = useContext(AppContext)

  // theme[group][component][field]
  // theme.atoms.paragraph.fontSize

  return (
    <div
      className="max-h-screen overflow-hidden"
      style={{
        // width: 'calc(20rem - 6px)',
        // minWidth: 'calc(20rem - 6px)'
        width: 'calc(18rem - 0px)',
        // minWidth: 'calc(16rem - 0px)',
        minWidth: 'calc(18rem - 0px)',
      }}
    >
      <div
        className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
        style={{
          maxHeight: '125vh',
        }}
      >
        <form
          className="block border-r pb-6"
          sx={{
            borderColor: 'borderColor',
            // paddingRight: 30,
            minHeight: '125vh',
          }}
        >
          <div
            className="flex flex-row border-b text-sm"
            sx={{ borderColor: 'borderColor' }}
          >
            <span
              className="w-1/2 flex items-center justify-center py-2 cursor-pointer"
              sx={
                paramsType === 'global'
                  ? {
                      bg: 'text',
                      color: 'background',
                      fontWeight: '500',
                    }
                  : {}
              }
              onClick={() => setParamsType('global')}
            >
              Global
            </span>
            <span
              className="w-1/2 flex items-center justify-center py-2 cursor-pointer"
              sx={
                paramsType === 'local'
                  ? {
                      bg: 'text',
                      color: 'background',
                      fontWeight: '500',
                    }
                  : {}
              }
              onClick={() => setParamsType('local')}
            >
              {selectedSubcomponent && selectedSubcomponent.label
                ? selectedSubcomponent.label
                : 'Local'}
            </span>
          </div>
          {/*
          <input
            value={theme.atoms.card.width}
            onChange={(e) =>
              setTheme((theme) => {
                console.log(e.target.value)
                theme.atoms.card.width = +e.target.value
              })
            }
          />
          */}
          {paramsType === 'local' ? (
            <>
              {/*
              <input
                value={theme.atoms.heading.fontSize}
                onChange={(e) =>
                  setTheme((theme) => {
                    theme.atoms.heading.fontSize = +e.target.value
                  })
                }
                type="number"
              />
              */}
              {/*
              <FontOne fields={paragraphFields} open />
              */}

              {selectedSubcomponent.params &&
                selectedSubcomponent.params.map((param) => {
                  if (param.type === 'color') {
                    return (
                      <ColorOne
                        open={true}
                        fields={param.fields.map((field) => {
                          const group = selectedSubcomponent.group
                          const component = selectedSubcomponent.value

                          return {
                            ...field,
                            value: theme[group][component][field.key],
                            onChange: (color) => {
                              setTheme((theme) => {
                                theme[group][component][field.key] = `hsla(${
                                  color.hsl.h
                                }, ${color.hsl.s * 100}%, ${
                                  color.hsl.l * 100
                                }%, ${color.hsl.a})`
                              })
                            },
                          }
                        })}
                      />
                    )
                  }

                  if (param.type === 'font') {
                    return (
                      <FontOne
                        open={true}
                        fields={param.fields.map((field) => {
                          const group = selectedSubcomponent.group
                          const component = selectedSubcomponent.value
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

                  if (param.type === 'border') {
                    return (
                      <BorderOne
                        open={true}
                        fields={param.fields.map((field) => {
                          const group = selectedSubcomponent.group
                          const component = selectedSubcomponent.value

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
                                }, ${color.hsl.s * 100}%, ${
                                  color.hsl.l * 100
                                }%, ${color.hsl.a})`
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
                      <SpacingOne
                        open={true}
                        fields={param.fields.map((field) => {
                          const group = selectedSubcomponent.group
                          const component = selectedSubcomponent.value
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
          ) : (
            <>
              <Color open />
              <Font />
              <Border />
              <Shadow />
              <Spacing />
              <Presets open />
            </>
          )}
        </form>
      </div>
    </div>
  )
}

// const paragraphFields = [
//   {
//     type: 'slider',
//     label: 'Size',
//     min: '6',
//     max: '64',
//     value: theme.atoms.paragraph.fontSize,
//     onChange: (value) => {
//       setTheme((theme) => {
//         theme.atoms.paragraph.fontSize = +value
//       })
//     },
//   },
//   {
//     type: 'slider',
//     label: 'Weight',
//     min: '100',
//     max: '900',
//     step: 100,
//     value: theme.atoms.paragraph.fontWeight,
//     onChange: (value) => {
//       setTheme((theme) => {
//         theme.atoms.paragraph.fontWeight = +value
//       })
//     },
//   },
// ]

export default Parameters
