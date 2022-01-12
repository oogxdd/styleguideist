/** @jsxImportSource theme-ui */
import { useContext, useEffect } from 'react'
import { AppContext } from 'context'
import { Themed } from 'theme-ui'

import { Button } from 'components/atoms'
import { atoms, molecules, organisms, templates } from 'data'

// import html2canvas from 'html2canvas'

const Preview = () => {
  const { selectedComponent, previewComponent } = useContext(AppContext)

  // useEffect(() => {
  //   html2canvas(document.body).then((canvas) => {
  //     document.getElementById('canvas').appendChild(canvas)
  //     // document.body.appendChild(canvas)
  //   })
  // }, [])

  return (
    <div
      className="flex flex-row items-center w-full h-screen overflow-auto py-0"
      sx={{ bg: 'background' }}
    >
      <div
        className="flex justify-center w-full h-full relative w-full items-center"
        id="canvas"
      >
        {atoms.map((atom) => {
          if (selectedComponent === atom.value) {
            return <atom.component key={atom.value} />
          }
        })}
        {molecules.map((molecule) => {
          if (selectedComponent === molecule.value) {
            return <molecule.component key={molecule.value} />
          }
        })}
        {organisms.map((organism) => {
          if (selectedComponent === organism.value) {
            return <organism.component key={organism.value} />
          }
        })}
        {templates.map((template) =>
          template.pages.map((page) => {
            if (selectedComponent === page.value) {
              return <page.component key={template.value} />
            }
          }),
        )}
      </div>
    </div>
  )
}

// return (
//   <div sx={{ bg: 'background' }} className="w-full">
//     {atoms.map((atom) => {
//       // if (previewComponent === atom.value) {
//       //   return <atom.component />
//       // }
//       if (!previewComponent && selectedComponent === atom.value) {
//         return <atom.component key={atom.value} />
//       }
//     })}
//     {molecules.map((molecule) => {
//       // if (previewComponent === molecule.value) {
//       //   return <molecule.component />
//       // }
//       if (!previewComponent && selectedComponent === molecule.value) {
//         return <molecule.component key={molecule.value} />
//       }
//     })}
//     {organisms.map((organism) => {
//       // if (previewComponent === organism.value) {
//       //   return <organism.component />
//       // }
//       if (!previewComponent && selectedComponent === organism.value) {
//         return <organism.component key={organism.value} />
//       }
//     })}
//     {templates.map((template) =>
//       template.pages.map((page) => {
//         // if (previewComponent === page.value) {
//         //   return <page.component />
//         // }
//         if (!previewComponent && selectedComponent === page.value) {
//           return <page.component key={template.value} />
//         }
//       }),
//     )}
//   </div>
// )

export default Preview
