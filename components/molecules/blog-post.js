import { useContext } from 'react'
import { ThemeContext } from 'context'

import { Card, Image, Label, Title, Paragraph } from 'components/atoms'
import { UserCard } from 'components/molecules'

export const BlogPost = ({ post = defaultPost }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Card
      className="flex flex-col overflow-hidden h-full w-full"
      sx={
        theme.molecules.blogpost.container
          ? {
              variant: 'molecules.blogpost.container',
            }
          : null
      }
    >
      <Image src={post.imageUrl} />
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Label>{post.category.name}</Label>
          <a href={post.href} className="block mt-2">
            <Title>{post.title}</Title>
            <Paragraph>{post.description}</Paragraph>
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
  imageUrl:
    'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  readingTime: '11 min',
  author: {
    name: 'Daniela Metz',
    href: '#',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
}
