import { Textarea as ThemeUITextarea } from 'theme-ui'

export const Textarea = (props) => (
  <textarea
    rows={4}
    {...props}
    sx={{
      borderRadius: 0,
    }}
  />
)
