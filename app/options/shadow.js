// http://santhoshsivan.com/neu.html
import { useContext } from 'react'
import { AppContext } from 'context'

const shadowOptions = ['none', 'sm', 'default', 'md', 'lg', 'xl', '2xl']

const Shadow = () => {
  const { shadow: selectedShadow, setShadow } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      {shadowOptions.map((shadow) => (
        <div key={shadow} onClick={() => setShadow(shadow)}>
          <input
            type="radio"
            name="shadow"
            id={shadow.value}
            value={shadow.value}
            checked={shadow === selectedShadow}
          />
          <label htmlFor={shadow} className="ml-1">
            {shadow}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Shadow
