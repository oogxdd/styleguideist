const defaultStyles = {
  backgroundColor: '#46474c',
  borderColor: '#e7e7ea',
  color: '#e7e7ea',
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

export const ComponentsTable = () => {
  return (
    <div className="flex flex-col">
      <Label style={{ opacity: 0 }}>Components</Label>
      <div className="flex">
        <Cell type="atom">BTN</Cell>
        <Cell type="atom">INPT</Cell>
        <Cell type="atom">SLCT</Cell>
        <Cell type="atom">IMG</Cell>
        <Cell type="atom">AV</Cell>
        <Cell type="atom">H</Cell>
        <Cell type="atom">P</Cell>
        <Cell type="atom">L</Cell>
        <Cell type="atom">CPT</Cell>
        <Cell type="atom">CRD</Cell>
        <Cell type="atom">CNTR</Cell>
      </div>
      <div className="flex">
        <Cell type="molecule">POST</Cell>
        <Cell type="molecule">FRM</Cell>
        <Cell type="molecule">FDI</Cell>
      </div>
      <div className="flex">
        <Cell type="organism">FEED</Cell>
        <Cell type="organism">FRM</Cell>
        <Cell type="organism">BLG</Cell>
      </div>

      <div className="flex">
        <Cell type="template">STK</Cell>
        <Cell type="template">SIDE</Cell>
        <Cell type="template">COL</Cell>
      </div>
      <div className="flex">
        <Cell type="page">HOM</Cell>
        <Cell type="page">ABT</Cell>
        <Cell type="page">CNT</Cell>
        <Cell type="page">PRD</Cell>
        <Cell type="page">BLG</Cell>
        <Cell type="page">LOG</Cell>
        <Cell type="page">REG</Cell>
      </div>

      <div className="flex flex-col space-y-3.5 mt-7">
        <div className="flex space-x-5">
          <GroupLabel groupStyles={atomStyles} label="Atoms" />
          <GroupLabel groupStyles={moleculeStyles} label="Molecules" />
          <GroupLabel groupStyles={organismStyles} label="Organisms" />
          <GroupLabel groupStyles={templateStyles} label="Templates" />
          <GroupLabel groupStyles={pageStyles} label="Pages" />
        </div>
      </div>
    </div>
  )
}

// <div className="flex space-x-5">
// </div>
// <div className="flex space-x-5">
// </div>

const GroupLabel = ({ groupStyles = atomStyles, label = 'Label' }) => (
  <div className="flex items-center space-x-2">
    <div
      className="w-4 h-4 rounded-full border-2"
      style={{
        // borderColor: 'transparent',
        // borderColor: atomStyles.borderColor,
        borderColor: groupStyles.backgroundColor,
        // backgroundColor: atomStyles.backgroundColor,
      }}
    />
    <span
      className="text-sm"
      style={{
        color: '#e7e7ea',
      }}
    >
      {label}
    </span>
  </div>
)

// const GRID_WIDTH = (42 + 2) * 5 - 2
const GRID_WIDTH = (42 + 2) * 6 - 2

const Cell = ({
  children,
  type = 'default',
  width = (GRID_WIDTH - 5 * 2) / 6,
  height = 42,
  style,
}) => (
  <div
    className="text-xs font-medium tracking-wide w-8 h-8 flex items-center justify-center border-transparent mr-[2px] mb-[2px] relative"
    style={{
      ...(type === 'default' && { ...defaultStyles }),
      ...(type === 'atom' && { ...atomStyles }),
      ...(type === 'molecule' && { ...moleculeStyles }),
      ...(type === 'organism' && { ...organismStyles }),
      ...(type === 'template' && { ...templateStyles }),
      ...(type === 'page' && { ...pageStyles }),

      borderRadius: 4,
      width: width || 42,
      height: height || 42,
      fontSize: 13,

      ...style,
    }}
  >
    {children}
  </div>
)
