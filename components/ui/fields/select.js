/** @jsxImportSource theme-ui */
import { useState, useContext, Fragment } from 'react'
import { AppContext } from 'context'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'helpers'
import { fonts } from 'data'

export const Select = () => {
  const { theme, setTheme } = useContext(AppContext)
  const [selected, setSelected] = useState(
    fonts.find((f) => f.label === theme.fonts.body),
  )

  return (
    <Listbox
      value={selected}
      onChange={(font) => {
        setSelected(font)
        setTheme((theme) => ({
          ...theme,
          fonts: { ...theme.fonts, body: font.label },
        }))
      }}
    >
      <div className="relative mb-6">
        <Listbox.Button
          className="relative w-full border rounded-md pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 sm:text-sm"
          sx={{
            borderColor: 'borderColor',
          }}
        >
          <span
            className="block truncate"
            style={{
              fontFamily: selected.label,
            }}
          >
            {selected.label}
          </span>
          {/*
           */}
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon className="w-5 h-5" aria-hidden="true" />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options
            className="absolute w-full py-1 mt-2 overflow-auto text-base rounded-md shadow-lg max-h-90 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border"
            sx={{
              bg: 'background',
              borderColor: 'borderColor',
            }}
          >
            {fonts.map((font, index) => (
              <Listbox.Option
                key={font.value}
                className={({ active }) =>
                  classNames(
                    active ? '' : '',
                    'cursor-default select-none relative py-2 pl-3 pr-9',
                  )
                }
                value={font}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={classNames(
                        selected ? 'font-semibold' : 'font-normal',
                        'block truncate',
                      )}
                      style={{ fontFamily: font.label }}
                    >
                      {font.label}
                    </span>

                    {selected ? (
                      <span
                        className={classNames(
                          active ? '' : '',
                          'absolute inset-y-0 right-0 flex items-center pr-4',
                        )}
                        sx={{ color: 'text' }}
                      >
                        <CheckIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                          sx={{ color: 'text' }}
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
  )
}
