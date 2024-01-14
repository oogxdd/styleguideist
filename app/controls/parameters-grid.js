import {
  BorderPresets,
  SpacingPresets,
  ShadowPresets,
  ColorPresets,
  FontPresets,
} from './parameters'

// const shadowOptions = [
//   { label: 'Small', value: 'sm' },
//   { label: 'Medium', value: 'md' },
//   { label: 'Large', value: 'lg' },
// ]
// const colorOptions = [
//   { label: 'Red', value: 'red' },
//   { label: 'Green', value: 'green' },
//   { label: 'Blue', value: 'blue' },
// ]
// const fontOptions = [
//   { label: 'Sans', value: 'sans' },
//   { label: 'Serif', value: 'serif' },
//   { label: 'Mono', value: 'mono' },
// ]

export const ParametersGrid = () => {
  return (
    <div className="w-full">
      <div className="border">
        <BorderPresets />
        <SpacingPresets />
        <ShadowPresets />
        <ColorPresets />
        <FontPresets />
      </div>

      {/*
      <Row isLast={false}>
        {shadowOptions.map((option, index) => (
          <Cell key={option.value} isLast={index === shadowOptions.length - 1}>
            {option.label}
          </Cell>
        ))}
      </Row>

      <Row isLast={false}>
        {colorOptions.map((option, index) => (
          <Cell key={option.value} isLast={index === colorOptions.length - 1}>
            {option.label}
          </Cell>
        ))}
      </Row>

      <Row isLast={true}>
        {fontOptions.map((option, index) => (
          <Cell key={option.value} isLast={index === fontOptions.length - 1}>
            {option.label}
          </Cell>
        ))}
      </Row>
      */}

      {/*
      <Row isLast={false}>
        {responsivenessOptions.map((option, index) => (
          <Cell
            key={option.value}
            isLast={index === responsivenessOptions.length - 1}
          >
            {option.label}
          </Cell>
        ))}
      </Row>

      <Row isLast>
        {modeOptions.map((option, index) => (
          <Cell key={option.value} isLast={index === modeOptions.length - 1}>
            {option.label}
          </Cell>
        ))}
      </Row>
      */}
    </div>
  )
  // return (
  //   <GridWrapper>
  //     {/* 5 border options */}
  //     <Row>
  //       {borderOptions.map((option, index) => (
  //         <Cell key={`border-${option.value}`}>{index}</Cell>
  //       ))}
  //     </Row>

  //     {/* 5 shadow options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>

  //     {/* 5 spacing options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>

  //     {/* 3/4/5/8 color options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>

  //     {/* 3 font options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>

  //     {/* 4 responsiveness options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>

  //     {/* 2 dark/light modes options */}
  //     <Row>
  //       1
  //       <span />
  //     </Row>
  //   </GridWrapper>
  // )
}

const Cell = ({ children, isLast }) => (
  <div
    className={`p-2 ${
      !isLast ? 'border-r' : ''
    } w-1/3 flex items-center justify-center`}
  >
    {children}
  </div>
)

const Row = ({ children, isLast }) => (
  <div className={`flex ${!isLast ? 'border-b' : ''}`}>{children}</div>
)

export default ParametersGrid
