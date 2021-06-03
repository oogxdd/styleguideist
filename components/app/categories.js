import { useContext } from 'react'
import { AppContext } from 'context'

const sections = [
  {
    label: 'Atoms',
    value: 'atoms',
  },
  {
    label: 'Molecules',
    value: 'molecules',
  },
  {
    label: 'Organisms',
    value: 'organisms',
  },
  {
    label: 'Templates',
    value: 'templates',
  },
]

const Sections = () => {
  const { selectedSection, setSection } = useContext(AppContext)

  return (
    <div className="border-b h-24 px-16 flex items-center justify-between">
      {sections.map((section) => (
        <Section
          active={section.value === selectedSection}
          onClick={() => setSection(section.value)}
          key={section.value}
        >
          {section.label}
        </Section>
      ))}
    </div>
  )
}

const Section = ({ children, active, onClick }) => (
  <span
    onClick={onClick}
    style={active ? { color: 'blue', textDecoration: 'underline' } : {}}
    className="cursor-pointer hover:underline"
  >
    {children}
  </span>
)

export default Sections
