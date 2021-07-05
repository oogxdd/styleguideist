import { useContext } from 'react'
import { AppContext } from 'context'

const tabs = [
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Tabs() {
  const { color, radius, selectedSection, setSection } = useContext(AppContext)

  return (
    <div className="flex justify-center items-center h-16 mt-1">
      <div className="block">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <a
              key={tab.label}
              onClick={() => setSection(tab.value)}
              className={classNames(
                tab.value === selectedSection
                  ? `bg-${color}-100 text-${color}-700`
                  : 'text-gray-500 hover:text-gray-700',
                `px-5 py-2 font-medium text-sm rounded-${radius} cursor-pointer`,
              )}
              aria-current={tab.current ? 'page' : undefined}
            >
              {tab.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  )
}

// const Sections = () => {
//   const { selectedSection, setSection } = useContext(AppContext)

//   return (
//     <div className="h-24 px-16 flex items-center justify-between">
//       {sections.map((section) => (
//         <Section
//           active={section.value === selectedSection}
//           onClick={() => setSection(section.value)}
//           key={section.value}
//         >
//           {section.label}
//         </Section>
//       ))}
//     </div>
//   )
// }

// const Section = ({ children, active, onClick }) => (
//   <span
//     onClick={onClick}
//     style={active ? { color: 'blue', textDecoration: 'underline' } : {}}
//     className="cursor-pointer hover:underline"
//   >
//     {children}
//   </span>
// )

// export default Sections
