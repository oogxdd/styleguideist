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
      className="flex flex-row items-center w-full h-full"
      sx={{ bg: 'background' }}
    >
      {/* <Top /> */}
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
      {/* <Bottom /> */}
    </div>
  )
}

export default Preview

const Bottom = () => (
  <div
    className="flex w-full justify-around border-t pt-12 mb-8 mx-8"
    sx={{ borderColor: 'text' }}
    style={{
      width: 'calc(100% - 4rem)',
      paddingBottom: '3rem',
    }}
  >
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Atoms
      </span>
      {(atoms || []).map((atom) => (
        <span key={atom.value}>{item.label}</span>
      ))}
      <span>Input</span>
      <span>Textarea</span>
    </div>
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Molecules
      </span>
      <span>Shopping item</span>
    </div>
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Organisms
      </span>
      <span>Shopping list</span>
    </div>
    {/*
        <div className="flex flex-col space-y-2">
          <span style={{ color: 'white' }} className="mb-4">
            Pages
          </span>
        </div>
        */}
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Templates
      </span>
      <span>E-commerce</span>
      <span>Dashboard</span>
      <span>Landing</span>
      <span>Blog</span>
    </div>
  </div>
)

const Top = () => (
  <div
    className="flex w-full justify-around border-b pt-12 mx-8"
    sx={{ borderColor: 'text' }}
    style={{
      width: 'calc(100% - 4rem)',
      paddingBottom: '3rem',
    }}
  >
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Atoms
      </span>
      <span>Button</span>
      <span>Input</span>
      <span>Textarea</span>
    </div>
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Molecules
      </span>
      <span>Shopping item</span>
    </div>
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Organisms
      </span>
      <span>Shopping list</span>
    </div>
    {/*
        <div className="flex flex-col space-y-2">
          <span style={{ color: 'white' }} className="mb-4">
            Pages
          </span>
        </div>
 P       */}
    <div className="flex flex-col space-y-2">
      <span style={{ color: 'white' }} className="mb-4">
        Templates
      </span>
      <span>E-commerce</span>
      <span>Dashboard</span>
      <span>Landing</span>
      <span>Blog</span>
    </div>
  </div>
)
