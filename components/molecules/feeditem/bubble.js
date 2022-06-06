import { useContext } from 'react'
import { ThemeContext } from 'context'

import {
  Card,
  Avatar,
  Text,
  Heading,
  Caption,
  Paragraph,
  Actions,
} from 'components/atoms'

export const FeedItemBubble = ({ item = defaultItem }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className="flex items-start max-w-3xl">
      <Avatar
        className="w-16 h-16"
        src={item.author.imageUrl}
        style={{ variant: 'molecules.feeditem.avatar' }}
        // width="64"
        // width="64"
      />
      <Card
        className="flex-col my-1 mx-3 border rounded-lg p-6"
        sx={{ variant: 'molecules.feeditem.card' }}
      >
        <div id="title" className="flex items-center justify-between">
          <div
            id="details"
            className="flex flex-shrink-0 space-x-1"
            sx={{ color: 'text' }}
          >
            <Text
              className="text-sm font-medium text-gray-900 hover:underline block"
              variant="molecules.feeditem.name"
              sx={{ variant: 'molecules.feeditem.name' }}
            >
              {item.author.name}
            </Text>
            {/*
            <Text
              variant="molecules.feeditem.username"
              sx={{ variant: 'molecules.feeditem.username' }}
            >
              {item.author.username}
            </Text>
            <div className="text-gray-500">·</div>
            <Text
              variant="molecules.feeditem.date"
              sx={{ variant: 'molecules.feeditem.date' }}
            >
              {item.date}
            </Text>
            */}
          </div>
          <div id="options">
            <div className="w-7 hover:text-blue-400 hover:cursor-pointer hover:bg-blue-100 duration-200 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                sx={{
                  stroke: theme.molecules.feeditem.actions.iconColor || 'text',
                  // color: 'text',
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div id="body" className=" pr-2">
          <Paragraph
            variant="molecules.feeditem.paragraph"
            style={{ variant: 'molecules.feeditem.paragraph' }}
          >
            {item.body}
          </Paragraph>
          <Actions type="twitter" />
        </div>
      </Card>
    </div>
  )
}

const Media = () => (
  <div
    id="media"
    className="hover:bg-gray-200 duration-200 rounded-2xl border border-gray-300 cursor-pointer overflow-hidden mt-2"
  >
    <div
      id="image"
      style={{
        paddingTop: '56.25%',
        position: 'relative',
        backgroundImage: 'url("https://placekitten.com/1280/400")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    ></div>
    <div id="body" className="px-3 py-2">
      <div id="title" className="flex-col">
        <div>Cats: The Mystery of the Universe</div>
        <div className="text-gray-500 hidden sm:block">
          Recently, I approached our cat once again meowing at our back door.
        </div>
        <div className="flex items-center">
          <div className="w-4 h-4 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
          </div>
          <div className="text-gray-500 px-1">blog.lloyd.cx</div>
        </div>
      </div>
    </div>
  </div>
)

const defaultItem = {
  title: 'What would you have done differently if you ran Jurassic Park?',
  body: `
    Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

      Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be
    `,
  date: '37s',
  author: {
    name: 'Lewis Lloyd',
    username: '@LloydTao',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    href: '#',
  },
  likes: '29',
  replies: '11',
  views: '2.7k',
}
