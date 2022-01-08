/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Themed } from 'theme-ui'

import { Button } from 'components/atoms'
import { atoms, molecules, organisms, templates } from 'data'

// <div
//   sx={
//     previewComponent
//       ? { zIndex: 1, bg: 'background' }
//       : { bg: 'background' }
//   }
// >
// </div>

const Preview = () => {
  const { selectedComponent, previewComponent } = useContext(AppContext)

  return (
    <div
      className="flex flex-row items-center w-full h-screen overflow-auto py-24"
      sx={{ bg: 'background' }}
    >
      <div className="flex items-center justify-center w-full h-full relative">
        {atoms.map((atom) => {
          // if (previewComponent === atom.value) {
          //   return <atom.component />
          // }
          if (!previewComponent && selectedComponent === atom.value) {
            return <atom.component key={atom.value} />
          }
        })}
        {molecules.map((molecule) => {
          // if (previewComponent === molecule.value) {
          //   return <molecule.component />
          // }
          if (!previewComponent && selectedComponent === molecule.value) {
            return <molecule.component key={molecule.value} />
          }
        })}
        {organisms.map((organism) => {
          // if (previewComponent === organism.value) {
          //   return <organism.component />
          // }
          if (!previewComponent && selectedComponent === organism.value) {
            return <organism.component key={organism.value} />
          }
        })}
        {templates.map((template) =>
          template.pages.map((page) => {
            // if (previewComponent === page.value) {
            //   return <page.component />
            // }
            if (!previewComponent && selectedComponent === page.value) {
              return <page.component key={template.value} />
            }
          }),
        )}
      </div>
    </div>
  )
}

export default Preview
