import { useContext } from 'react'
import { AppContext } from 'context'
import { Checkbox } from '../atoms/checkbox.js'

export const CheckboxGroup = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div className="flex items-start">
        <fieldset>
          <legend className="text-base font-medium text-gray-900">By Email</legend>
          <div className="mt-4 space-y-4">
            <Checkbox label="Check something"/>
            <Checkbox label="Check something else" />
            <Checkbox label="Check last one" />
          </div>
        </fieldset>
    </div>
  )
}
