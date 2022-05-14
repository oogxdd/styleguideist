import { useContext, useEffect } from 'react'
import { AppContext } from 'context'
import { atoms, molecules, organisms, templates } from 'data/components'

import Variants from './variants'

const Preview = () => {
  const { selectedComponent: comp, fullscreen } = useContext(AppContext)

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-screen overflow-auto py-0"
      sx={{
        bg: 'background',
        width: '100%',
        // marginLeft: -33,
        marginLeft: fullscreen ? 0 : -33,
        display: 'grid',
      }}
    >
      <div
        className="flex items-start justify-center items-center w-full h-full relative"
        style={{
          width:
            comp.group === 'organisms'
              ? 'calc(100vw - 18rem + 33px)'
              : 'max-content',
        }}
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
        {templates.map(
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
