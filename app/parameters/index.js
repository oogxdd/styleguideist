import {
  MoonIcon,
  DeviceTabletIcon as TabletIcon,
  DevicePhoneMobileIcon as PhoneIcon,
  ComputerDesktopIcon as DesktopIcon,
} from '@heroicons/react/24/solid'
import { SunIcon, CpuChipIcon as LaptopIcon } from '@heroicons/react/24/outline'
import { Cell } from './cell'

const BASE_WIDTH = 50.8
const BASE_HEIGHT = 42

// small:
// const GRID_WIDTH = (42 + 2) * 5 - 2
const GRID_WIDTH = (42 + 2) * 6 - 2

export const Parameters = () => {
  return (
    <div className="flex flex-col">
      {/* PARAMETERS BORDER */}
      <Label>Border</Label>
      <div className="flex mb-2.5">
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <RectRound className="rounded-none" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <RectRound className="rounded" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <RectRound className="rounded-md" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <RectRound className="rounded-lg" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <RectRound className="rounded-xl" />
        </Cell>
      </div>

      {/* PARAMETERS SPACING */}
      <Label>Spacing</Label>
      <div className="flex mb-2.5">
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <SpacingRect type="xs" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <SpacingRect type="sm" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <SpacingRect type="md" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <SpacingRect type="lg" />
        </Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>
          <SpacingRect type="xl" />
        </Cell>
      </div>

      {/* PARAMETERS FONTS */}
      <Label>Fonts</Label>
      <div className="flex mb-2.5">
        <Cell width={(GRID_WIDTH - 4) / 3}>Heading</Cell>
        <Cell width={(GRID_WIDTH - 4) / 3}>Body</Cell>
        <Cell width={(GRID_WIDTH - 4) / 3}>Interface</Cell>
      </div>

      {/* PARAMETERS SHADOWS */}
      <Label>Shadows</Label>
      <div className="flex mb-2.5">
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>1</Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>2</Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>3</Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>4</Cell>
        <Cell width={(GRID_WIDTH - 4 * 2) / 5}>5</Cell>
      </div>

      {/* PARAMETERS COLORS */}
      <Label>Colors</Label>
      <div className="flex mb-2.5">
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // primary
            background: 'rgb(91, 91, 214)',
          }}
        ></Cell>
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // secondary
            background: 'rgb(35, 175, 208)',
          }}
        ></Cell>
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // bg
            background: 'rgb(32 33 36)',
            border: '1px solid #3c393f',
          }}
        ></Cell>
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // container / card
            background: 'rgb(70 71 76)',
            // border: '1px solid #000',
          }}
        ></Cell>
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // border
            background: 'rgb(60, 57, 63)',
            // border: '1px solid #000',
          }}
        ></Cell>
        <Cell
          width={(GRID_WIDTH - 5 * 2) / 6}
          // height={(GRID_WIDTH - 5 * 2) / 6}
          style={{
            // text (base)
            background: 'rgb(181, 178, 188)',
            // border: '1px solid #000',
          }}
        ></Cell>
      </div>

      {/* PARAMETERS RESPONSIVENESS (DEVICES) */}
      <div className="flex mt-2">
        <Cell width={(GRID_WIDTH - 6) / 4}>
          <DesktopIcon className="h-4 w-4" />
        </Cell>
        <Cell width={(GRID_WIDTH - 6) / 4}>
          <LaptopIcon className="h-4 w-4" />
        </Cell>
        <Cell width={(GRID_WIDTH - 6) / 4}>
          <TabletIcon className="h-4 w-4" />
        </Cell>
        <Cell width={(GRID_WIDTH - 6) / 4}>
          <PhoneIcon className="h-4 w-4" />
        </Cell>
      </div>

      {/* PARAMETERS DARK MODE */}
      <div className="flex">
        <Cell width={(GRID_WIDTH - 2) / 2}>
          <SunIcon className="h-4 w-4" />
        </Cell>
        <Cell width={(GRID_WIDTH - 2) / 2}>
          <MoonIcon className="h-4 w-4" />
        </Cell>
      </div>
    </div>
  )
}

const RectRound = ({ className }) => {
  return (
    <>
      <div
        className={`absolute bottom-0 left-0 border ${className}`}
        style={{
          width: (BASE_WIDTH / 3) * 2,
          height: (BASE_HEIGHT / 3) * 2,
          borderColor: '#e7e7ea',
          // borderTopWidth: 1.5,
          // borderRightWidth: 1.5,
          // borderTopLeftRadius: 4,
          borderBottomLeftRadius: 10,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundColor: '#46474c',
          width: (BASE_WIDTH / 3) * 3,
          height: (BASE_HEIGHT / 3) * 1,
          borderTopLeftRadius: 4,
          borderBottomRightRadius: 10,
          borderBottomLeftRadius: 10,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0"
        style={{
          backgroundColor: '#46474c',
          width: (BASE_WIDTH / 3) * 1,
          height: (BASE_HEIGHT / 3) * 3,
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          borderTopLeftRadius: 10,
        }}
      ></div>
    </>
  )
}

const SpacingRect = ({ type = 'xs' }) => {
  let width
  let height

  if (type === 'xs') {
    width = BASE_HEIGHT * 0.39
    height = BASE_HEIGHT * 0.39
  }
  if (type === 'sm') {
    width = BASE_HEIGHT * 0.46
    height = BASE_HEIGHT * 0.46
  }
  if (type === 'md') {
    width = BASE_HEIGHT * 0.55
    height = BASE_HEIGHT * 0.55
  }
  if (type === 'lg') {
    width = BASE_HEIGHT * 0.69
    height = BASE_HEIGHT * 0.69
  }
  if (type === 'xl') {
    width = BASE_HEIGHT * 0.83
    height = BASE_HEIGHT * 0.83
  }

  return (
    <div
      className={`border`}
      style={{
        width,
        height,

        borderColor: '#e7e7ea',
        opacity: 0.3,
        borderRadius: 3,
      }}
    ></div>
  )
}

const Label = ({ children, style = {} }) => (
  <span
    className="text-sm mb-0.5"
    style={{
      color: '#e7e7ea',
      ...style,
    }}
  >
    {children}
  </span>
)

export default Parameters
