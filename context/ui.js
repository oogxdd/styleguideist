import { createContext, useState, useEffect, useContext } from 'react'
import { AppContext } from 'context'
import { useImmer } from 'use-immer'
import { useRouter } from 'next/router'
import * as components from 'data/components'

const UIContext = createContext()

const UIProvider = ({ children }) => {
  const router = useRouter()
  const { fs } = router.query

  const [showExportModal, setShowExportModal] = useState(false)
  const [device, setDevice] = useState('desktop')

  // console.log(fs)
  // console.log(fs === 'true')

  useEffect(() => {
    if (fs === 'true') setFullscreen(true)
  }, [fs])

  const { selectedSubComponent, selectedComponent } = useContext(AppContext)

  const [fullscreen, setFullscreen] = useState(false)
  const [paramsType, setParamsType] = useState('global') // global || local
  const [showNavigation, setShowNavigation] = useState(false)
  const [navigationFilter, setNavigationFilter] = useState('')

  // when closing navigation -> clear navigation filter
  useEffect(() => {
    if (showNavigation === false) {
      setNavigationFilter('')
    }
  }, [showNavigation])

  // when subcomponent is selected -> change param type to local
  useEffect(() => {
    if (selectedSubComponent.value !== selectedComponent.value) {
      setParamsType('local')
    } else {
      setParamsType('global')
    }
  }, [selectedSubComponent, selectedComponent])

  // on enter -> enter fullscreen mode
  useEffect(() => {
    const onEnter = (e) => {
      if (e.key === 'Enter') {
        setFullscreen(!fullscreen)
      }
    }

    window.addEventListener('keyup', onEnter)
    return () => window.removeEventListener('keyup', onEnter)
  }, [fullscreen])

  // on escape -> open navigation menu
  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        setFullscreen(!fullscreen)
      }
    }

    window.addEventListener('keyup', onEscape)
    return () => window.removeEventListener('keyup', onEscape)
  }, [fullscreen])

  return (
    <UIContext.Provider
      value={{
        fullscreen,
        setFullscreen,

        paramsType,
        setParamsType,

        showNavigation,
        navigationFilter,

        setShowNavigation,
        setNavigationFilter,

        showExportModal,
        setShowExportModal,

        device,
        setDevice,
      }}
    >
      {children}
    </UIContext.Provider>
  )
}

export { UIProvider, UIContext }
