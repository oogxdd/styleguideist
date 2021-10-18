import { useContext } from 'react'
import { AppContext } from 'context'
import { fonts } from 'data'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Button = ({ children, primary = false, secondary = false }) => {
  const {
    color,
    spacing,
    radius,
    style,
    font,
    letterSpacing,
    border,
    uppercase,
    shadow,
  } = useContext(AppContext)

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  if (primary) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {children}
      </button>
    )
  }

  if (secondary) {
    return (
      <button
        type="button"
        className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        {children}
      </button>
    )
  }

  return (
    <>
      <button
        className={`
          border
          border-transparent

          text-primary
          tracking-default
          leading-default
          h-button-big
          p-button-big
          rounded-button-big
          text-button-big

          ${uppercase ? 'uppercase' : ''}

          bg-${color ? color + '-500' : 'primary'}
          hover:bg-${color}-700

          shadow-${shadow}

        `}
      >
        {children || 'View All'}
      </button>
      <style
        dangerouslySetInnerHTML={{
          __html: `button { font-family: '${
            fonts.find((f) => f.value === font).label
          }' !important; } `,
        }}
      />
    </>
  )
}
