import { createContext, useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'context'
import { useImmer } from 'use-immer'
// import * as components from 'data/components'
import { atoms, molecules, organisms, templates } from 'data/components'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const comp = 'form'

  const [selectedComponent, setComponent] = useState(
    [...atoms, ...molecules, ...organisms, ...templates].find(
      (m) => m.value === comp,
    ),
  )

  const [selectedSubComponent, setSubComponent] = useState(comp)
  const [selectedComponentVariant, setComponentVariant] = useState(1)

  // when changing component, set subcomponent to this component
  useEffect(() => {
    setSubComponent(selectedComponent)
  }, [selectedComponent])

  // when changing component, set variant to default
  useEffect(() => {
    const preferredLayout =
      theme[selectedComponent.group][selectedComponent.value] &&
      theme[selectedComponent.group][selectedComponent.value].preferredLayout

    if (preferredLayout) {
      setComponentVariant(preferredLayout)
    } else {
      setComponentVariant(1)
    }
  }, [selectedComponent])

  return (
    <AppContext.Provider
      value={{
        selectedComponent,
        selectedSubComponent,
        selectedComponentVariant,

        setSelectedSubComponent: setSubComponent,
        setComponent,
        setComponentVariant,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
