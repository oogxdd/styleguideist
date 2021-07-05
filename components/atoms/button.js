import { useContext } from 'react'
import { AppContext } from 'context'
import { fonts } from 'data'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Button = (props) => {
  const {
    color,
    spacing,
    radius,
    style,
    font,
    letterSpacing,
    border,
    uppercase,
  } = useContext(AppContext)

  const name = props.name || 'View All'

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <>
      <button
        className={`
          flex
          items-center
          justify-center
          border
          border-transparent
          text-white
          font-${spacing === '3' || spacing === '0.5' ? 'medium' : 'medium'}
          text-${spacingToFont[spacing]}
          md:text-${spacingToFont[spacing]}

          ${uppercase ? 'uppercase' : ''}

          bg-${color}-600
          hover:bg-${color}-700

          px-${spacing * 4}
          py-${(spacing * 3) / 2}

          rounded${radius ? `-${radius}` : ''}

          md:py-${spacing * 2}
          md:px-${spacing * 5}
        `}
        style={{
          letterSpacing,
        }}
      >
        {name}
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
