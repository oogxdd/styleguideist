import { File } from 'components/molecules'

const attachments = [
  { name: 'resume_front_end_developer.pdf', href: '#' },
  { name: 'coverletter_front_end_developer.pdf', href: '#' },
]

export const Attachments = () => (
  <div className="sm:col-span-2">
    <dt className="text-sm font-medium text-gray-500">Attachments</dt>
    <dd className="mt-1 text-sm text-gray-900">
      <ul
        role="list"
        className="border border-gray-200 rounded-md divide-y divide-gray-200"
      >
        {attachments.map((attachment) => (
          <File attachment={attachment} key={attachment.name} />
        ))}
      </ul>
    </dd>
  </div>
)
