import { useState, useEffect, useRef } from 'react'
import { SketchPicker } from 'react-color'

export const ColorPicker = ({ color, onChange, label = 'Color' }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <div className="flex items-center">
        <span className="mr-1">{label}:</span>
        <div
          className="border w-8 h-4  cursor-pointer"
          style={{ background: color }}
          onClick={() => setExpanded(!expanded)}
        ></div>
      </div>
      {expanded && (
        <SketchPickerComponent
          color={color}
          onChange={onChange}
          hide={() => setExpanded(false)}
        />
      )}
    </div>
  )
}

const SketchPickerComponent = ({ color, onChange, hide }) => {
  const ref = useRef(null)

  useEffect(() => {
    const onClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        hide()
      }
    }

    document.addEventListener('mousedown', onClickOutside)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
    }
  }, [ref])

  return (
    <div ref={ref} className="absolute">
      <SketchPicker color={color} onChange={onChange} />
    </div>
  )
}
