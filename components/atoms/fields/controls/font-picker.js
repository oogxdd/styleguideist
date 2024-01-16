import { useState, useContext, Fragment, useEffect } from 'react'
import { ThemeContext } from 'context'
import { Listbox, Transition } from '@headlessui/react'
import {
  CheckIcon,
  ChevronUpDownIcon as SelectorIcon,
} from '@heroicons/react/24/solid'
import { classNames } from 'helpers'
import { fonts } from 'data'
import axios from 'axios'

const GOOGLE_FONTS_API_KEY = 'AIzaSyCOzhRqd9pr-kJcQimmRO38qdfV2su6yVQ'

export const FontPicker = ({ onChange, value }) => {
  const { theme, setTheme } = useContext(ThemeContext)
  const [selected, setSelected] = useState(
    value
      ? fonts.find((f) => f.label === value)
      : fonts.find((f) => f.label === theme.fonts.body),
  )

  return (
    <Listbox
      value={selected}
      onChange={(font) => {
        setSelected(font)
        if (onChange) {
          onChange(font.label)
        } else {
          setTheme((theme) => ({
            ...theme,
            fonts: { ...theme.fonts, body: font.label, heading: font.label },
          }))
        }
      }}
    >
      <div className="relative mb-6">
        <Listbox.Button
          className="relative w-full border rounded-md pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 sm:text-sm cursor-pointer"
          sx={{
            border: `1px solid ${theme.colors.borderColor}`,
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
            className="absolute w-full py-1 mt-2 overflow-auto text-base rounded-md shadow-lg max-h-90 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border z-10"
            sx={{
              bg: 'background',
              borderColor: 'borderColor',
            }}
          >
            {fonts.map((font, index) => (
              <Listbox.Option
                key={font.value}
                className={
                  'cursor-pointer select-none relative py-2 pl-3 pr-9 text-md'
                }
                sx={{
                  '&:hover': {
                    color: 'background',
                    backgroundColor: 'text',
                  },
                }}
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

// <style global jsx>{`
//   ${googleFonts.map(
//     (font) => `
//     @font-face {
//       font-family: '${font.family}';
//       src: url("${font.files[Object.keys(font.files)[0]]}");
//     }
//   `,
//   )}
// `}</style>

// * { font-family: '${
//   fonts.find((f) => f.label === theme.fonts.body).label
// }' !important; }
