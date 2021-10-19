import { ThemeProvider } from 'theme-ui'
import { createContext, useState, useEffect, useReducer } from 'react'
import { atoms, molecules, organisms, templates } from 'data'
import {
  defaultConfig,
  asos,
  github,
  blablacar,
  twitter,
  superpeer,
  spotify,
  youtube,
  soundcloud,
  vercel,
  upwork,
  producthunt,
} from 'data/presets'

const reducer = (state, action) => {
  switch (action.type) {
    case 'setConfig':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    default:
      throw new Error()
  }
}

const AppContext = createContext()

const redTheme = {
  name: 'red',
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'red',
    background: '#fff',
    primary: '#33e',
  },
}

const blueTheme = {
  name: 'blue',
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace',
  },
  colors: {
    text: 'blue',
    background: '#fff',
    primary: '#33e',
  },
}

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(blueTheme)

  const [state, dispatch] = useReducer(
    reducer,
    (process.browser && window.localStorage.getItem('config')) || defaultConfig,
  )

  // navigation
  const [selectedSection, setSection] = useState('atoms')
  const [selectedComponent, setComponent] = useState('button')
  const [selectedComponentVariant, setComponentVariant] = useState('default')

  // color
  const [color, setColor] = useState('#FFBEBE')

  // font
  const [font, setFont] = useState('inter')
  const [fontSize, setFontSize] = useState('default')
  const [fontWeight, setFontWeight] = useState('normal')
  const [fontLetterSpacing, setFontLetterSpacing] = useState('0')
  const [fontColor, setFontColor] = useState('#000')
  const [uppercase, setUppercase] = useState(false)

  // border
  const [borderRadius, setBorderRadius] = useState(0)
  const [borderWidth, setBorderWidth] = useState('1px')
  const [borderColor, setBorderColor] = useState('#000')

  // shadow
  const [shadow, setShadow] = useState('none')

  // spacing
  const [spacing, setSpacing] = useState('1')

  // presets
  const [preset, setPreset] = useState('default')

  useEffect(() => {
    if (preset === 'default') {
    }

    if (preset === 'asos') {
    }

    if (preset === 'blablacar') {
    }

    if (preset === 'superpeer') {
    }

    if (preset === 'youtube') {
    }

    if (preset === 'soundcloud') {
    }

    if (preset === 'spotify') {
    }

    if (preset === 'upwork') {
    }

    if (preset === 'producthunt') {
    }

    if (preset === 'vercel') {
    }

    if (preset === 'github') {
    }
  }, [preset])

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

  return (
    <AppContext.Provider
      value={{
        // color
        color,
        setColor,

        // navigation
        selectedSection,
        selectedComponent,
        selectedComponentVariant,
        setSection,
        setComponent,
        setComponentVariant,

        // font
        font,
        fontSize,
        fontColor,
        fontWeight,
        fontLetterSpacing,
        uppercase,
        setFont,
        setFontSize,
        setFontColor,
        setFontWeight,
        setFontLetterSpacing,
        setUppercase,

        // border
        borderRadius,
        borderWidth,
        borderColor,
        setBorderRadius,
        setBorderWidth,
        setBorderColor,

        // shadow
        shadow,
        setShadow,

        // spacing
        spacing,
        setSpacing,

        // presets
        preset,
        setPreset,
      }}
    >
      <ThemeProvider theme={theme}>
        {/*
        <button
          onClick={() => setTheme(theme.name === 'blue' ? redTheme : blueTheme)}
        >
          change
        </button>
        */}
        <div className={preset}>{children}</div>
      </ThemeProvider>
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
