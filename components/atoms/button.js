import { useContext } from 'react'
import { AppContext } from 'context'
import { Button as ButtonComponent } from 'theme-ui'
import { fonts } from 'data'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Button = (props) => {
  const {
    // font
    font,
    fontSize,
    fontColor,
    fontWeight,
    fontLetterSpacing,
    uppercase,

    // border
    borderWidth,
    borderColor,
    borderRadius,

    color,
    spacing,
    style,
    shadow,
  } = useContext(AppContext)

  const name = props.name || 'View All'

  // sx={{ textTransform: 'uppercase' }}
  return <ButtonComponent>Submit</ButtonComponent>

  return (
    <div
      sx={{
        fontWeight: 'bold',
        fontSize: 4, // picks up value from `theme.fontSizes[4]`
        color: 'primary', // picks up value from `theme.colors.primary`
      }}
    >
      Hello
    </div>
  )

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


          bg-${color ? color + '-500' : 'primary'}
          hover:bg-${color}-700

          shadow-${shadow}

          apply-font
        `}
        style={{
          background: color,

          // font
          fontSize: `${fontSize}px`,
          fontWeight: `${parseInt(fontWeight) * 100}`,
          letterSpacing: `${parseInt(fontLetterSpacing) / 100}px`,
          color: fontColor,
          textTransform: uppercase ? 'uppercase' : 'none',

          // border
          border: `${borderWidth}px solid ${borderColor}`,
          borderRadius: `${borderRadius}px`,
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
