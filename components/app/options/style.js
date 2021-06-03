import { useContext } from 'react'
import { AppContext } from 'context'

const styles = [
  {
    label: 'Default',
    value: 'default',
  },
  {
    label: 'Big Sur',
    value: 'big-sur',
  },
]

const Style = () => {
  const { style: selectedStyle, setStyle } = useContext(AppContext)

  return (
    <div className="flex flex-col py-4 border-b">
      {styles.map((style) => (
        <div key={style.value} onClick={() => setStyle(style.value)}>
          <input
            type="radio"
            name="style"
            id={style.value}
            value={style.value}
            checked={style.value === selectedStyle}
          />
          <label htmlFor={style.value} className="ml-1">
            {style.label}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Style
