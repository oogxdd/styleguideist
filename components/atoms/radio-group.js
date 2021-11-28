import { Radio, Label } from 'theme-ui'

export const RadioGroup = () => (
  <div className="flex flex-col">
    <Label>
      <Radio name="dark-mode" value="true" defaultChecked={true} />
      Dark Mode
    </Label>
    <Label>
      <Radio name="dark-mode" value="false" />
      Light Mode
    </Label>
  </div>
)
