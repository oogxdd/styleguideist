import { useContext } from 'react'
import { ThemeContext } from 'context'

const components = [
  {
    comp: <span>label</span>,
    order: 3,
  },
  {
    comp: <h1>heading</h1>,
    order: 1,
  },
  {
    comp: <p>paragraph</p>,
    order: 2,
  },
]

export const OrderTest = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="flex flex-col">
      {components
        .sort((a, b) => a.order - b.order)
        .map((component) => (
          <>{component.comp}</>
        ))}
    </div>
  )
}
