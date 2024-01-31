import { useState } from 'react'
import { ChevronDownIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

// import { Parameters } from 'app/parameters/_small'
import { Parameters } from 'app/parameters'
import { ComponentsTable } from 'app/components-table'

const MakeUI = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="w-screen min-h-screen bg-[#202124] flex overflow-auto">
      <div
        className="flex justify-between flex-col p-6 pt-4 border-r h-screen"
        sx={{ borderColor: '#3c4043' }}
      >
        <div className="flex flex-col">
          <div className="text-white mb-0.5">
            <span className="opacity-60 font-extralight">make</span>
            ui.ai
          </div>

          <p className="text-white opacity-80 font-thin text-sm mb-8">
            generate ui for your next
            <br />
            thing
          </p>
          <Parameters />
          <button
            className="flex text-sm items-center justify-center"
            style={{
              backgroundColor: 'rgb(70, 71, 76)',
              borderColor: 'rgb(231, 231, 234)',
              color: 'rgb(231, 231, 234)',
              borderRadius: '4px',
              width: '108px',
              // height: '42px',
              height: '42px',
              // fontSize: '13px',
              width: '100%',
              marginTop: '24px',
              fontWeight: '600',
            }}
          >
            <ArrowPathIcon
              className="h-4 w-4 mr-1"
              aria-hidden="true"
              // sx={{ color: 'text' }}
            />
            <span>Randomize</span>
          </button>
        </div>
        <div>footer</div>
      </div>
      <div className="flex flex-col -reverse w-full">
        {expanded ? (
          <div
            className="flex border-b w-full p-4 px-6"
            sx={{ borderColor: '#3c4043' }}
            onClick={() => setExpanded(!expanded)}
          >
            <div className="scale-900">
              <ComponentsTable />
            </div>
          </div>
        ) : (
          <div
            className="text-sm p-4 px-8 w-full h-16 border-b flex text-white flex items-center justify-between"
            sx={{ borderColor: '#3c4043' }}
          >
            <span
              onClick={() => setExpanded(!expanded)}
              className="flex items-center cursor-pointer hover:opacity-80"
            >
              All components
              <ChevronDownIcon
                className="h-4 w-4 ml-1"
                aria-hidden="true"
                // sx={{ color: 'text' }}
              />
            </span>
            <span className="text-orange-400 font-medium">Purchase set</span>
          </div>
        )}
        {/*
         */}
        <div
          className="h-full w-full flex items-center justify-center text-white"
          sx={{
            background: '#222225',
          }}
        >
          yo
        </div>
      </div>
    </div>
  )
}

export default MakeUI
