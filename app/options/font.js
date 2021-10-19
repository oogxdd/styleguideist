import FontPicker from 'font-picker-react'
import { SketchPicker } from 'react-color'
import { useContext } from 'react'
import { AppContext } from 'context'
import { fonts } from 'data'

const Font = () => {
  const {
    font: selectedFont,
    fontSize,
    fontColor,
    fontWeight,
    fontLetterSpacing,
    setFont,
    setFontSize,
    setFontColor,
    setFontWeight,
    setFontLetterSpacing,
  } = useContext(AppContext)

  if (!process.browser) return null

  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
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
      {/*
      <FontPicker
        apiKey="AIzaSyCvzCJw-obc7L5B4UgAHdOrKM1BtyLci9o"
        activeFontFamily={selectedFont}
        onChange={(nextFont) => setFont(nextFont.family)}
      />
       */}

      <div>
        <label>Size</label>
        <input
          type="range"
          min="10"
          max="32"
          value={fontSize}
          onChange={(e) => {
            setFontSize(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Weight</label>
        <input
          type="range"
          min="1"
          max="9"
          value={fontWeight}
          onChange={(e) => {
            setFontWeight(e.target.value)
          }}
        />
      </div>
      <div>
        <label>Letter spacing</label>
        <input
          type="range"
          min="-300"
          max="300"
          step="10"
          value={fontLetterSpacing}
          onChange={(e) => {
            setFontLetterSpacing(e.target.value)
          }}
        />
      </div>
      <SketchPicker
        color={fontColor}
        onChange={(color) => setFontColor(color.hex)}
      />
    </div>
  )
}

export default Font
