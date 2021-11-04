// http://santhoshsivan.com/neu.html
import { useContext } from 'react'
import { AppContext } from 'context'

const Shadow = () => {
  const { theme, setShadow } = useContext(AppContext)

  console.log(theme)
  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      {(theme.shadows || []).map((shadow, index) => (
        <div key={shadow}>
          <input
            type="radio"
            name="shadow"
            id={shadow}
            value={shadow}
            checked={
              theme.buttons &&
              theme.buttons.primary &&
              theme.buttons.primary.boxShadow === index
            }
            onChange={() => setShadow(index)}
          />
          <label htmlFor={shadow} className="ml-1">
            {index}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Shadow
