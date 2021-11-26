/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Themed } from 'theme-ui'

import { Button } from 'components/atoms'
import { atoms, molecules, organisms, templates } from 'data'

const Preview = () => {
  const { selectedComponent, previewComponent } = useContext(AppContext)

  return (
    <div
      className="flex flex-row items-center w-full h-screen overflow-auto py-24"
      sx={{ bg: 'background' }}
    >
      <div className="flex items-center justify-center w-full h-full relative">
        <div sx={previewComponent ? { zIndex: 1 } : {}}>
          {atoms.map((atom) => {
            if (previewComponent === atom.value) {
              return <atom.component />
            }
            if (!previewComponent && selectedComponent === atom.value) {
              return <atom.component />
            }
          })}
          {molecules.map((molecule) => {
            if (previewComponent === molecule.value) {
              return <molecule.component />
            }
            if (!previewComponent && selectedComponent === molecule.value) {
              return <molecule.component />
            }
          })}
          {organisms.map((organism) => {
            if (previewComponent === organism.value) {
              return <organism.component />
            }
            if (!previewComponent && selectedComponent === organism.value) {
              return <organism.component />
            }
          })}
          {templates.map((template) =>
            template.pages.map((page) => {
              if (previewComponent === page.value) {
                return <page.component />
              }
              if (!previewComponent && selectedComponent === page.value) {
                return <page.component />
              }
            }),
          )}
        </div>
      </div>
    </div>
  )
}

export default Preview
