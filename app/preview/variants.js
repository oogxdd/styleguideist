import { useContext, useState } from 'react'
import { AppContext, ThemeContext } from 'context'

const Variants = () => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const toShow =
    selectedComponent.layoutVariants &&
    selectedComponent.layoutVariants.length > 0

  return null
  if (!toShow) return null

  return (
    <div className="self-center justify-self-end flex mb-8 space-x-2">
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
  )
}

const Variant = ({ children, selected = false, val }) => {
  const { setComponentVariant } = useContext(AppContext)

  return (
    <div
      className={`border rounded-full cursor-pointer w-8 h-8 rounded-full flex items-center justify-center ${
        selected ? '' : 'opacity-50'
      }`}
      onClick={() => {
        setComponentVariant(val)
      }}
    >
      {children}
    </div>
  )
}

export default Variants
