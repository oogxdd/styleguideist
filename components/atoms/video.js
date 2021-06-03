// import ReactPlayer from 'react-player/youtube'
import { useContext } from 'react'
import { AppContext } from 'context'

const spacingToFont = {
  '0.5': 'sm',
  '1': 'base',
  '2': 'xl',
  '3': '2xl',
}

export const Video = (props) => {
  const { color, spacing, radius, style } = useContext(AppContext)

  if (style === 'big-sur') {
    return <button>Button (Big Sur)</button>
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div
        className="flex justify-center w-min-content h-80 bg-white rounded-2xl shadow-lg bg-clip-border"
        style={{ zIndex: 1 }}
      >
        {/*
        <ReactPlayer
          url="https://www.youtube.com/watch?v=d_JSWHEgFkc&ab_channel=Hostaway"
          controls
        />
        */}
      </div>

      {/*
      <span className="text-gray-400 opacity-90 text-sm mt-8">
        a video worth a thousand words
      </span>
      */}
    </div>
  )
}
