// const Preview = () => (
//   <div className="flex flex-col">
//     <PreviewHeader />
//     <PreviewImage />
//   </div>
// )

import { useContext, useEffect } from 'react'
import { AppContext, UIContext } from 'context'
import { atoms, molecules, organisms, templates } from 'data/components'

const Preview = () => {
  const { selectedComponent: comp } = useContext(AppContext)
  const { fullscreen } = useContext(UIContext)

  return (
    <div className="flex flex-col justify-center items-center w-full">
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
  )
}

export default Preview
