import { Select as ThemeUISelect } from 'theme-ui'

export const Select = () => (
  <div className="w-64">
    <ThemeUISelect defaultValue="Hello">
      <option>Hello</option>
      <option>Hi</option>
      <option>Beep</option>
      <option>Boop</option>
    </ThemeUISelect>
  </div>
)
