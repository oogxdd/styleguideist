import { useContext } from 'react'
import { AppContext, ThemeContext } from 'context'

import { Color } from './color'
import { Font } from './font'
import { Border } from './border'
import { Spacing } from './spacing'
import { Shadow } from './shadow'

import GlobalParameters from './global'

// if (local) {
//  <Section
//    name=""
//    fields=""
//  />
// } else {
//  <Section
//    name=""
//    fields=""
//  />
// }

const Parameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const {
    paramsType,
    setParamsType,
    selectedComponent,
    selectedSubComponent,
  } = useContext(AppContext)

  // theme[group][component][field]
  // theme.atoms.paragraph.fontSize

  return (
    <div
      className="max-h-screen overflow-hidden"
      style={{
        width: 'calc(18rem - 0px)',
        minWidth: 'calc(18rem - 0px)',
      }}
    >
      <div
        className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
        style={{ maxHeight: '125vh' }}
      >
        <form
          className="block border-r pb-6"
          sx={{ borderColor: 'borderColor', minHeight: '125vh' }}
        >
          <Tabs
            activeTab={paramsType}
            setTab={setParamsType}
            tabs={[
              'Global',
              selectedSubComponent && selectedSubComponent.label
                ? selectedSubComponent.label
                : 'Local',
            ]}
          />
          {paramsType === 'local' ? (
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

                          console.log(theme)
                          console.log(group)
                          console.log(theme[group])
                          console.log(component)
                          console.log(theme[group][component])
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
                                  theme[variant.split('.')[0]][
                                    variant.split('.')[1]
                                  ][variant.split('.')[2]] = +value
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
          ) : (
            <GlobalParameters />
          )}
        </form>
      </div>
    </div>
  )
}

const Tabs = ({ activeTab, setTab, tabs }) => (
  <div
    className="flex flex-row border-b text-sm"
    sx={{ borderColor: 'borderColor' }}
  >
    <span
      className="w-1/2 flex items-center justify-center py-2 cursor-pointer"
      sx={
        activeTab === 'global'
          ? {
              bg: 'text',
              color: 'background',
              fontWeight: '500',
            }
          : {}
      }
      onClick={() => setTab('global')}
    >
      {tabs[0]}
    </span>
    <span
      className="w-1/2 flex items-center justify-center py-2 cursor-pointer"
      sx={
        activeTab === 'local'
          ? {
              bg: 'text',
              color: 'background',
              fontWeight: '500',
            }
          : {}
      }
      onClick={() => setTab('local')}
    >
      {tabs[1]}
    </span>
  </div>
)

{
  /*
<>
  <Color open />
  <Font />
  <Border />
  <Shadow />
  <Spacing />
  <Presets open />
</>
  */
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
