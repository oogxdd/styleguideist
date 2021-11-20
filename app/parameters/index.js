/** @jsxImportSource theme-ui */
import { Color } from './color'
import { Border } from './border'
import { Shadow } from './shadow'
import { Font } from './font'
import { Spacing } from './spacing'
import { Presets } from './presets'

const Parameters = () => (
  <div
    className="max-h-screen overflow-auto"
    style={{ width: 'calc(20rem - 6px)', minWidth: 'calc(20rem - 6px)' }}
  >
    <div className="parameters grid grid-cols-1 gap-x-8 gap-y-10 ml-6 mt-2 min-h-screen">
      <form
        className="block border-r"
        sx={{
          borderColor: 'borderColor',
          paddingRight: 30,
        }}
      >
        <Color open />
        <Border />
        <Shadow open />
        <Spacing />
        <Font open />
        <Presets open />
      </form>
    </div>
  </div>
)

export default Parameters
