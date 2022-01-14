/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'

import { Color } from './color'
import { Border } from './border'
import { Shadow } from './shadow'
import { Font } from './font'
import { Spacing } from './spacing'
import { Presets } from './presets'

const Parameters = () => {
  const { theme, setTheme } = useContext(AppContext)
  console.log(theme)

  return (
    <div
      className="max-h-screen overflow-hidden"
      style={{
        // width: 'calc(20rem - 6px)',
        // minWidth: 'calc(20rem - 6px)'
        width: 'calc(18rem - 0px)',
        // minWidth: 'calc(16rem - 0px)',
        minWidth: 'calc(18rem - 0px)',
      }}
    >
      <div
        className="parameters grid grid-cols-1 gap-x-8 gap-y-10 pt-0 min-h-screen overflow-scroll"
        style={{
          maxHeight: '125vh',
          marginLeft: '-31px',
        }}
      >
        <form
          className="block border-l pt-2 pb-6"
          sx={{
            borderColor: 'borderColor',
            // paddingRight: 30,
            minHeight: '125vh',
          }}
        >
          {/*
          <input
            value={theme.atoms.card.width}
            onChange={(e) =>
              setTheme((theme) => {
                console.log(e.target.value)
                theme.atoms.card.width = +e.target.value
              })
            }
          />
          */}
          <Color open />
          <Font />
          <Border />
          <Shadow />
          <Spacing />
          <Presets open />
        </form>
      </div>
    </div>
  )
}

export default Parameters
