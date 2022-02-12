import * as Atoms from 'components/atoms'
import * as Molecules from 'components/molecules'

export const BlogPost = ({ post = defaultPost }) => (
  <Atoms.Card
    className="flex flex-col overflow-hidden h-full w-full"
    sx={{ variant: 'molecules.blogpost.container' }}
  >
    <Atoms.Image src={post.imageUrl} />
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <Atoms.Label>{post.category.name}</Atoms.Label>
        <a href={post.href} className="block mt-2">
          <Atoms.Title>{post.title}</Atoms.Title>
          <Atoms.Paragraph>{post.description}</Atoms.Paragraph>
        </a>
      </div>
      <Molecules.UserCard post={post} />
    </div>
  </Atoms.Card>
)

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
