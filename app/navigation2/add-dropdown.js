import { useState } from 'react'
import { PlusIcon, ShareIcon } from '@heroicons/react/solid'

const AddButton = () => {
  const [show, setShow] = useState(false)
  const [section, setSection] = useState(undefined)

  return (
    <>
      <div
        className="border rounded-md w-min cursor-pointer hover:border-gray-500"
        sx={{
          borderColor: 'borderColor',
        }}
        style={{
          // transform: 'scale(0.9)',
          // transformOrigin: 'bottom left',

          marginLeft: '12px',
          padding: '10px',
          // border-width: 1px;
          // border-color: #e5e7eb;
        }}
        onClick={() => {
          if (show) {
            setShow(false)
            setSection(undefined)
          } else {
            setShow(!show)
          }
        }}
      >
        <PlusIcon className="w-5 h-5" />
      </div>
      {show && (
        <div
          className="fixed bottom-8 border rounded-md flex flex-col w-48 bg-clip-border text-base"
          sx={{
            borderColor: 'borderColor',
            background: 'background',
            text: 'text',
            // ':hover': {
            //   background: 'rgba(0, 0, 0, .1)',
            // },
          }}
          style={{ left: 76, zIndex: 15 }}
        >
          <div
            className="px-6 py-3 border-b rounded-t-md bg-clip-border cursor-pointer"
            onClick={() => setSection('atoms')}
          >
            Atoms
          </div>
          <div
            className="px-6 py-3 border-b bg-clip-border cursor-pointer"
            onClick={() => setSection('molecules')}
          >
            Molecules
          </div>
          <div
            className="px-6 py-3 border-b rounded-b-md bg-clip-border cursor-pointer"
            onClick={() => setSection('organisms')}
          >
            Organisms
          </div>
        </div>
      )}
      {show && section === 'atoms' && (
        <div
          className="fixed bottom-8 border rounded-md flex flex-col w-48 bg-clip-border text-base z-5"
          style={{ left: 276 }}
          sx={{
            borderColor: 'borderColor',

            background: 'background',
            text: 'text',
          }}
        >
          {atoms.map((atom) => (
            <a
              className="flex items-center px-6 py-3 border-b rounded-t-md bg-clip-border cursor-pointer"
              href={atom.link}
              target="_blank"
              onClick={() => {
                setShow(false)
                setSection(undefined)
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${atom.img})`,
                }}
              />
              {atom.label}
            </a>
          ))}
        </div>
      )}
      {show && section === 'molecules' && (
        <div
          className="fixed bottom-8 border rounded-md flex flex-col w-48 bg-clip-border text-base"
          style={{ left: 276 }}
          sx={{
            borderColor: 'borderColor',
            background: 'background',
            text: 'text',
          }}
        >
          {molecules.map((molecule) => (
            <a
              className="flex items-center px-6 py-3 border-b rounded-t-md bg-clip-border cursor-pointer"
              href={molecule.link}
              target="_blank"
              onClick={() => {
                setShow(false)
                setSection(undefined)
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${molecule.img})`,
                }}
              />
              {molecule.label}
            </a>
          ))}
        </div>
      )}
      {show && section === 'organisms' && (
        <div
          className="fixed z-10 bottom-8 border rounded-md flex flex-col w-48 bg-clip-border text-base"
          style={{ left: 276 }}
          sx={{
            borderColor: 'borderColor',
            background: 'background',
            text: 'text',
          }}
        >
          {organisms.map((organism) => (
            <a
              className="flex items-center px-6 py-3 border-b rounded-t-md bg-clip-border cursor-pointer"
              href={organism.link}
              target="_blank"
              onClick={() => {
                setShow(false)
                setSection(undefined)
              }}
            >
              <div
                style={{
                  backgroundImage: `url(${organism.img})`,
                }}
              />
              {organism.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}

const atoms = [
  {
    label: 'Input',
    link: 'https://tailwindui.com/components/application-ui/forms/input-groups',
    img: '',
  },
  {
    label: 'Select',
    link: 'https://tailwindui.com/components/application-ui/forms/select-menus',
    img: '',
  },
  {
    label: 'Textarea',
    link: 'https://tailwindui.com/components/application-ui/forms/textareas',
    img: '',
  },
  {
    label: 'Radio group',
    link: 'https://tailwindui.com/components/application-ui/forms/radio-groups',
    img: '',
  },
  {
    label: 'Toggle',
    link: 'https://tailwindui.com/components/application-ui/forms/toggles',
    img: '',
  },
  {
    label: 'Checkbox',
    link: 'https://tailwindui.com/components/application-ui/forms/checkboxes',
    img: '',
  },
]

const molecules = [
  {
    label: 'Sidebar',
    link:
      'https://tailwindui.com/components/application-ui/navigation/sidebar-navigation',
    img: '',
  },
  {
    label: 'Breadcrumbs',
    link:
      'https://tailwindui.com/components/application-ui/navigation/breadcrumbs',
    img: '',
  },
  {
    label: 'Tabs',
    link: 'https://tailwindui.com/components/application-ui/navigation/tabs',
    img: '',
  },
  {
    label: 'Pagination',
    link:
      'https://tailwindui.com/components/application-ui/navigation/pagination',
    img: '',
  },
  {
    label: 'Modal',
    link: 'https://tailwindui.com/components/application-ui/overlays/modals',
    img: '',
  },
  {
    label: 'Slide-over',
    link:
      'https://tailwindui.com/components/application-ui/overlays/slide-overs',
    img: '',
  },
  {
    label: 'Notification',
    link:
      'https://tailwindui.com/components/application-ui/overlays/notifications',
    img: '',
  },
]

const organisms = [
  {
    label: 'Blog Section',
    link: 'https://tailwindui.com/components/marketing/sections/blog-sections',
    img: '',
  },
  {
    label: 'Contact Section',
    link:
      'https://tailwindui.com/components/marketing/sections/contact-sections',
    img: '',
  },
  {
    label: 'Newsletter Section',
    link:
      'https://tailwindui.com/components/marketing/sections/newsletter-sections',
    img: '',
  },
  {
    label: 'Page Hero',
    link: 'https://tailwindui.com/components/marketing/sections/heroes',
    img: '',
  },
]

export default AddButton
