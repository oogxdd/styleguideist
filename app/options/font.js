import { useContext } from 'react'
import { AppContext } from 'context'
import { fonts } from 'data'

const Font = () => {
  const { font: selectedFont, setFont } = useContext(AppContext)

  return (
    <div className="flex flex-col pb-5 pt-1 px-4 border-b">
      {fonts.map((font) => (
        <div key={font.value} onClick={() => setFont(font.value)}>
          <input
            type="radio"
            name="font"
            id={font.value}
            value={font.value}
            checked={font.value === selectedFont}
          />
          <label htmlFor={font.value} className="ml-1">
            {font.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Font
