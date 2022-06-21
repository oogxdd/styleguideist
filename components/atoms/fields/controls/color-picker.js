/** @jsxImportSource theme-ui */
import { useState, useEffect, useRef } from 'react'
import { SketchPicker } from 'react-color'

export const ColorPicker = ({ value: color, onChange, label = 'Color' }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <label className="mr-3 text-xs">{label}</label>
        <div
          className="h-5 w-5 rounded text-indigo-600 focus:ring-indigo-500 bg-green-500 border"
          style={{ background: color }}
          onClick={() => setExpanded(!expanded)}
          sx={{
            borderColor: 'borderColor',
          }}
        />
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
    <div ref={ref} className="absolute z-20">
      <SketchPicker color={color} onChange={onChange} />
    </div>
  )
}
