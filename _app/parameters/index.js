import { useContext, useState } from 'react'
import { AppContext, ThemeContext, UIContext } from 'context'

import Tabs from './tabs'
import GlobalParameters from './global'
import LocalParameters from './local'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Parameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const { selectedComponent, selectedSubComponent } = useContext(AppContext)
  const { paramsType, setParamsType, fullscreen, setFullscreen } = useContext(
    UIContext,
  )

  return (
    <>
      <div
        className="max-h-screen overflow-hidden"
        style={{
          width: 'calc(18rem - 0px)',
          minWidth: 'calc(18rem - 0px)',
          display: fullscreen ? 'none' : 'block',
        }}
      >
        <div
          className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll transition duration-500"
          style={{ maxHeight: '125vh' }}
          sx={{
            bg: 'background',
          }}
        >
          <form
            className="block border-r pb-6"
            sx={{ borderColor: 'borderColor', minHeight: '125vh' }}
          >
            <Tabs
              activeTab={paramsType}
              setTab={setParamsType}
              tabs={[
                'Global',
                selectedSubComponent && selectedSubComponent.label
                  ? selectedSubComponent.label
                  : 'Local',
              ]}
            />
            {/* paramsType === 'local' && () */}
            {paramsType === 'local' ? (
              <LocalParameters />
            ) : (
              <GlobalParameters />
            )}
          </form>
        </div>
      </div>
      <div
        className="fixed bottom-2 left-2 select-none z-10"
        onClick={() => setFullscreen(!fullscreen)}
      >
        {fullscreen ? (
          <ChevronRightIcon
            className="w-8 h-8 cursor-pointer"
            sx={{
              // fill: 'text',
              // filter: 'grayscale(100%)',
              fill: 'primary',
              opacity: '0.5',
              ':hover': {
                opacity: '1',
              },
            }}
          />
        ) : (
          <ChevronLeftIcon
            className="w-8 h-8 cursor-pointer"
            sx={{
              // fill: 'text',
              // filter: 'grayscale(100%)',
              fill: 'primary',
              opacity: '0.5',
              ':hover': {
                opacity: '1',
              },
            }}
          />
        )}
      </div>
    </>
  )
}

export default Parameters
