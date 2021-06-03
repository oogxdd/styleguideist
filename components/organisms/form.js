import { useContext } from 'react'
import { AppContext } from 'context'
import { CheckboxGroup } from '../molecules/checkbox-group.js'
import { RadioGroup } from '../molecules/radio-group.js'
import { Button } from '../atoms/button.js'
import { Input } from '../atoms/input.js'
import {Textarea} from '../atoms/textarea.js'
import {Select} from '../atoms/select.js'

export const Form = () => {
  const { color, spacing, radius, style } = useContext(AppContext)

  return (
    <form className="space-y-8 divide-y divide-gray-200 h-screen py-10">
      <div className="space-y-8 divide-y divide-gray-200">
        <div>
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className={`mt-1 flex rounded-${radius} shadow-sm`}>
                <span className={`inline-flex items-center px-3 rounded-l-${radius} border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm`}>
                  workcation.com/
                </span>
                <Input className={`rounded-r-${radius}`}/>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <Textarea />
              </div>
              <p className="mt-2 text-sm text-gray-500">Write a few sentences about yourself.</p>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex items-center">
                <span className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-5">
                  <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </span>
                <Button name="Change"/>
              </div>
            </div>

            <div className="sm:col-span-6">
              <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700">
                Cover photo
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-${radius}`}>
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className={`relative cursor-pointer bg-white rounded-${radius} font-medium text-${color}-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500`}
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
            <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <div className="sm:col-span-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <Select />

            <div className="sm:col-span-6">
              <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">
                Street address
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State / Province
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                ZIP / Postal
              </label>
              <div className="mt-1">
                <Input />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">Notifications</h3>
            <p className="mt-1 text-sm text-gray-500">
              We'll always let you know about important changes, but you pick what else you want to hear about.
            </p>
          </div>
          <div className="mt-6">
            <CheckboxGroup />
            <RadioGroup />
          </div>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex justify-end">
          <Button name="Cancel" />
          <Button name="Save" />
        </div>
      </div>
    </form>
  )
}
