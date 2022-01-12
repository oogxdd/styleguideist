/** @jsxImportSource theme-ui */
import { Card } from 'components/atoms'
// <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
// </div>

export const BlogPost = ({ post = defaultPost }) => (
  <Card className="flex flex-col overflow-hidden max-w-lg">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
    </div>
    <div className="flex-1 p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium" sx={{ color: 'primary' }}>
          <a href={post.category.href} className="hover:underline">
            {post.category.name}
          </a>
        </p>
        <a href={post.href} className="block mt-2">
          <p className="text-xl font-semibold" sx={{ color: 'text' }}>
            {post.title}
          </p>
          <p className="mt-3 text-base" sx={{ color: 'text2' }}>
            {post.description}
          </p>
        </a>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex-shrink-0">
          <a href={post.author.href}>
            <span className="sr-only">{post.author.name}</span>
            <img
              className="h-10 w-10 rounded-full"
              src={post.author.imageUrl}
              alt=""
            />
          </a>
        </div>
        <div className="ml-3">
          <p
            className="text-sm font-medium text-gray-900"
            sx={{ color: 'text' }}
          >
            <a href={post.author.href} className="hover:underline">
              {post.author.name}
            </a>
          </p>
          <div className="flex space-x-1 text-sm" sx={{ color: 'text2' }}>
            <time dateTime={post.datetime}>{post.date}</time>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readingTime} read</span>
          </div>
        </div>
      </div>
    </div>
  </Card>
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
