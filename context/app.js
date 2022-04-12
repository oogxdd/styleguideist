import { createContext, useState, useEffect } from 'react'
import { useImmer } from 'use-immer'
import { atoms, molecules, organisms, templates } from 'data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const [fullscreen, setFullscreen] = useState(false) // local || global

  const [paramsType, setParamsType] = useState('global') // local || global
  const [selectedSection, setSection] = useState('molecules')
  // const [selectedComponent, setComponent] = useState(
  //   atoms.find((m) => m.value === 'button'),
  // )
  const [selectedComponent, setComponent] = useState(
    molecules.find((m) => m.value === 'blogpost'),
  )
  const [selectedSubComponent, setSubComponent] = useState('button')
  const [selectedComponentVariant, setComponentVariant] = useState('default')

  const [showNavigation, setShowNavigation] = useState(false)
  const [navigationFilter, setNavigationFilter] = useState('')

  // when changing component, set subcomponent to this component
  useEffect(() => {
    setSubComponent(selectedComponent)
  }, [selectedComponent])

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

  useEffect(() => {
    if (selectedSubComponent.value !== selectedComponent.value) {
      setParamsType('local')
    } else {
      setParamsType('global')
    }
  }, [selectedSubComponent, selectedComponent])

  return (
    <AppContext.Provider
      value={{
        selectedSection,
        selectedComponent,
        selectedSubComponent,
        selectedComponentVariant,

        setSection,
        setSelectedSubComponent: setSubComponent,
        setComponent,
        setComponentVariant,

        paramsType,
        setParamsType,

        showNavigation,
        navigationFilter,
        setShowNavigation,
        setNavigationFilter,

        fullscreen,
        setFullscreen,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

// console.log('selectedComponent')
// console.log(selectedComponent)
// console.log('selectedSubComponent')
// console.log(selectedSubComponent)

export { AppProvider, AppContext }
