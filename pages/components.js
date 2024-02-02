import { useState } from 'react'
import { ChevronDownIcon, ArrowPathIcon } from '@heroicons/react/24/solid'

// import { Parameters } from 'app/parameters/_small'
import { ComponentPreview } from 'app/preview'
import { Parameters } from 'app/parameters'
import { ComponentsTable } from 'app/components-table'

import { Separator } from 'components/atoms'

const MakeUI = () => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="w-screen min-h-screen flex overflow-auto"
      sx={{
        bg: 'background',
      }}
    >
      <div
        className="flex justify-between flex-col p-6 pt-4 border-r h-screen"
        sx={{ borderColor: 'borderColor' }}
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

          <div className="mb-8 flex flex-col">
            <textarea
              placeholder="type in anything you want to build &#10;eg “e-commerce shop for the kids”"
              className="text-xs w-full resize-none rounded-lg h-20"
              style={{
                background: '#222225',
                borderColor: '#3c4043',
              }}
              // className="text-sm p-2 bg-red text-red bg-gray-100 bg-opacity-60 border-gray-200 resize-none mb-2"
            />
            <button
              primary
              className="flex text-xs items-center justify-center px-4 py-1.5 mt-1.5 self-start rounded-md"
              style={{
                backgroundColor: 'rgb(70, 71, 76)',
                borderColor: 'rgb(231, 231, 234)',
                color: 'rgb(231, 231, 234)',
                // borderRadius: '4px',
                // width: '108px',
                // height: '42px',
                // height: '42px',
                // fontSize: '13px',
                // width: '100%',
                // marginTop: '24px',
                fontWeight: '600',
              }}
              sx={
                {
                  // color: 'primary',
                  // height: 32,
                  // pl: 14,
                  // pr: 14,
                  // fontSize: 2,
                }
              }
            >
              Generate
            </button>
          </div>

          <Separator
            style={
              {
                // marginTop: '3rem',
                //   marginBottom: '3rem'
              }
            }
          >
            or
          </Separator>
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
        <div className="text-xs opacity-30 font-light">2024</div>
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
        <ComponentPreview />
      </div>
    </div>
  )
}

// <div
//   className="h-full w-full flex items-center justify-center text-white"
//   sx={{
//     background: '#222225',
//   }}
// >
//   Component preview
// </div>

export default MakeUI
