import { useContext, useState } from 'react'
import { AppContext, ThemeContext } from 'context'

import GlobalParameters from 'app/parameters/global'
import LocalParameters from 'app/parameters/local'
import Tabs from 'app/ui/tabs'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

// if (local) {
//  <Section
//    name=""
//    fields=""
//  />
// } else {
//  <Section
//    name=""
//    fields=""
//  />
// }

const Parameters = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const {
    paramsType,
    setParamsType,
    selectedComponent,
    selectedSubComponent,
  } = useContext(AppContext)

  const [hidden, setHidden] = useState(false)

  // theme[group][component][field]
  // theme.atoms.paragraph.fontSize

  return (
    <>
      <div
        className="max-h-screen overflow-hidden"
        style={{
          width: 'calc(18rem - 0px)',
          minWidth: 'calc(18rem - 0px)',
          display: hidden ? 'none' : 'block',
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
        onClick={() => setHidden(!hidden)}
      >
        {hidden ? (
          <ChevronRightIcon className="w-8 h-8 text-gray-700 hover:text-gray-500 cursor-pointer" />
        ) : (
          <ChevronLeftIcon className="w-8 h-8 text-gray-700 hover:text-gray-500 cursor-pointer" />
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
