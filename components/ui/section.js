/** @jsxImportSource theme-ui */
import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid'
import { PlusCircleIcon } from '@heroicons/react/solid'
import { Checkbox } from 'components/ui'

export const Section = ({
  open = false,
  name = 'Section',
  children,
  customOptions,
  showCustom,
  showPlus = false,
}) => {
  const [show, setShow] = useState(showCustom)

  return (
    <Disclosure
      as="div"
      className="border-b py-6"
      defaultOpen={open}
      sx={{
        borderColor: 'borderColor',
      }}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 w-full flex items-center justify-between text-sm">
              <span className="font-medium flex items-center">{name}</span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
          </h3>
          <Disclosure.Panel className="pt-6">
            <div className="space-y-2">
              {children}
              {customOptions && (
                <Checkbox
                  label="Custom"
                  value={show}
                  onChange={(e) => setShow(!show)}
                />
              )}
              {show && customOptions}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
