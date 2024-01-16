import { useContext } from 'react'
import { ThemeContext } from 'context'

import {
  EyeIcon,
  DotsVerticalIcon,
  ThumbUpIcon,
  ChatAltIcon,
  ShareIcon,
  StarIcon,
  CodeIcon,
  FlagIcon,
} from '@heroicons/react/24/solid'

export const Actions = ({ type = 'twitter', item = defaultItem }) => {
  const { theme } = useContext(ThemeContext)

  if (type === 'quora')
    return (
      <div
        className="mt-6 flex justify-between space-x-8"
        sx={{
          // marginTop: theme.space.base ? theme.space.base.y * 6 : undefined,
          variant: 'molecules.feeditem.actions',
        }}
      >
        <div className="flex space-x-6">
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <ThumbUpIcon
                className="h-5 w-5"
                aria-hidden="true"
                sx={{
                  color:
                    theme.molecules.feeditem.actions.activeIconColor ||
                    'primary',
                }}
              />
              <span
                className="font-medium text-gray-900"
                sx={{
                  color: theme.molecules.feeditem.actions.textColor,
                }}
              >
                {item.likes}
              </span>
              <span className="sr-only">likes</span>
            </button>
          </span>
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <ChatAltIcon
                className="h-5 w-5"
                aria-hidden="true"
                sx={{
                  color: theme.molecules.feeditem.actions.iconColor || 'text',
                  opacity: theme.molecules.feeditem.actions.iconColor ? 1 : 0.5,
                }}
              />
              <span
                className="font-medium text-gray-900"
                sx={{
                  color: theme.molecules.feeditem.actions.textColor,
                }}
              >
                {item.replies}
              </span>
              <span className="sr-only">replies</span>
            </button>
          </span>
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <EyeIcon
                className="h-5 w-5"
                aria-hidden="true"
                sx={{
                  color: theme.molecules.feeditem.actions.iconColor || 'text',
                  opacity: theme.molecules.feeditem.actions.iconColor ? 1 : 0.5,
                }}
              />
              <span
                className="font-medium text-gray-900"
                sx={{
                  color: theme.molecules.feeditem.actions.textColor,
                }}
              >
                {item.views}
              </span>
              <span className="sr-only">views</span>
            </button>
          </span>
        </div>
        <div className="flex text-sm">
          <span className="inline-flex items-center text-sm">
            <button
              type="button"
              className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
            >
              <ShareIcon
                className="h-5 w-5"
                aria-hidden="true"
                sx={{
                  color: theme.molecules.feeditem.actions.iconColor || 'text',
                  opacity: theme.molecules.feeditem.actions.iconColor ? 1 : 0.5,
                }}
              />
              <span
                className="font-medium text-gray-900"
                sx={{
                  color: theme.molecules.feeditem.actions.textColor,
                }}
              >
                Share
              </span>
            </button>
          </span>
        </div>
      </div>
    )

  // twitter
  return (
    <div
      id="buttons"
      className="flex justify-between items-center mt-1"
      sx={{
        variant: 'molecules.feeditem.actions',
      }}
    >
      <div className="w-full flex items-center justify-center">
        <div className="w-9 text-gray-400 hover:text-blue-400 hover:cursor-pointer hover:bg-blue-100 duration-200 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            sx={{
              // fill: 'text',
              color: theme.molecules.feeditem.actions.iconColor || 'text',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-9 text-gray-400 hover:text-green-400 hover:cursor-pointer hover:bg-green-100 duration-200 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            sx={{
              // fill: 'text',
              color: theme.molecules.feeditem.actions.iconColor || 'text',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-9 text-gray-400 hover:text-red-400 hover:cursor-pointer hover:bg-red-100 duration-200 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            sx={{
              // fill: 'text',
              color: theme.molecules.feeditem.actions.iconColor || 'text',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <div className="w-9 text-gray-400 hover:text-blue-400 hover:cursor-pointer hover:bg-blue-100 duration-200 rounded-full p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            sx={{
              // fill: 'text',
              color: theme.molecules.feeditem.actions.iconColor || 'text',
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </div>
      </div>
    </div>
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
