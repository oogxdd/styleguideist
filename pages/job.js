import { Avatar } from 'components/atoms'
import {
  Breadcrumbs,
  Navigation,
  Field,
  Attachments,
} from 'components/molecules'
import {
  Comments,
  Timeline,
  UserBlock,
  InformationBlock,
} from 'components/organisms'

import { Fragment } from 'react'
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

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

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

export default function Dashboard() {
  return (
    <div className="relative min-h-screen bg-gray-100">
      {/*
      <header className="bg-white shadow">
        <Navigation />
        <Breadcrumbs />
      </header>
      */}

      <main className="py-10">
        {/*
        <UserBlock />
        */}

        {/*
        <InformationBlock />
        */}
      </main>
    </div>
  )
}
