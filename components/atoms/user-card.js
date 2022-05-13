import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Avatar } from 'components/atoms'

export const UserCard = ({ post = defaultPost }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="mt-6 flex items-center"
      sx={{
        marginTop: theme.space.base ? theme.space.base.y * 6 : undefined,
        variant: 'atoms.usercard',
      }}
    >
      <div className="flex-shrink-0">
        <a>
          <span
            className="sr-only"
            sx={{
              variant: 'atoms.name',
            }}
          >
            {post.authorName}
          </span>
          <Avatar
            alt="Avatar"
            src={post.authorAvatar}
            sx={{ variant: 'atoms.avatar' }}
          />
        </a>
      </div>
      <div className={theme.name === 'butter' ? '' : 'ml-3'}>
        <p
          className="font-medium text-gray-900"
          // sx={{
          //   fontSize: theme.fontSizes
          //     ? theme.fontSizes.base * 0.875
          //     : undefined,
          //   color: 'text',
          //   variant: 'atoms.name',
          // }}
        >
          <a
            className="hover:underline"
            sx={{
              fontSize: theme.fontSizes
                ? theme.fontSizes.base * 0.875
                : undefined,
              color: 'text',
              variant: 'atoms.name',
            }}
          >
            {post.authorName}
          </a>
        </p>
        <span
          sx={{
            fontSize: theme.fontSizes
              ? theme.fontSizes.base * 0.875
              : undefined,
            color: 'text2',
            variant: 'atoms.caption',
          }}
        >
          {post.caption}
        </span>
      </div>
    </div>
  )
}

const defaultPost = {
  title: 'Improve your customer experience',
  href: '#',
  label: 'Case Study',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  imageUrl: '/img/burn.jpeg',

  authorName: 'Daniela Metz',
  authorAvatar:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  caption: 'Feb 12, 2020  ·  11 min read',

  // imageUrl: '/img/avatar/3.jpeg',
  // imageUrl:
  //   'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
}
