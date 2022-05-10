/** @jsxImportSource theme-ui */
import { useState, useContext, Fragment, useEffect } from 'react'
import { ThemeContext } from 'context'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { classNames } from 'helpers'
import { fonts as defaultFonts } from 'data'
import { googleFonts } from 'data/fonts/google'
import { allGoogleFonts } from 'data/fonts/all-google-fonts'
import axios from 'axios'

const GOOGLE_FONTS_API_KEY = 'AIzaSyCOzhRqd9pr-kJcQimmRO38qdfV2su6yVQ'

export const Select = () => {
  const { theme, setTheme, setGfont } = useContext(ThemeContext)
  const [selected, setSelected] = useState(
    defaultFonts.find((f) => f.label === theme.fonts.body),
  )
  const [fonts, setFonts] = useState([])
  // const [fonts, setFonts] = useState(defaultFonts)

  // console.log('with values more than 2')
  // console.log(
  //   allGoogleFonts
  //     .filter((f) => Object.values(f.files).length > 3)
  //     .filter((f) => !f.variants.includes('italic')),
  // )

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://www.googleapis.com/webfonts/v1/webfonts?key=${GOOGLE_FONTS_API_KEY}`,
  //     )
  //     .then((r) => {
  //       // console.log(r.data.items)
  //       setFonts(r.data.items)
  //     })
  // }, [])

  useEffect(() => {
    let fontStyles = document.createElement('style')
    googleFonts.map((font) => {
      if (Object.keys(font.files).length > 0) {
        for (const [key, value] of Object.entries(font.files)) {
          // console.log(`${key}: ${value}`);
          fontStyles.appendChild(
            document.createTextNode(`
              @font-face {
                font-family: "${font.family}";
                src: url("${value}");
                font-weight: ${key};
              }
            `),
          )
        }
      } else {
        fontStyles.appendChild(
          document.createTextNode(`
          @font-face {
            font-family: "${font.family}";
            src: url("${font.files[Object.keys(font.files)[0]]}");
          }
        `),
        )
      }
    })
    document.head.appendChild(fontStyles)
  }, [])

  return (
    <Listbox
      value={selected}
      onChange={(font) => {
        console.log(font)
        setGfont(font.family)
        // document.body.style.fontFamily = font.family
        // setSelected(font)
        setTheme((theme) => ({
          ...theme,
          fonts: { ...theme.fonts, body: font.family, heading: font.family },
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
            {googleFonts.map((font, index) => (
              <Listbox.Option
                key={font.family}
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
                      style={{ fontFamily: font.family }}
                    >
                      {font.family}
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
