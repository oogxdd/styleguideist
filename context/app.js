import { createContext, useState, useEffect } from 'react'
import { atoms, molecules, organisms, templates } from 'data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [selectedSection, setSection] = useState('atoms')
  const [selectedComponent, setComponent] = useState('button')
  const [selectedComponentVariant, setComponentVariant] = useState('default')

  const [bg, setBg] = useState('black')
  const [border, setBorder] = useState('1px solid transparent')
  const [letterSpacing, setLetterSpacing] = useState('normal')
  const [uppercase, setUppercase] = useState(false)

  const [preset, setPreset] = useState('default')
  const [color, setColor] = useState('')
  const [spacing, setSpacing] = useState('1')
  const [radius, setRadius] = useState('md')
  const [shadow, setShadow] = useState('none')
  const [font, setFont] = useState('inter')

  useEffect(() => {
    if (preset === 'default') {
      setLetterSpacing('normal')
      setUppercase(false)
      setFont('inter')
      setRadius('md')
    }

    if (preset === 'asos') {
      setLetterSpacing('2px')
      setUppercase(true)
      setFont('futura')
      setRadius('none')
    }

    if (preset === 'blablacar') {
      setLetterSpacing('normal')
      setUppercase(false)
      setFont('eesti')
      setRadius('full')
      // letter-spacing: normal;
      // background: rgb(0, 175, 245);
      // font-size: 16px;
      // /* line-height: 1; */
      // padding: 0px 24px;
      // height: 48px;
    }

    if (preset === 'superpeer') {
      setLetterSpacing('normal')
      setUppercase(false)
      setFont('euclid')
      setRadius('lg')
      // setColor('blue')
    }

    if (preset === 'youtube') {
      // setColor('red')
      setLetterSpacing('0.5px')
      setUppercase(true)
      setFont('roboto')
      setRadius('none')
    }

    if (preset === 'soundcloud') {
      // setColor('soundcloud-orange')
      setLetterSpacing('0.5px')
      setUppercase(false)
      setFont('interstate')
      setRadius('sm')
    }

    if (preset === 'spotify') {
      // setColor('green')
      setLetterSpacing('normal')
      setUppercase(true)
      setFont('spotify')
      setRadius('full')
    }

    if (preset === 'upwork') {
      // setColor('green')
      setLetterSpacing('0.6px')
      setUppercase(false)
      setFont('neue-montreal')
      setRadius('full')
    }

    if (preset === 'producthunt') {
      // setColor('red')
      setFont('system-ui')
      setRadius('md')
    }

    if (preset === 'vercel') {
      setFont('inter')
      setRadius('md')
    }

    if (preset === 'github') {
      // setColor('green')
      setFont('system-ui')
      setRadius('lg')
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
        // properties
        color,
        spacing,
        radius,
        preset,
        font,
        letterSpacing,
        shadow,
        uppercase,

        // methods
        setColor,
        setSpacing,
        setRadius,
        setPreset,
        setFont,
        setLetterSpacing,
        setUppercase,
        setShadow,

        // navigation
        selectedSection,
        selectedComponent,
        selectedComponentVariant,
        setSection,
        setComponent,
        setComponentVariant,
      }}
    >
      <div className={preset}>{children}</div>
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
