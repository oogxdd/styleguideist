import { useState } from 'react'
import { useTheme } from 'context'

import { Cell } from '../cell'
import { Label } from '../index'
import { GRID_WIDTH, BASE_HEIGHT } from '../index'

const borderOptions = ['none', '', 'md', 'lg', 'xl']
const borderOptionss = ['none', '', 'md', 'lg', 'xl']

const BorderParameters = () => {
  const { setBorderRadius } = useTheme()
  const [selectedPreset, setPreset] = useState(3)

  return (
    <>
      <div className="flex mb-2.5">
        {borderOptionss.map((option, index) => {
          const isSelected = selectedPreset === index + 1

          return (
            <Cell
              // onClick={() => setBorderRadius(index * 4)}
              onClick={() => {
                setPreset(index + 1)
                setBorderRadius(index * 4)
              }}
              active={isSelected}
            >
              <div
                className={`border-r border-t w-2/5 h-2/5 rounded-tr${
                  option !== '' ? `-${option}` : ''
                }`}
              />
            </Cell>
          )
        })}
        {/*
        <Cell>
          <div className="border-r border-t rounded-tr w-1/3 h-1/3" />
        </Cell>
        */}
      </div>
      {/*
      <div className="flex mb-2.5">
        {borderOptions.map((option, index) => (
          <Cell onClick={() => setBorderRadius(index * 4)}>
            <RectRound className={`rounded-${option}`} />
          </Cell>
        ))}
      </div>
      */}
    </>
  )
}

const RectRound = ({ className }) => {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 border ${className}`}
        sx={{
          width: (BASE_HEIGHT / 3) * 2,
          height: (BASE_HEIGHT / 3) * 2,
          borderColor: '#e7e7ea',
          // borderTopWidth: 1.5,
          // borderRightWidth: 1.5,
          // borderTopLeftRadius: 4,
          borderBottomLeftRadius: '4px',
          // ':hover': {
          //   background: '#393a3e',
          // },
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        sx={{
          backgroundColor: '#46474c',
          width: (BASE_HEIGHT / 3) * 3 - 4,
          height: (BASE_HEIGHT / 3) * 1,
          borderTopLeftRadius: '4px',
          borderBottomRightRadius: '4px',
          borderBottomLeftRadius: '4px',
          ':hover': {
            background: '#393a3e',
          },
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        sx={{
          backgroundColor: '#46474c',
          width: (BASE_HEIGHT / 3) * 1,
          height: (BASE_HEIGHT / 3) * 3 - 4,
          borderBottomLeftRadius: '4px',
          borderBottomRightRadius: '4px',
          borderTopLeftRadius: '4px',
          ':hover': {
            background: '#393a3e',
          },
        }}
      ></div>
    </>
  )
}

export default BorderParameters
