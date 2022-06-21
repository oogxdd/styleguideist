// rename to NavigationContext
import { createContext, useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'context'
import { useImmer } from 'use-immer'
import { atoms, molecules, organisms, pages } from 'data/components'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const comp = 'button'

  const [selectedCategory, setSelectedCategory] = useState('atoms')
  const [selectedComponent, setSelectedComponent] = useState(
    [...atoms, ...molecules, ...organisms, ...pages].find(
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
        selectedCategory,
        selectedComponent,
        selectedSubComponent,
        selectedComponentVariant,

        setSelectedCategory,
        setSelectedSubComponent: setSubComponent,
        setSelectedComponent,
        setComponentVariant,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
