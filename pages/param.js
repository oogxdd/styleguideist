import { useState, Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { PlusSmIcon, MinusSmIcon } from '@heroicons/react/solid'

import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'

import { classNames } from 'helpers'

const people = [
  { id: 1, name: 'Inter', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const Params = () => (
  <div
    className="grid grid-cols-1 gap-x-8 gap-y-10 ml-6 mt-2"
    style={{
      // maxWidth: '16rem',
      maxWidth: 'calc(16rem + 30px)',
      transform: 'scale(0.8)',
      transformOrigin: 'top left',
    }}
  >
    <form
      className="block"
      style={{
        paddingRight: '30px',
        borderRight: '1px solid rgb(229, 231, 235)',
      }}
    >
      <Color open={false} />
      <Shadow open={false} />
      <Border open={false} />
      <Font open={false} />
      <Spacing open={false} />
      <Presets />
    </form>
  </div>
)

const Color = ({ open = true }) => (
  <Disclosure
    as="div"
    className="border-b border-gray-200 py-6"
    defaultOpen={open}
  >
    {({ open }) => (
      <>
        <h3 className="-my-3 flow-root">
          <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
            <span className="font-medium text-gray-900">Color</span>
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
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Primary</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-green-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Secondary</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-indigo-500" />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Background</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-gray-50" />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Container</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Text 1</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-gray-900" />
            </div>
            <div className="flex items-center justify-between">
              <label className="mr-3 text-sm text-gray-600">Text 2</label>
              <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-gray-600" />
            </div>
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
)

const Shadow = ({ open = true }) => {
  const [showCustom, setShowCustom] = useState(false)

  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Shadow</span>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center text-gray-300">
                  1
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  2
                </div>
                <div className="h-10 w-10 border-gray-500 rounded focus:ring-indigo-500 border shadow-lg flex items-center justify-center  text-gray-500">
                  3
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  4
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300">
                  5
                </div>
              </div>

              <div
                className="flex items-center justify-between"
                style={{ marginBottom: '1rem' }}
              >
                <label className="text-sm text-gray-600 w-16">Custom</label>
                <input
                  type="checkbox"
                  className="h-6 w-6 border-gray-300 rounded text-indigo-600 flex items-center justify-center text-xs text-center border"
                  onChange={() => setShowCustom(!showCustom)}
                />
              </div>
              {showCustom && (
                <>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">X</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-gray-800 flex items-center justify-center text-xs text-center focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">Y</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">Radius</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">Blur</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="mr-3 text-sm text-gray-600">Color</label>
                    <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-green-100" />
                  </div>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Border = ({ open = true }) => {
  const [showCustom, setShowCustom] = useState(false)

  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Border</span>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="h-10 w-10 border-gray-300 rounded-none focus:ring-indigo-500 border flex items-center justify-center text-gray-300 text-sm">
                  none
                </div>
                <div className="h-10 w-10 border-gray-300 rounded-md focus:ring-indigo-500 border flex items-center justify-center  text-gray-300 text-sm">
                  sm
                </div>
                <div className="h-10 w-10 border-gray-500 rounded-lg focus:ring-indigo-500 border flex items-center justify-center  text-gray-500 text-sm">
                  md
                </div>
                <div className="h-10 w-10 border-gray-300 rounded-xl focus:ring-indigo-500 border flex items-center justify-center  text-gray-300 text-sm">
                  lg
                </div>
                <div
                  className="h-10 w-10 border-gray-300 rounded-full focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300 text-sm"
                  style={{ borderRadius: '100%' }}
                >
                  full
                </div>
              </div>
              <div
                className="flex items-center justify-between"
                style={{ marginBottom: '1rem' }}
              >
                <label className="text-sm text-gray-600 w-16">Custom</label>
                <input
                  type="checkbox"
                  className="h-6 w-6 border-gray-300 rounded text-indigo-600 flex items-center justify-center text-xs text-center border"
                  onChange={() => setShowCustom(!showCustom)}
                />
              </div>
              {showCustom && (
                <>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">Radius</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-gray-800 flex items-center justify-center text-xs text-center focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm text-gray-600 w-16">Width</label>
                    <input
                      type="range"
                      max="100"
                      value="40"
                      className="-ml-8 "
                    />
                    <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="mr-3 text-sm text-gray-600">Color</label>
                    <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-green-100" />
                  </div>
                </>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Font = ({ open = true }) => {
  const [selected, setSelected] = useState(people[0])

  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Font</span>
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
            <div className="space-y-2">
              <Listbox value={selected} onChange={setSelected}>
                <div className="relative mb-6">
                  <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm z -z-10">
                    <span className="block truncate">{selected.name}</span>
                    {/*
                     */}
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <SelectorIcon
                        className="w-5 h-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                  <Transition
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person, personIdx) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active
                                ? 'text-white bg-indigo-600'
                                : 'text-gray-900',
                              'cursor-default select-none relative py-2 pl-3 pr-9',
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'block truncate',
                                )}
                              >
                                {person.name}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4',
                                  )}
                                >
                                  <CheckIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </Listbox>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Size</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-gray-800 flex items-center justify-center text-xs text-center focus:ring-indigo-500 border" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Weight</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Kerning</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Leading</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Uppercase</label>
                <input
                  type="checkbox"
                  className="h-6 w-6 border-gray-300 rounded text-indigo-600 flex items-center justify-center text-xs text-center border"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="mr-3 text-sm text-gray-600">Color</label>
                <div className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border bg-gray-800" />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Spacing = ({ open = true }) => {
  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Spacing</span>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center text-gray-300">
                  <div className="h-3 w-3 border-gray-200 rounded-sm border"></div>
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  <div className="h-5 w-5 border-gray-200 rounded-sm border"></div>
                </div>
                <div className="h-10 w-10 border-gray-500 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-500">
                  <div className="h-7 w-7 border-gray-500 rounded-sm border"></div>
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  <div className="h-8 w-8 border-gray-200 rounded-sm border"></div>
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300"></div>
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Vertical</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-gray-800 flex items-center justify-center text-xs text-center focus:ring-indigo-500 border" />
              </div>
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Horizontal</label>
                <input type="range" max="100" value="40" className="-ml-8 " />
                <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Presets = ({ open = true }) => {
  return (
    <Disclosure
      as="div"
      className="border-b border-gray-200 py-6"
      defaultOpen={open}
    >
      {({ open }) => (
        <>
          <h3 className="-my-3 flow-root">
            <Disclosure.Button className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500">
              <span className="font-medium text-gray-900">Presets</span>
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
            <div className="space-y-2">
              <div className="flex items-center justify-between mb-6">
                <div className="h-10 w-10 border-indigo-500 rounded focus:ring-indigo-500 border-2 flex items-center justify-center text-gray-400">
                  DE
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  <img
                    src="/img/logo/twitter.svg"
                    alt="Twitter"
                    className="w-7 h-7"
                  />
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-500">
                  <img
                    src="/img/logo/spotify.svg"
                    alt="Spotify"
                    className="w-7 h-7"
                  />
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border flex items-center justify-center  text-gray-300">
                  <img
                    src="/img/logo/vercel.svg"
                    alt="Vercel"
                    className="w-7 h-7"
                  />
                </div>
                <div className="h-10 w-10 border-gray-300 rounded focus:ring-indigo-500 border  flex items-center justify-center  text-gray-300">
                  CU
                </div>
              </div>
              {/*
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-600 w-16">Custom</label>
                <input className="h-6 w-6 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500 border" />
              </div>
              */}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Params
