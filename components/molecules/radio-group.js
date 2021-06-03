import { useContext } from 'react'
import { AppContext } from 'context'
import { Radio } from '../atoms/radio.js'

export const RadioGroup = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <div className="flex items-start">
      <fieldset className="mt-6">
        <div>
          <legend className="text-base font-medium text-gray-900">Push Notifications</legend>
          <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
        </div>
        <div className="mt-4 space-y-4">
          <Radio label="Everything"/>
          <Radio label="Same as email"/>
          <Radio label="No push notifications"/>
        </div>
      </fieldset>
    </div>
  )
}
