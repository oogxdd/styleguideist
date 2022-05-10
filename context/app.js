import { createContext, useState, useEffect, useContext } from 'react'
import { ThemeContext } from 'context'
import { useImmer } from 'use-immer'
import { atoms, molecules, organisms, templates } from 'data'

const AppContext = createContext()

const AppProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  const [fullscreen, setFullscreen] = useState(false) // local || global

  const [paramsType, setParamsType] = useState('global') // local || global
  const [selectedSection, setSection] = useState('molecules')
  // const [selectedComponent, setComponent] = useState(
  //   atoms.find((m) => m.value === 'button'),
  // )
  const [selectedComponent, setComponent] = useState(
    molecules.find((m) => m.value === 'blogpost'),
  )
  const [selectedSubComponent, setSubComponent] = useState('blogpost')
  const [selectedComponentVariant, setComponentVariant] = useState(1)

  const [showNavigation, setShowNavigation] = useState(false)
  const [navigationFilter, setNavigationFilter] = useState('')

  // when changing component, set subcomponent to this component
  useEffect(() => {
    setSubComponent(selectedComponent)
  }, [selectedComponent])

  // when changing component, set variant to default
  useEffect(() => {
    const preferredLayout =
      theme[selectedComponent.group][selectedComponent.value].preferredLayout

    if (preferredLayout) {
      setComponentVariant(preferredLayout)
    } else {
      setComponentVariant(1)
    }
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

  useEffect(() => {
    const onEnter = (e) => {
      if (e.key === 'Enter') {
        setFullscreen(!fullscreen)
      }
    }

    window.addEventListener('keyup', onEnter)
    return () => window.removeEventListener('keyup', onEnter)
  }, [fullscreen])

  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        setShowNavigation(!showNavigation)
      }
    }

    window.addEventListener('keyup', onEscape)
    return () => window.removeEventListener('keyup', onEscape)
  }, [showNavigation])

  // useEffect(() => {
  //   const onArrowLeft = (e) => {
  //     if (e.key === 'ArrowLeft') {
  //       if (!fullscreen) {
  //         setFullscreen(true)
  //       } else {
  //         // alert('show nav')
  //         setShowNavigation(true)
  //       }
  //     }
  //   }
  //   const onArrowRight = (e) => {
  //     if (e.key === 'ArrowRight') {
  //       if (showNavigation) {
  //         setShowNavigation(false)
  //       } else {
  //         setFullscreen(false)
  //       }
  //     }
  //   }

  //   window.addEventListener('keyup', onArrowLeft)
  //   window.addEventListener('keyup', onArrowRight)
  //   return () => {
  //     window.removeEventListener('keyup', onArrowLeft)
  //     window.removeEventListener('keyup', onArrowRight)
  //   }
  // }, [fullscreen, showNavigation])

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
