import { useContext, useState } from 'react'
import { AppContext, ThemeContext } from 'context'

import GlobalParameters from 'app/parameters/global'
import LocalParameters from 'app/parameters/local'
import Tabs from './tabs'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

// if (local) {
//  <Section
//    label=""
//    fields=[]
//  />
// } else {
//  <Section
//    label=""
//    fields=[]
//  />
// }

const Parameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const {
    paramsType,
    setParamsType,
    selectedComponent,
    selectedSubComponent,
    fullscreen,
    setFullscreen,
  } = useContext(AppContext)

  // theme[group][component][field]
  // theme.atoms.paragraph.fontSize

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
          className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
          style={{ maxHeight: '125vh' }}
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

{
  /*
<>
  <Color open />
  <Font />
  <Border />
  <Shadow />
  <Spacing />
  <Presets open />
</>
  */
}

// const paragraphFields = [
//   {
//     type: 'slider',
//     label: 'Size',
//     min: '6',
//     max: '64',
//     value: theme.atoms.paragraph.fontSize,
//     onChange: (value) => {
//       setTheme((theme) => {
//         theme.atoms.paragraph.fontSize = +value
//       })
//     },
//   },
//   {
//     type: 'slider',
//     label: 'Weight',
//     min: '100',
//     max: '900',
//     step: 100,
//     value: theme.atoms.paragraph.fontWeight,
//     onChange: (value) => {
//       setTheme((theme) => {
//         theme.atoms.paragraph.fontWeight = +value
//       })
//     },
//   },
// ]

export default Parameters
