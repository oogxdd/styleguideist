import FontPicker from 'font-picker-react'
import { useContext } from 'react'
import { AppContext } from 'context'
import { fonts } from 'data'
import { percentToNum } from 'helpers'

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
    theme,
    setTheme,
  } = useContext(AppContext)

  if (!process.browser) return null

  console.log(theme)
  return (
    <div className="flex flex-col pb-5 pt-1 px-4">
      {fonts.map((font) => (
        <div
          key={font.value}
          onClick={() =>
            setTheme((theme) => ({
              ...theme,
              fonts: {
                ...theme.fonts,
                body: font.label,
              },
            }))
          }
        >
          <input
            type="radio"
            name="font"
            id={font.value}
            value={font.value}
            checked={font.label === theme.fonts.body}
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
          min="6"
          max="64"
          value={theme.fontSizes[0]}
          onChange={(e) => {
            const x = parseInt(e.target.value)
            setTheme({
              ...theme,
              fontSizes: [
                x,
                x + 2,
                x + 4,
                x + 8,
                x + 12,
                x + 30,
                x + 46,
                x + 52,
              ],
            })
          }}
        />
      </div>
      <div>
        <label>Weight</label>
        <input
          type="range"
          min="100"
          max="900"
          step="100"
          value={theme.fontWeights.bold}
          onChange={(e) => {
            setTheme({
              ...theme,
              fontWeights: {
                ...theme.fontWeights,
                bold: parseInt(e.target.value),
              },
            })
          }}
        />
      </div>
      <div>
        <label>Letter spacing</label>
        <input
          type="range"
          min="-300"
          max="1200"
          step="10"
          value={
            +(
              theme.letterSpacings[0].substring(
                0,
                theme.letterSpacings[0].length - 2,
              ) * 100
            )
          }
          onChange={(e) => {
            const x = parseInt(e.target.value) / 100
            setTheme({
              ...theme,
              letterSpacings: [
                x + 'px',
                x + 2 + 'px',
                x + 4 + 'px',
                x + 8 + 'px',
                x + 12 + 'px',
                x + 30 + 'px',
                x + 46 + 'px',
                x + 52 + 'px',
              ],
            })
          }}
        />
      </div>
      {console.log(theme.lineHeights)}
      <div>
        <label>Line height</label>
        <input
          type="range"
          min="50"
          max="500"
          step="10"
          value={percentToNum(theme.lineHeights[0])}
          onChange={(e) => {
            setTheme({
              ...theme,
              lineHeights: [e.target.value + '%'],
            })
          }}
        />
      </div>
    </div>
  )
}

export default Font
