import { Disclosure } from '@headlessui/react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/solid'

const colors = ['red', 'yellow', 'green', 'blue', 'indigo', 'purple', 'pink']

export const Section = ({ open = false, name = 'Section', children }) => {
  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">{name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-2">{children}</div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
