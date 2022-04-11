import { useContext, useEffect } from 'react'
import { AppContext } from 'context'
import { atoms, molecules, organisms, templates } from 'data/components'

const Preview = () => {
  const { selectedComponent: comp } = useContext(AppContext)

  return (
    <div
      className="flex flex-row justify-center items-center w-full h-screen overflow-auto py-0"
      sx={{ bg: 'background' }}
    >
      <div
        className="flex items-start justify-center items-center w-full h-full relative"
        style={{ width: 'max-content' }}
      >
        {atoms.map(
          (atom) =>
            comp.value === atom.value && <atom.component key={atom.value} />,
        )}
        {molecules.map(
          (molecule) =>
            comp.value === molecule.value && (
              <molecule.component key={molecule.value} />
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
    </div>
  )
}

export default Preview
