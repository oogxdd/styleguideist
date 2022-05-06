import { useContext } from 'react'
import { AppContext } from 'context'

const SearchBar = () => {
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
        opacity: '0.5',
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

export default SearchBar
