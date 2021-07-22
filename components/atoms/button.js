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


        `}
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
