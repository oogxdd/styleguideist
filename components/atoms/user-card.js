import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Avatar, Heading, Paragraph, Caption } from 'components/atoms'

export const UserCard = ({
  post = defaultPost,
  style,
  variant = 'molecules.blogpost.usercard',
  // variant = 'atoms',
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="mt-6 flex items-center"
      sx={{
        variant,
        ...style,
      }}
    >
      <div className="flex-shrink-0">
        <a>
          <Avatar
            alt="Avatar"
            src={post.authorAvatar}
            sx={{
              variant: `${variant}.avatar`,
              // variant: 'atoms.avatar',
            }}
          />
        </a>
      </div>
      <div className={theme.name === 'yellow' ? '' : 'ml-3'}>
        <Heading
          as="h4"
          className="hover:underline"
          style={{
            variant: `${variant}.heading`,
            // variant: 'atoms.heading.h4',
            // variant: `${variant}.name`,
          }}
        >
          {post.authorName}
        </Heading>
        <Caption
          style={{
            variant: `${variant}.caption`,
            // variant: 'atoms.caption',
            // color: 'text2',
            // variant: `${variant}.caption`,
          }}
        >
          {post.caption}
        </Caption>
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
