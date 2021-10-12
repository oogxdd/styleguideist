import { useContext } from 'react'
import { AppContext } from 'context'
import { atoms, molecules, organisms, pages, templates } from 'data'

export default () => {
  const { selectedSection, selectedComponent, setComponent } = useContext(
    AppContext,
  )

  return (
    <nav className="space-y-1" aria-label="Sidebar">
      <ul className="divide-y divide-gray-200 px-0">
        {selectedSection === 'atoms' &&
          atoms.map((component) => (
            <Component
              active={component.value === selectedComponent}
              onClick={() => setComponent(component.value)}
              key={component.value}
            >
              {component.label}
            </Component>
          ))}
        {selectedSection === 'molecules' &&
          molecules.map((component) => (
            <Component
              active={component.value === selectedComponent}
              onClick={() => setComponent(component.value)}
              key={component.value}
            >
              {component.label}
            </Component>
          ))}
        {selectedSection === 'organisms' &&
          organisms.map((component) => (
            <Component
              active={component.value === selectedComponent}
              onClick={() => setComponent(component.value)}
              key={component.value}
            >
              {component.label}
            </Component>
          ))}
        {selectedSection === 'pages' &&
          pages.map((component) => (
            <Component
              active={component.value === selectedComponent}
              onClick={() => setComponent(component.value)}
              key={component.value}
            >
              {component.label}
            </Component>
          ))}
        {selectedSection === 'templates' &&
          templates.map((component) => (
            <Component
              active={component.value === selectedComponent}
              onClick={() => setComponent(component.value)}
              key={component.value}
            >
              {component.label}
            </Component>
          ))}
      </ul>
    </nav>
  )
}

const Component = ({ children: label, active, onClick }) => {
  const {
    color,
    selectedSection,
    selectedComponent,
    setComponent,
  } = useContext(AppContext)

  return (
    <li
      className={`py-4 flex justify-between items-center hover:bg-gray-50 cursor-pointer ${
        active ? 'bg-gray-50' : ''
      }`}
      onClick={onClick}
    >
      <div className="ml-6">
        <p className="text-sm font-medium text-gray-700">{label}</p>
      </div>
    </li>
  )
}
// {active && <div className={`w-2 h-2 bg-${color}-500 rounded-full`} />}
