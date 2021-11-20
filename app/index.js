/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

import Parameters from 'app/parameters'
import Preview from 'app/preview'
import Navigation from 'app/navigation'

const Page = ({ open }) => {
  const { theme, setTheme } = useContext(AppContext)

  return (
    <div className="flex h-screen items-center">
      <Parameters />
      <Preview />
      <Navigation />
      {/*
       */}
    </div>
  )
}

export default Page
