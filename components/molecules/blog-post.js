import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Card, Image, Label, Title, Paragraph } from 'components/atoms'
import { UserCard } from 'components/molecules'

import { pxToNum, numToPx } from 'helpers'

export const BlogPost = ({ post = defaultPost }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full"
      sx={{
        px: theme.space.base ? theme.space.base.x * 6.5 : undefined,
        py: theme.space.base ? theme.space.base.y * 6.5 : undefined,
        variant: theme.molecules.blogpost.container
          ? 'molecules.blogpost.container'
          : undefined,
        borderRadius: pxToNum(theme.radii[2]) * 3,
      }}
    >
      <Image
        src={post.imageUrl}
        style={{ borderRadius: pxToNum(theme.radii[2]) * 2 }}
      />
      <div
        className="flex-1 p-6 flex flex-col justify-between"
        sx={{
          py: theme.space.base ? theme.space.base.y * 6 : undefined,
        }}
      >
        <div className="flex-1">
          <Label>{post.category.name}</Label>
          <a
            href={post.href}
            className="block"
            sx={{
              marginTop: theme.space.base ? theme.space.base.y * 2 : undefined,
            }}
          >
            <Title>{post.title}</Title>
            <Paragraph
              style={{
                marginTop: theme.space.base
                  ? theme.space.base.y * 3
                  : undefined,
              }}
            >
              {post.description}
            </Paragraph>
          </a>
        </div>
        <UserCard post={post} />
      </div>
    </Card>
  )
}

const defaultPost = {
  title: 'Improve your customer experience',
  href: '#',
  category: { name: 'Case Study', href: '#' },
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  imageUrl: '/img/burn.jpeg',
  readingTime: '11 min',
  author: {
    name: 'Daniela Metz',
    href: '#',
    imageUrl: '/img/avatar/3.jpeg',
  },
}
