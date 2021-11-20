/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Section } from 'components/ui'

import { atoms, molecules, organisms, templates } from 'data'

const Navigation = () => (
  <div
    className="max-h-screen overflow-auto"
    style={{ width: 'calc(20rem - 6px)', minWidth: 'calc(20rem - 6px)' }}
  >
    <div className="parameters_right grid grid-cols-1 gap-x-8 gap-y-10 mr-6 mt-2 min-h-screen">
      <form
        className="block border-l"
        sx={{
          borderColor: 'borderColor',
          paddingLeft: 30,
        }}
      >
        <Section name="Atoms" open>
          {atoms.map((atom) => (
            <Component component={atom} />
          ))}
        </Section>
        <Section name="Molecules" open>
          {molecules.map((atom) => (
            <Component component={atom} />
          ))}
        </Section>
        <Section name="Organisms">
          {organisms.map((atom) => (
            <Component component={atom} />
          ))}
        </Section>
        <Section name="Templates">
          {templates.map((atom) => (
            <Template component={atom} />
          ))}
        </Section>
      </form>
    </div>
  </div>
)

const Component = ({ component }) => {
  const { selectedComponent, setComponent } = useContext(AppContext)

  const isSelected = selectedComponent === component.value

  // if (!component.enabled) return null
  return (
    <div className="flex flex-col">
      <label
        className="mr-3 text-sm cursor-pointer"
        key={component.value}
        sx={{
          color: isSelected ? 'primary' : 'text',
          display: component.enabled ? 'block' : 'hidden',
          ':hover': { color: 'primary' },
        }}
        onClick={() => setComponent(component.value)}
      >
        {component.label}
      </label>
      {component.pages && (
        <ul className="list-disc mt-4 space-y-1.5 mb-4">
          {component.pages.map((page) => (
            <li className="mr-3 text-sm" key={component.value}>
              {page.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
  return
}

const Template = ({ component }) => {
  const { selectedComponent, setComponent } = useContext(AppContext)

  // if (!component.enabled) return null
  return (
    <div className="flex flex-col">
      <label className="mr-3 text-sm underline" key={component.value}>
        {component.label}
      </label>
      {component.pages && (
        <ul className="list-disc mt-4 space-y-1.5 mb-4">
          {component.pages.map((page) => (
            <li
              className="mr-3 text-sm cursor-pointer"
              key={component.value}
              onClick={() => setComponent(page.value)}
              sx={
                selectedComponent === page.value
                  ? { color: 'primary', ':hover': { color: 'primary' } }
                  : { ':hover': { color: 'primary' } }
              }
            >
              {page.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
  return
}

export default Navigation
