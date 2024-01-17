// small:
// const GRID_WIDTH = (42 + 2) * 5 - 2
const GRID_WIDTH = (42 + 2) * 6 - 2

export const Cell = ({
  children,
  type = 'default',
  width = (GRID_WIDTH - 5 * 2) / 6,
  height = 42,
  style,
  active = false,
}) => (
  <div
    className="text-xs font-medium tracking-wide w-8 h-8 flex items-center justify-center border-transparent mr-[2px] mb-[2px] relative"
    sx={{
      border: '2px solid',
      borderColor: 'transparent',

      ...(type === 'default' && { ...defaultStyles }),
      ...(type === 'atom' && { ...atomStyles }),
      ...(type === 'molecule' && { ...moleculeStyles }),
      ...(type === 'organism' && { ...organismStyles }),
      ...(type === 'template' && { ...templateStyles }),
      ...(type === 'page' && { ...pageStyles }),

      // borderRadius: 4,
      borderRadius: '4px',
      width: width || 42,
      height: height || 42,
      fontSize: '13px',

      cursor: 'pointer',

      ...style,

      ...(active && {
        // border: '1px solid secondary',
        // borderColor: 'secondary',
        borderColor: '#e7e7ea',
        borderWidth: '1px',
      }),
    }}
  >
    {children}
  </div>
)

const defaultStyles = {
  backgroundColor: '#46474c',
  // borderColor: '#e7e7ea',
  color: '#e7e7ea',
  ':hover': {
    background: '#393a3e',
  },
}

const atomStyles = {
  backgroundColor: '#433c65',
  borderColor: '#f3e8fd',
  color: '#f3e8fd',
  stroke: '#f3e8fd',
}

const moleculeStyles = {
  backgroundColor: '#244d57',
  borderColor: '#d8f8ff',
  color: '#d8f8ff',
}

const organismStyles = {
  backgroundColor: '#622e39',
  borderColor: '#ffe7e7',
  color: '#ffe7e7',
}

const templateStyles = {
  backgroundColor: '#523e1b',
  borderColor: '#fef7e0',
  color: '#fef7e0',
}

const pageStyles = {
  backgroundColor: '#2a4165',
  borderColor: '#e2eeff',
  color: '#e2eeff',
}
