import { useContext, useEffect } from 'react'
import { AppContext, UIContext } from 'context'
import { atoms, molecules, organisms, pages } from 'data/components'

import Variants from './variants'

const Preview = ({ width = '100%' }) => {
  const { selectedComponent: comp } = useContext(AppContext)
  const { fullscreen } = useContext(UIContext)

  const alignStart = comp.value === 'feed' || comp.value === 'styleguide'

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen overflow-auto py-0
      transition duration-500"
      sx={{
        // bg: 'background',
        width: width,
        // marginLeft: -33,
        // marginLeft: fullscreen ? 0 : -33,
        display: 'grid',
      }}
    >
      <div
        className={`flex justify-center ${
          alignStart ? 'items-start' : 'items-center'
        } h-full relative`}
        style={
          {
            // width: '100%',
            // comp.group === 'organisms'
            //   ? 'calc(100vw - 18rem + 33px)'
            //   : 'max-content',
          }
        }
      >
        {atoms.map(
          (atom) =>
            comp.value === atom.value && <atom.component key={atom.value} />,
        )}
        {molecules.map(
          (molecule) =>
            comp.value === molecule.value && (
              <molecule.component key={molecule.value} molecule={molecule} />
            ),
        )}
        {organisms.map(
          (organism) =>
            comp.value === organism.value && (
              <organism.component key={organism.value} />
            ),
        )}
        {pages.map(
          (template) =>
            comp.value === template.value && (
              <template.component key={template.value} />
            ),
        )}
      </div>
      <Variants />
    </div>
  )
}

export default Preview
