import { useState } from 'react'

export const Presets = ({ presets = [1, 2, 3, 4, 5], type }) => {
  const [selectedPreset, setPreset] = useState(3)

  if (type === 'border') {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="h-10 w-10 border-gray-300 rounded-none focus:ring-indigo-500 border flex items-center justify-center text-gray-300 text-sm">
          none
        </div>
        <div className="h-10 w-10 border-gray-300 rounded-md focus:ring-indigo-500 border flex items-center justify-center  text-gray-300 text-sm">
          sm
        </div>
        <div className="h-10 w-10 border-gray-500 rounded-lg focus:ring-indigo-500 border flex items-center justify-center  text-gray-500 text-sm">
          md
        </div>
        <div className="h-10 w-10 border-gray-300 rounded-xl focus:ring-indigo-500 border flex items-center justify-center  text-gray-300 text-sm">
          lg
        </div>
        <div
          className="h-10 w-10 border-gray-300 rounded-full focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300 text-sm"
          style={{ borderRadius: '100%' }}
        >
          full
        </div>
      </div>
    )
  }

  if (type === 'spacing') {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center text-gray-300">
          <div className="h-3 w-3 border-gray-200 rounded-sm border"></div>
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
          <div className="h-5 w-5 border-gray-200 rounded-sm border"></div>
        </div>
        <div className="h-10 w-10 border-gray-500 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-500">
          <div className="h-7 w-7 border-gray-500 rounded-sm border"></div>
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
          <div className="h-8 w-8 border-gray-200 rounded-sm border"></div>
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300"></div>
      </div>
    )
  }

  if (type === 'themes') {
    return (
      <div className="flex items-center justify-between mb-6">
        <div className="h-10 w-10 border-indigo-500 rounded focus:ring-indigo-500 border-2 flex items-center justify-center text-gray-400">
          DE
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
          <img src="/img/logo/twitter.svg" alt="Twitter" className="w-7 h-7" />
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-500">
          <img src="/img/logo/spotify.svg" alt="Spotify" className="w-7 h-7" />
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
          <img src="/img/logo/vercel.svg" alt="Vercel" className="w-7 h-7" />
        </div>
        <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300">
          CU
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center justify-between mb-6">
      {presets.map((preset, index) => {
        const isSelected = selectedPreset === index + 1

        return (
          <div
            className={`
              h-10 w-10
              rounded
              border
              focus:ring-indigo-500
              cursor-pointer
              flex
              justify-center 
              items-center
              text-gray-${isSelected ? 500 : 300}
              border-gray-${isSelected ? 500 : 300}
              shadow-${isSelected ? 'lg' : 'none'}

            `}
            onClick={() => setPreset(index + 1)}
            key={preset}
          >
            {index + 1}
          </div>
        )
      })}
    </div>
  )
  return
}
