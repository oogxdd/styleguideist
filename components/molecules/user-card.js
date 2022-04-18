import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Avatar } from 'components/atoms'

export const UserCard = ({ post }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className="mt-6 flex items-center"
      sx={{
        variant: 'molecules.usercard',
        marginTop: theme.space.base ? theme.space.base.y * 6 : undefined,
      }}
    >
      <div className="flex-shrink-0">
        <a href={post.author.href}>
          <span className="sr-only">{post.author.name}</span>
          <Avatar
            alt="Avatar"
            src={post.author.imageUrl}
            sx={{ variant: 'atoms.avatar' }}
          />
        </a>
      </div>
      <div className="ml-3">
        <p
          className="font-medium text-gray-900"
          sx={{
            fontSize: theme.fontSizes
              ? theme.fontSizes.base * 0.875
              : undefined,
            color: 'text',
            variant: 'atoms.name',
          }}
        >
          <a href={post.author.href} className="hover:underline">
            {post.author.name}
          </a>
        </p>
        <div
          className="flex space-x-1"
          sx={{
            fontSize: theme.fontSizes
              ? theme.fontSizes.base * 0.875
              : undefined,
            color: 'text2',
            variant: 'atoms.caption',
          }}
        >
          <time dateTime={post.datetime}>{post.date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{post.readingTime} read</span>
        </div>
      </div>
    </div>
  )
}
