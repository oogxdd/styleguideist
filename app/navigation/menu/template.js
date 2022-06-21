/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import Component from './component'

const Template = ({ template }) => {
  const { selectedComponent, setSelectedComponent } = useContext(AppContext)
  const isSelected = false
  return null

  // if (!component.enabled) return null
  return (
    <div className="flex flex-col">
      <span
        sx={{
          color: isSelected ? 'primary' : 'text',
          display: template.enabled ? 'block' : 'hidden',
          opacity: '0.3',
          // ':hover': { color: 'primary' },
        }}
        className="mb-8 underline"
      >
        {template.label}
      </span>
      <div className="flex flex-col">
        {template.pages.map((page) => (
          <Component component={page} key={page.value} />
        ))}
      </div>
    </div>
  )
  // return (
  //   <div className="flex flex-col">
  //     <label className="mr-3 text-sm underline" key={component.value}>
  //       {component.label}
  //     </label>
  //     {component.pages && (
  //       <ul className="list-disc mt-4 space-y-1.5 mb-4">
  //         {component.pages.map((page) => (
  //           <li
  //             className="mr-3 text-sm cursor-pointer"
  //             key={component.value}
  //             onClick={() => setSelectedComponent(page)}
  //             sx={
  //               selectedComponent.value === page.value
  //                 ? { color: 'primary', ':hover': { color: 'primary' } }
  //                 : { ':hover': { color: 'primary' } }
  //             }
  //           >
  //             {page.label}
  //           </li>
  //         ))}
  //       </ul>
  //     )}
  //   </div>
  // )
}

export default Template
