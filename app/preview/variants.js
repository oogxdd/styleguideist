import { useContext, useState } from 'react'
import { AppContext, ThemeContext, UIContext } from 'context'

const Variants = () => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const { fullscreen } = useContext(UIContext)
  const toShow =
    selectedComponent.layoutVariants &&
    selectedComponent.layoutVariants.length > 0

  // return null
  // if (selectedComponent.value === 'blogpost') return null
  if (!toShow) return null

  return (
    <div
      className="fixed bottom-8 flex justify-center w-full"
      style={{
        width: fullscreen ? '100vw' : 'calc(100vw - 18rem + 33px)',
      }}
    >
      <div className="flex space-x-2">
        {selectedComponent.layoutVariants.map((layoutVariant) => (
          <Variant
            selected={selectedComponentVariant === layoutVariant}
            val={layoutVariant}
            key={`variant-${layoutVariant}`}
          >
            {layoutVariant}
          </Variant>
        ))}
      </div>
    </div>
  )
}

const Variant = ({ children, selected = false, val }) => {
  const { setComponentVariant, selectedComponent } = useContext(AppContext)
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      className={`border rounded-full cursor-pointer w-8 h-8 rounded-full flex items-center justify-center ${
        selected ? '' : 'opacity-50'
      }`}
      sx={{ bg: 'background', borderColor: 'borderColor', color: 'text' }}
      onClick={() => {
        if (!selected) {
          setComponentVariant(val)

          if (selectedComponent.value === 'blogpost') {
            let prevWidth =
              theme.molecules.blogpost.card.width || theme.atoms.card.width
            console.log(prevWidth)
            console.log(prevWidth)
            console.log(prevWidth)
            console.log(prevWidth)
            if (val === 2) {
              console.log(prevWidth ? prevWidth / 2 : 400)
              setTheme((theme) => {
                theme.molecules.blogpost.card.width = prevWidth
                  ? prevWidth * 2
                  : 800
              })
              //
            }
            if (val === 1) {
              console.log(prevWidth ? prevWidth / 2 : 800)
              setTheme((theme) => {
                theme.molecules.blogpost.card.width = prevWidth
                  ? prevWidth / 2
                  : 400
              })
              //
            }
          }
        }
      }}
    >
      {children}
    </div>
  )
}

export default Variants
