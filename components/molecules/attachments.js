import {
  ArrowNarrowLeftIcon,
  CheckIcon,
  HomeIcon,
  PaperClipIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ThumbUpIcon,
  UserIcon,
} from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

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
          <li
            key={attachment.name}
            className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
          >
            <div className="w-0 flex-1 flex items-center">
              <PaperClipIcon
                className="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-2 flex-1 w-0 truncate">
                {attachment.name}
              </span>
            </div>
            <div className="ml-4 flex-shrink-0">
              <a
                href={attachment.href}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Download
              </a>
            </div>
          </li>
        ))}
      </ul>
    </dd>
  </div>
)
