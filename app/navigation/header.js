/** @jsxImportSource theme-ui */
import { XIcon } from '@heroicons/react/solid'
import { useContext } from 'react'
import { AppContext } from 'context'

import CloseIcon from './icons/close.svg'

// const Header = () => (
//     <Close />
// )

const Header = () => (
  <div className="flex justify-between mb-10">
    {/*
     */}
    <Search />
    <Close />
  </div>
)

const Search = () => {
  const { navigationFilter, setNavigationFilter } = useContext(AppContext)

  return (
    <input
      placeholder="Type to search"
      value={navigationFilter}
      onChange={(e) => setNavigationFilter(e.target.value)}
      style={{ background: 'transparent' }}
      className="outline-none w-1/2 py-2"
      autoFocus
      sx={{
        color: 'text',
        opacity: '0.3',
        fontSize: '15px',
        ':hover': {
          opacity: '1',
        },
        '::placeholder': {
          // color: 'text',
        },
      }}
    />
  )
}

const Close = () => {
  const { setShowNavigation } = useContext(AppContext)

  return (
    <CloseIcon
      className="w-6 h-6 fixed top-8 right-8 cursor-pointer"
      sx={{
        fill: 'text',
        opacity: '0.3',
        filter: 'grayscale(100%)',
        ':hover': {
          opacity: '1',
        },
      }}
      onClick={() => setShowNavigation(false)}
    />
  )
}

export default Header
