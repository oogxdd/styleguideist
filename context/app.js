import { createContext, useState, useEffect } from 'react'
import { atoms, molecules, organisms, templates } from 'data'

const fonts = [
  {
    label: 'Inter',
    value: 'inter',
  },
  {
    label: 'Open Sans',
    value: 'open-sans',
  },
  {
    label: 'Noto Sans JP',
    value: 'noto-sans-jp',
  },
]

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [component, setComponent] = useState('button')
  const [section, setSection] = useState('atoms')

  const [color, setColor] = useState('green')
  const [spacing, setSpacing] = useState('2')
  const [radius, setRadius] = useState('md')
  const [style, setStyle] = useState('default')
  const [font, setFont] = useState('inter')

  useEffect(() => {
    if (section === 'atoms') {
      setComponent(atoms[0].value)
    }
    if (section === 'molecules') {
      setComponent(molecules[0].value)
    }
    if (section === 'organisms') {
      setComponent(organisms[0].value)
    }
    if (section === 'templates') {
      setComponent(templates[0].value)
    }
  }, [section])

  return (
    <AppContext.Provider
      value={{
        color,
        spacing,
        radius,
        style,
        font,
        setColor,
        setSpacing,
        setRadius,
        setStyle,
        setFont,

        selectedComponent: component,
        selectedSection: section,
        setComponent,
        setSection,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// <style
//   dangerouslySetInnerHTML={{
//     __html: `
//   * { font-family: '${
//     fonts.find((f) => f.value === font).label
//   }' !important; }
// `,
//   }}
// />

export { AppProvider, AppContext }
