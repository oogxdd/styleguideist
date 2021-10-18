import { Avatar, Button } from 'components/atoms'

export const UserBlock = () => (
  <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
    <div className="flex items-center space-x-5">
      <div className="flex-shrink-0">
        <div className="relative">
          <Avatar
            lg
            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
            alt=""
          />
          <span
            className="absolute inset-0 shadow-inner rounded-full"
            aria-hidden="true"
          />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Ricardo Cooper</h1>
        <p className="text-sm font-medium text-gray-500">
          Applied for{' '}
          <a href="#" className="text-gray-900">
            Front End Developer
          </a>{' '}
          on <time dateTime="2020-08-25">August 25, 2020</time>
        </p>
      </div>
    </div>
    <div className="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
      <Button secondary>Disqualify</Button>
      <Button primary>Advance to offer</Button>
    </div>
  </div>
)
