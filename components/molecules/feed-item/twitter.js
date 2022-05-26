import { useContext } from 'react'
import { ThemeContext } from 'context'

import {
  Card,
  Avatar,
  Text,
  UserCard,
  Heading,
  Paragraph,
  Actions,
} from 'components/atoms'

export const FeedItemTwitter = ({ item = defaultItem }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      id="post"
      className="flex hover:bg-gray-100/5 duration-200 cursor-pointer pt-2 pl-3 max-w-3xl"
      sx={{
        marginLeft: theme.molecules.feeditem.card.ml
          ? theme.molecules.feeditem.card.ml
          : undefined,
        marginRight: theme.molecules.feeditem.card.mr
          ? theme.molecules.feeditem.card.mr
          : undefined,
        marginBottom: theme.molecules.feeditem.card.mb
          ? theme.molecules.feeditem.card.mb
          : undefined,
        marginTop: theme.molecules.feeditem.card.mt
          ? theme.molecules.feeditem.card.mt
          : undefined,

        paddingLeft: theme.molecules.feeditem.card.pl
          ? theme.molecules.feeditem.card.pl
          : undefined,
        paddingRight: theme.molecules.feeditem.card.pr
          ? theme.molecules.feeditem.card.pr
          : undefined,
        paddingBottom: theme.molecules.feeditem.card.pb
          ? theme.molecules.feeditem.card.pb
          : undefined,
        paddingTop: theme.molecules.feeditem.card.pt
          ? theme.molecules.feeditem.card.pt
          : undefined,

        width: theme.molecules.feeditem.card.width
          ? theme.molecules.feeditem.card.width
          : undefined,
        height: theme.molecules.feeditem.card.height
          ? theme.molecules.feeditem.card.height
          : undefined,
      }}
    >
      <div className="flex-col my-1 mx-3">
        <div id="title" className="flex items-center justify-between">
          <UserCard />
          <div id="options">
            <div className="w-7 text-gray-400 hover:text-blue-400 hover:bg-blue-100 duration-200 rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
            sx={{ variant: 'molecules.feeditem.paragraph' }}
          >
            {item.body}
          </Paragraph>
          <Actions />
        </div>
      </div>
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

    // imageUrl: 'https://placekitten.com/320/320',
    imageUrl:
      'https://i.iheart.com/v3/catalog/artist/31083712?ops=fit(720%2C720)',

    href: '#',
  },
  likes: '29',
  replies: '11',
  views: '2.7k',
}
