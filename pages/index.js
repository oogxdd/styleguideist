import { useState, useContext } from 'react'
import { AppContext, ThemeContext, UIContext } from 'context'

import Preview from 'app/preview'
import Parameters from 'app/parameters'
import Modal from 'app/navigation2/modal'

import { downloadFile, getColorPair } from 'helpers'

import ReactTooltip from 'react-tooltip'

import {
  PlusIcon,
  ShareIcon,
  HeartIcon as HeartIconFilled,
} from '@heroicons/react/solid'
import {
  HeartIcon,
  ArrowsExpandIcon,
  // ArrowsCollapseIcon,
  DeviceMobileIcon,
  ExternalLinkIcon,
  RefreshIcon,
} from '@heroicons/react/outline'

import { fonts } from 'data'

import Navigation from 'app/navigation2'
import AddDropdown from 'app/navigation2/add-dropdown'

function randomFloat(min, max, decimals = 2) {
  const str = (Math.random() * (max - min) + min).toFixed(decimals)

  return parseFloat(str)
}

function randomInt(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// downloadFile(`theme.js`, JSON.stringify(theme))

const App = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    selectedComponent,
    setSelectedComponent,
  } = useContext(AppContext)
  const { theme, setTheme } = useContext(ThemeContext)
  const {
    setShowExportModal,
    showExportModal,
    fullscreen,
    setFullscreen,
    device,
    setDevice,
  } = useContext(UIContext)

  return (
    <>
      <div className="flex justify-between max-h-screen h-screen items-center">
        {!fullscreen && (
          <div
            className="flex flex-col justify-between py-8 pl-4 pr-4 border-r h-full z-1"
            style={{
              // width: 200,
              minWidth: 220,
              zIndex: '5',

              transform: 'scale(0.9)',
              transformOrigin: 'center left',
              minHeight: '111.111111111vh',
            }}
            sx={{
              borderColor: 'borderColor',
            }}
          >
            <Logo />
            <Navigation />
            <AddDropdown />
          </div>
        )}

        <div
          className="flex flex-col items-center justify-between h-full"
          style={{
            position: 'fixed',
            left: fullscreen ? 0 : 198,
            top: 0,
            width: fullscreen ? '100vw' : 'calc(100vw - 433px)',
            maxWidth: fullscreen ? '100vw' : 'calc(100vw - 433px)',
          }}
        >
          <div
            className="flex justify-self-start self-end py-2 px-4 fixed z-10"
            style={{
              top: 0,
              right: fullscreen ? 0 : 234,
            }}
          >
            <div
              data-tip
              data-for={`device`}
              className="mr-1 cursor-pointer"
              onClick={() => {
                if (device === 'fluid') {
                  setDevice('desktop')
                }
                if (device === 'desktop') {
                  setDevice('mobile')
                }
                if (device === 'mobile') {
                  setDevice('tablet')
                }
                if (device === 'tablet') {
                  setDevice('fluid')
                }
              }}
            >
              <DeviceMobileIcon className="h-5 w-5" />
            </div>
            <div
              onClick={() => setFullscreen(!fullscreen)}
              data-tip
              data-for={`fullscreen`}
              className="cursor-pointer"
            >
              {fullscreen ? (
                <ArrowsExpandIcon className="h-5 w-5" />
              ) : (
                <ArrowsExpandIcon className="h-5 w-5" />
              )}
              <ReactTooltip
                id={`fullscreen`}
                effect="solid"
                place="bottom"
                // className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 !important"
                className="sg-tooltip"
              >
                <span className="select-none">Fullscreen</span>
              </ReactTooltip>
              <ReactTooltip
                id={`device`}
                effect="solid"
                place="bottom"
                // className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700 !important"
                className="sg-tooltip"
              >
                <span className="select-none">Device: {device}</span>
              </ReactTooltip>
            </div>
          </div>
          {/* 
        <div
          className="flex justify-self-center justify-center items-center border border-gray-700 rounded-lg"
          sx={{
            borderColor: 'borderColor',
          }}
          style={{
            width: 900,
            height: 600,
            transform: 'scale(0.6)',
            backgroundImage: `url(/img/blueberry.png)`,
            backgroundSize: 'contain',
            backgroundPepeat: 'no-repeat',
            // background: 'black',
            //
          }}
        >
        </div>
        */}
          <div />
          <Preview />
        </div>
        {/*
         */}

        {!fullscreen && (
          <div
            className="flex flex-col justify-between border-l h-full"
            sx={{
              borderColor: 'borderColor',
            }}
            style={{
              // width: 350,
              // minWidth: 300,
              minWidth: 260,

              transform: 'scale(0.9)',
              transformOrigin: 'center right',
              minHeight: '111.111111111vh',
            }}
          >
            <Parameters />
            <div
              className="flex justify-between border-t"
              sx={{
                borderColor: 'borderColor',
              }}
              style={
                {
                  // transform: 'scale(0.9)',
                  // transformOrigin: 'bottom right',
                }
              }
            >
              <div
                className="flex flex-col items-center justify-center border-r w-1/4 py-4 group cursor-pointer"
                sx={{
                  borderColor: 'borderColor',
                }}
                onClick={() => {
                  downloadFile(`theme.js`, JSON.stringify(theme))
                }}
              >
                <HeartIcon className="w-4 h-4 block group-hover:hidden" />
                <HeartIconFilled
                  className="w-4 h-4 hidden group-hover:block"
                  // sx={{ fill: 'primary' }}
                />
                {/*
            <span className="text-xs mt-0.5">Save</span>
            */}
              </div>
              <div
                className="flex flex-col items-center justify-center border-r w-1/4 py-4 cursor-pointer group"
                sx={{
                  borderColor: 'borderColor',
                }}
                onClick={() => {
                  // Generate
                  const colors = getColorPair()
                  setTheme((theme) => {
                    // 1. colors
                    theme.colors.background = colors[0]
                    theme.colors.card = colors[0]
                    theme.colors.borderColor = colors[1]
                    theme.colors.text = colors[2]
                    theme.colors.text2 = colors[2]
                    theme.colors.primary = colors[3]
                    theme.colors.secondary = colors[4]

                    // 2. borders
                    const br = randomFloat(0, 8)
                    const values = [
                      br + 'px',
                      br * 2 + 'px',
                      br * 4 + 'px',
                      br * 6 + 'px',
                      br * 8 + 'px',
                      br * 12 + 'px',
                      br * 24 + 'px',
                    ]
                    theme.border = `${randomFloat(0, 6)}px solid black`
                    theme.radii = values

                    // 3. font
                    const fs = randomFloat(9, 24)
                    const fontSizes = [
                      (fs * 11) / 15,
                      (fs * 13) / 15,
                      fs,
                      (fs * 18) / 15,
                      (fs * 21) / 15,
                      (fs * 24) / 15,
                      (fs * 28) / 15,
                      (fs * 48) / 15,
                    ]
                    theme.fontSizes = fontSizes

                    var randomFont = fonts[randomInt(0, fonts.length - 1)]
                    var randomFontSecondary =
                      fonts[randomInt(0, fonts.length - 1)]
                    theme.fonts = {
                      body: randomFont.label,
                      heading: randomFontSecondary.label,
                    }

                    // 4. spacing

                    const sx = randomFloat(1.5, 4)
                    const sy = randomFloat(1.5, 4)

                    const xSizes = [
                      sx,
                      2 * sx,
                      4 * sx,
                      6 * sx,
                      8 * sx,
                      10 * sx,
                      12 * sx,
                      16 * sx,
                      24 * sx,
                      32 * sx,
                      64 * sx,
                      128 * sx,
                      256 * sx,
                      512 * sx,
                    ]

                    const ySizes = [
                      sy,
                      2 * sy,
                      4 * sy,
                      6 * sy,
                      8 * sy,
                      10 * sy,
                      12 * sy,
                      16 * sy,
                      24 * sy,
                      32 * sy,
                      64 * sy,
                      128 * sy,
                      256 * sy,
                      512 * sy,
                    ]
                    theme.space.y = ySizes
                    theme.space.x = xSizes
                    // x
                    // y
                  })
                }}
              >
                <RefreshIcon
                  className="w-4 h-4 duration-500 group-hover:rotate-180"
                  // sx={{
                  //     'hover'
                  //   borderColor: 'borderColor',
                  // }}
                />
              </div>
              <div
                className="flex flex-col items-center justify-center border-r w-1/4 py-4 cursor-pointer"
                sx={{
                  borderColor: 'borderColor',
                }}
                onClick={() => {
                  alert(
                    'Send theme preview to your coworker. (not implemented)',
                  )
                }}
              >
                <ShareIcon
                  className="w-4 h-4"
                  sx={{
                    ':hover': {
                      color: 'primary',
                    },
                  }}
                />
                {/*
            <span className="text-xs mt-0.5">Share</span>
            */}
              </div>
              <div
                className="flex flex-col items-center justify-center w-1/4 py-4 cursor-pointer"
                sx={{
                  ':hover': {
                    color: 'primary',
                  },
                }}
                onClick={() => setShowExportModal(true)}
              >
                <ExternalLinkIcon className="w-4 h-4" />
                {/*
            <span className="text-xs mt-0.5">Export</span>
            */}
              </div>
            </div>
          </div>
        )}
      </div>

      <Modal />
    </>
  )
}

const Logo = () => (
  <h1
    className="text-xl font-extrabold tracking-tight"
    sx={{
      color: 'text',
    }}
    style={
      {
        // transform: 'scale(0.9)',
        // transformOrigin: 'top left',
      }
    }
  >
    Styleguide.ist
  </h1>
)

export default App
