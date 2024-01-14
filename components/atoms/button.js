import { Button as ThemeUIButton } from 'theme-ui'

export const Button = ({
  children = 'Submit',
  variant = 'atoms.button',
  ...props
}) => (
  <ThemeUIButton
    className="select-none"
    sx={{
      shadow: 'shadow',
      border: 'inherit',
      variant,
    }}
    {...props}
  >
    {children}
  </ThemeUIButton>
)
// <ThemeUIButton
//   className="select-none"
//   sx={{
//     shadow: 'shadow',
//     border: 'inherit',
//     variant,
//   }}
//   {...props}
// >
//   {children}
// </ThemeUIButton>
