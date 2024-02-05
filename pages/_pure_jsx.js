import { jsx as _jsx } from 'react/jsx-runtime'
import { jsxs as _jsxs } from 'react/jsx-runtime'
const Button = ({ children }) =>
  /*#__PURE__*/ _jsx('button', {
    children: children,
  })
const Input = () => /*#__PURE__*/ _jsx('input', {})
const Form = () =>
  /*#__PURE__*/ _jsxs('div', {
    className: 'flex flex-col',
    children: [
      /*#__PURE__*/ _jsx(Input, {}),
      /*#__PURE__*/ _jsx(Button, {
        children: 'Send',
      }),
    ],
  })

const PureJSXTest = () => (
  <div>
    <Form />
  </div>
)

export default PureJSXTest
