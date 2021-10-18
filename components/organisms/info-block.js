import { Avatar, Card } from 'components/atoms'
import {
  Breadcrumbs,
  Navigation,
  Field,
  Attachments,
} from 'components/molecules'
import { Comments, Timeline, UserBlock } from 'components/organisms'

const fields = [
  {
    label: 'Application for',
    value: 'Backend Developer',
  },
  {
    label: 'Email address',
    value: 'ricardocooper@example.com',
  },
  {
    label: 'Salary expectation',
    value: '$120,000',
  },
  {
    label: 'Phone',
    value: '+1 555-555-5555',
  },
]

export const InfoBlock = () => (
  <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
    <div className="space-y-6 lg:col-start-1 lg:col-span-2">
      <section aria-labelledby="applicant-information-title">
        <Card>
          <div className="px-4 py-5 sm:px-6">
            <h2
              id="applicant-information-title"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Applicant Information
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              {fields.map((field) => (
                <Field label={field.label} value={field.value} />
              ))}
              <div className="sm:col-span-2">
                <dt className="text-sm font-medium text-gray-500">About</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim
                  incididunt cillum culpa consequat. Excepteur qui ipsum aliquip
                  consequat sint. Sit id mollit nulla mollit nostrud in ea
                  officia proident. Irure nostrud pariatur mollit ad adipisicing
                  reprehenderit deserunt qui eu.
                </dd>
              </div>
              {/*
                    <Attachments />
                    */}
            </dl>
          </div>
          <div>
            <a
              href="#"
              className="block bg-gray-50 text-sm font-medium text-gray-500 text-center px-4 py-4 hover:text-gray-700 sm:rounded-b-lg"
            >
              Read full application
            </a>
          </div>
        </Card>
      </section>

      {/*
        <Comments />
      */}
    </div>

    {/*
          <Timeline />
          */}
  </div>
)
