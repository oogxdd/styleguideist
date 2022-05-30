import { useContext } from 'react'
import { UIContext } from 'context'

import SearchBar from './search-bar'
import CloseIcon from 'public/icons/close.svg'
import { XIcon } from '@heroicons/react/solid'

const Header = () => (
  <div className="flex justify-between mb-8">
    <SearchBar />
    <Close />
  </div>
)

const Close = () => {
  const { setShowNavigation } = useContext(UIContext)

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
