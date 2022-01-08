import { ThemeProvider } from 'theme-ui'
import { createContext, useState, useEffect } from 'react'
import { atoms, molecules, organisms, templates } from 'data/components'
import { fonts } from 'data/fonts'
import { greenPurple } from 'data/presets'
import { useImmer } from 'use-immer'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useImmer(greenPurple)
  const [gfont, setGfont] = useState('system-ui')

  // navigation
  const [showNavigation, setShowNavigation] = useState(false)
  const [navigationFilter, setNavigationFilter] = useState('')

  const [selectedSection, setSection] = useState('atoms')
  const [selectedComponent, setComponent] = useState('sign-up-form')
  const [previewComponent, setPreviewComponent] = useState(null)
  const [selectedComponentVariant, setComponentVariant] = useState('default')

  // when changing section, select the first component of the section
  // useEffect(() => {
  //   if (selectedSection === 'atoms') {
  //     setComponent(atoms[0].value)
  //   }
  //   if (selectedSection === 'molecules') {
  //     setComponent(molecules[0].value)
  //   }
  //   if (selectedSection === 'organisms') {
  //     setComponent(organisms[0].value)
  //   }
  //   if (selectedSection === 'templates') {
  //     setComponent(templates[0].value)
  //   }
  // }, [selectedSection])

  // when changing component, set variant to default
  useEffect(() => {
    setComponentVariant('default')
  }, [selectedComponent])

  // when closing navigation - clear navigation filter
  useEffect(() => {
    if (showNavigation === false) {
      setNavigationFilter('')
    }
  }, [showNavigation])

  // set button spacing
  const setSpacing = (type, value) => {
    if (type === 'vertical') {
      setTheme((theme) => ({
        ...theme,
        buttons: {
          ...theme.buttons,
          primary: {
            ...theme.buttons.primary,
            py: value,
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
            px: value,
          },
        },
      }))
    }
  }

  const setColor = (color, value) => {
    setTheme((theme) => ({
      ...theme,
      colors: { ...theme.colors, [color]: value },
    }))
  }

  const setShadow = (index) => {
    setTheme((theme) => ({
      ...theme,
      buttons: {
        ...theme.buttons,
        primary: { ...theme.buttons.primary, boxShadow: index },
      },
    }))
  }

  const setBorder = (index) => {
    setTheme((theme) => ({
      ...theme,
      buttons: {
        ...theme.buttons,
        primary: { ...theme.buttons.primary, borderRadius: index },
      },
    }))
  }

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,

        setColor,
        setSpacing,
        setShadow,
        setBorder,

        // navigation
        showNavigation,
        setShowNavigation,

        navigationFilter,
        setNavigationFilter,

        selectedSection,
        setSection,
        selectedComponent,
        setComponent,
        previewComponent,
        setPreviewComponent,
        selectedComponentVariant,
        setComponentVariant,

        setGfont,
        gfont,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
      <style
        dangerouslySetInnerHTML={{
          __html: `
        * { font-family: '${gfont}' }
`,
        }}
      />
    </AppContext.Provider>
  )
}
// <style
//   dangerouslySetInnerHTML={{
//     __html: `
// * { font-family: '${
//   fonts.find((f) => f.label === theme.fonts.body).label
// }' !important; }
// `,
//   }}
// />

// <style
//   dangerouslySetInnerHTML={{
//     __html: `
//       * { font-family: '${
//         fonts.find((f) => f.label === theme.fonts.body).label
//       }' !important; }
//     `,
//   }}
// />

export { AppProvider, AppContext }
