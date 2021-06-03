import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Logo = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
      <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
    </div>
  )
}
