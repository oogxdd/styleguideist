import { createContext, useState, useEffect } from 'react'
import { atoms, molecules, organisms, templates } from 'data'

const NavigationContext = createContext()

const NavigationProvider = ({ children }) => {
  const [showNavigation, setShowNavigation] = useState(false)
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

  return (
    <NavigationContext.Provider
      value={{
        showNavigation,
        selectedSection,
        selectedComponent,
        selectedComponentVariant,
        setShowNavigation,
        setSection,
        setComponent,
        setComponentVariant,
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export { NavigationProvider, NavigationContext }
