import { Alert as ThemeUIAlert, Close } from 'theme-ui'

export const Alert = () => (
  <ThemeUIAlert>
    Beep boop, this is an alert!
    <Close ml="auto" mr={-2} />
  </ThemeUIAlert>
)
