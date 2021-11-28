/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Themed } from 'theme-ui'

import { Button } from 'components/atoms'
import { atoms, molecules, organisms, templates } from 'data'

const Preview = () => {
  const { selectedComponent } = useContext(AppContext)

  return (
    <div
      className="flex flex-row items-center w-full h-screen overflow-auto py-24"
      sx={{ bg: 'background' }}
    >
      <div className="flex items-center justify-center w-full h-full relative">
        {atoms.map(
          (atom) => selectedComponent === atom.value && <atom.component />,
        )}
        {molecules.map(
          (molecule) =>
            selectedComponent === molecule.value && <molecule.component />,
        )}
        {organisms.map(
          (organism) =>
            selectedComponent === organism.value && <organism.component />,
        )}
        {templates.map((template) =>
          template.pages.map(
            (page) => selectedComponent === page.value && <page.component />,
          ),
        )}
      </div>
    </div>
  )
}

export default Preview
