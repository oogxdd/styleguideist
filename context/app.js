import { ThemeProvider } from 'theme-ui'
import { createContext, useState, useEffect, useReducer } from 'react'
import { atoms, molecules, organisms, templates } from 'data'
import { defaultPreset } from 'data/presets'
// import {
//   defaultConfig,
//   asos,
//   github,
//   blablacar,
//   twitter,
//   superpeer,
//   spotify,
//   youtube,
//   soundcloud,
//   vercel,
//   upwork,
//   producthunt,
// } from 'data/presets'

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'setConfig':
//       return { count: state.count + 1 }
//     case 'decrement':
//       return { count: state.count - 1 }
//     default:
//       throw new Error()
//   }
// }

// const [state, dispatch] = useReducer(
//   reducer,
//   (process.browser && window.localStorage.getItem('config')) || defaultConfig,
// )

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultPreset)

  // navigation
  const [selectedSection, setSection] = useState('atoms')
  const [selectedComponent, setComponent] = useState('button')
  const [selectedComponentVariant, setComponentVariant] = useState('default')

  // when changing section, select the first component of the section
  useEffect(() => {
    if (selectedSection === 'atoms') {
      setComponent(atoms[0].value)
    }
    if (selectedSection === 'molecules') {
      setComponent(molecules[0].value)
    }
    if (selectedSection === 'organisms') {
      setComponent(organisms[0].value)
    }
    if (selectedSection === 'templates') {
      setComponent(templates[0].value)
    }
  }, [selectedSection])

  // when changing component, set variant to default
  useEffect(() => {
    setComponentVariant('default')
  }, [selectedComponent])

  // set button spacing
  const setSpacing = (type, value) => {
    if (type === 'vertical') {
      setTheme((theme) => ({
        ...theme,
        buttons: {
          ...theme.buttons,
          primary: {
            ...theme.buttons.primary,
            paddingBlock: value,
          },
        },
      }))
    }
    if (type === 'horizontal') {
      setTheme((theme) => ({
        ...theme,
        buttons: {
          ...theme.buttons,
          primary: {
            ...theme.buttons.primary,
            paddingInline: value,
          },
        },
      }))
    }
  }

  // set button shadow
  const setShadow = (index) => {
    setTheme((theme) => ({
      ...theme,
      buttons: {
        ...theme.buttons,
        primary: { ...theme.buttons.primary, boxShadow: index },
      },
    }))
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,

        // setColor,
        setSpacing,
        setShadow,
        // setRadius,
        // setPreset,
        // setFont,
        // setLetterSpacing,
        // setUppercase,

        // navigation
        selectedSection,
        selectedComponent,
        selectedComponentVariant,
        setSection,
        setComponent,
        setComponentVariant,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </AppContext.Provider>
  )
}
// <style
//   dangerouslySetInnerHTML={{
//     __html: `
// * { font-family: '${fonts.find((f) => f.value === font).label}' !important; }
// `,
//   }}
// />

export { AppProvider, AppContext }
