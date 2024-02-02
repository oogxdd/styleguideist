import { useApp } from 'context'
import { atoms, molecules, organisms, templates } from 'data/components'

export const ComponentPreview = () => {
  const { selectedComponent: comp } = useApp()

  return (
    <div
      className="flex flex-col justify-center items-center w-full h-full"
      sx={{
        background: '#222225',
      }}
    >
      {atoms.map(
        (atom) =>
          comp.value === atom.value && <atom.component key={atom.value} />,
      )}
      {molecules.map(
        (molecule) =>
          comp.value === molecule.value && (
            <molecule.component key={molecule.value} molecule={molecule} />
          ),
      )}
      {organisms.map(
        (organism) =>
          comp.value === organism.value && (
            <organism.component key={organism.value} />
          ),
      )}
      {templates.map(
        (template) =>
          comp.value === template.value && (
            <template.component key={template.value} />
          ),
      )}
    </div>
  )
}

export default ComponentPreview
