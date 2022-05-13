// import { Card, Avatar, Text } from 'components/atoms'
import {
  DotsHorizontalIcon,
  HeartIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  ChatAltIcon,
  EmojiHappyIcon,
} from '@heroicons/react/outline'

import { Card, Avatar, Text } from 'components/atoms'

export const FeedItemInstagram = ({ item = defaultItem }) => {
  return (
    <div className="bg-white my-7 border rounded-sm max-w-md">
      <div className="flex items-center p-4">
        <div className="avatar mr-3">
          <div className="rounded-full w-10 h-10">
            <Avatar
              src={item.author.imageUrl}
              className="rounded-full"
              variant="molecules.feeditem.avatar"
              sx={{ variant: 'molecules.feeditem.avatar' }}
            />
          </div>
        </div>
        <Text
          className="flex-1  text-sm font-semibold"
          variant="molecules.feeditem.username"
          sx={{ variant: 'molecules.feeditem.username' }}
        >
          {item.author.name}
        </Text>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img
        className=" w-full"
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        alt=""
      />
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-3 items-center">
          <HeartIcon className="h-6" />
          <ChatAltIcon className="h-6" />
          <PaperAirplaneIcon className="h-6 rotate-[60deg] mb-1" />
        </div>
        <BookmarkIcon className="h-6" />
      </div>
      <p className="px-4 mt-4 truncate">
        <p className="font-semibold mb-1 text-sm">23 likes</p>
        <span className="font-semibold mr-1 text-sm">ckmobile</span>Hello, today
        is today
      </p>
      <p className="px-4 text-sm mb-1 text-gray-400 cursor-pointer ">
        View all 14 comments
      </p>
      <div className="px-4 mt-2 text-gray-400 text-xs mb-4">2 DAYS AGO</div>
      <hr />
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7 mr-2" />
        <input
          type="text"
          className="border-none flex-1 focus:ring-0 outline-none"
          placeholder="Add a comment..."
        />
        <button type="submit" className="font-semibold text-blue-400">
          Post
        </button>
      </form>
    </div>
  )
}

const Comments = () => (
  <>
    <div className="px-4   flex justify-between">
      <div>
        <span className="font-semibold mr-1 text-sm">Alan</span>That's great??
      </div>
      <HeartIcon className="h-4" />
    </div>
    <div className="px-4  truncate flex justify-between">
      <div>
        <span className="font-semibold mr-1 text-sm">Alan</span>Thank you??
      </div>
      <HeartIcon className="h-4" />
    </div>
  </>
)

const defaultItem = {
  title: 'What would you have done differently if you ran Jurassic Park?',
  body: `
    Jurassic Park was an incredible idea and a magnificent feat of engineering, but poor protocols and a disregard for human safety killed what could have otherwise been one of the best businesses of our generation.

      Ultimately, I think that if you wanted to run the park successfully and keep visitors safe, the most important thing to prioritize would be
    `,
  date: 'December 9 at 11:43 AM',
  author: {
    name: 'Dries Vincent',
    imageUrl: 'https://reqres.in/img/faces/8-image.jpg',
    href: '#',
  },
  likes: '29',
  replies: '11',
  views: '2.7k',
}
