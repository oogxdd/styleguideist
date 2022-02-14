/** @jsxImportSource theme-ui */
import { useContext, useEffect, useCallback, useRef } from 'react'
import { AppContext } from 'context'

import Header from './header'
import Section from './section'

import MenuIcon from './icons/menu.svg'

import { atoms, molecules, organisms, templates } from 'data'

const Navigation = () => {
  const {
    showNavigation,
    setShowNavigation,
    navigationFilter,
    setNavigationFilter,
  } = useContext(AppContext)

  // https://stackoverflow.com/questions/56954641/how-to-use-state-variable-usestate-in-an-eventhandler
  const navFilter = useRef() // will be same object each render
  navFilter.current = navigationFilter // assign new num value each render

  // later: build hook https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
  useEffect(() => {
    const onEscape = (e) => {
      if (e.key === 'Escape') {
        if (navFilter.current !== '') {
          setNavigationFilter('')
        } else {
          setShowNavigation((prev) => !prev)
        }
      }
    }

    window.addEventListener('keyup', onEscape)
    return () => window.removeEventListener('keyup', onEscape)
  }, [])

  if (!showNavigation) {
    return <Collapsed />
  }

  return <Expanded />
}

const Collapsed = () => {
  const { showNavigation, setShowNavigation, navigationFilter } = useContext(
    AppContext,
  )

  return (
    <MenuIcon
      className="w-6 h-6 fixed top-8 right-8 cursor-pointer"
      onClick={() => setShowNavigation(true)}
      sx={{
        fill: 'text',
        filter: 'grayscale(100%)',
        opacity: '0.5',
        ':hover': {
          opacity: '1',
        },
      }}
    />
  )
}

const Expanded = () => {
  const {
    showNavigation,
    setShowNavigation,
    navigationFilter,
    setComponent,
  } = useContext(AppContext)

  const allFilteredComponents = [
    ...atoms,
    ...molecules,
    ...organisms,
    ...templates,
  ].filter((c) =>
    c.label.toLowerCase().includes(navigationFilter.toLowerCase()),
  )
  const navFilter = useRef()
  navFilter.current = navigationFilter

  const filteredComps = useRef()
  filteredComps.current = allFilteredComponents

  // later: build hook https://www.caktusgroup.com/blog/2020/07/01/usekeypress-hook-react/
  useEffect(() => {
    const onEnter = (e) => {
      if (e.key === 'Enter') {
        if (navFilter.current !== '' && filteredComps.current.length !== 0) {
          setComponent(filteredComps.current[0])
          setShowNavigation(false)
        }
      }
    }

    window.addEventListener('keyup', onEnter)
    return () => window.removeEventListener('keyup', onEnter)
  }, [])

  return (
    <div
      className="h-screen absolute top-0 right-0 flex flex-col w-full pt-8 px-12 overflow-auto select-none z-20"
      sx={{
        bg: 'background',
        width: 'calc(100vw - 18rem + 30px)',
        fontSize: '14px',
        transition: '0.1s filter linear',
      }}
    >
      <Header />
      {allFilteredComponents.length !== 0 ? (
        <>
          <Section components={atoms} label="Atoms" />
          <Section components={molecules} label="Molecules" />
          <Section components={organisms} label="Organisms" />
          <Section components={templates} label="Templates" />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-2xl -mt-14">
          Nothing found
        </div>
      )}
    </div>
  )
}

export default Navigation
