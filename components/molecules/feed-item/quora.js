import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  EyeIcon,
  DotsVerticalIcon,
  ThumbUpIcon,
  ChatAltIcon,
  ShareIcon,
  StarIcon,
  CodeIcon,
  FlagIcon,
} from '@heroicons/react/solid'
import { classNames } from 'helpers'

import {
  Card,
  Avatar,
  Text,
  UserCard,
  Heading,
  Paragraph,
  Actions,
} from 'components/atoms'

export const FeedItemQuora = ({ item = defaultItem }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card
      className="bg-white px-4 py-6 shadow sm:p-6 sm:rounded-lg max-w-2xl"
      sx={{ variant: 'molecules.feeditem.card' }}
    >
      <article>
        <div>
          <div className="flex justify-between items-center space-x-3">
            <UserCard variant="molecules.feeditem.usercard" />
            <div className="flex-shrink-0 self-center flex">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="-m-2 p-2 rounded-full flex items-center text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <DotsVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                      sx={{
                        color:
                          theme.molecules.feeditem.actions.iconColor || 'text',
                        opacity: theme.molecules.feeditem.actions.iconColor
                          ? 1
                          : 0.5,
                      }}
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                    sx={{ background: 'bg' }}
                  >
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            )}
                          >
                            <StarIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Add to favorites</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            )}
                          >
                            <CodeIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Embed</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            )}
                          >
                            <FlagIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Report content</span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>

          <Heading
            className="mt-4 text-base font-medium text-gray-900"
            variant="molecules.feeditem.title"
            sx={{ variant: 'molecules.feeditem.title' }}
            as="h2"
          >
            {item.title}
          </Heading>
        </div>
        <Paragraph
          className="mt-2 text-sm text-gray-700 space-y-4 whitespace-pre-line"
          variant="molecules.feeditem.paragraph"
          sx={{ variant: 'molecules.feeditem.paragraph' }}
          as="p"
        >
          {item.body}
        </Paragraph>
        <Actions type="quora" />
      </article>
    </Card>
  )
}

const defaultItem = {
  title: 'What would you have done differently if you ran Jurassic Park?',
  body: `Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

      Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be
    `,
  date: 'December 9 at 11:43 AM',
  author: {
    name: 'Dries Vincent',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  likes: '29',
  replies: '11',
  views: '2.7k',
}
