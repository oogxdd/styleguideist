/** @jsxImportSource theme-ui */
import { useContext } from 'react'
import { AppContext } from 'context'
import { Card } from 'components/atoms'

export const BlogPost = ({ post = defaultPost }) => {
  const { theme, setTheme } = useContext(AppContext)

  return (
    <Card
      className="flex flex-col overflow-hidden max-w-lg h-full w-full"
      sx={{
        // variant: 'molecules.blogpost.container',
        variant: 'atoms.card',
      }}
    >
      <div className="flex-shrink-0 flex-col items-center">
        <img
          className="h-48 w-full object-cover m-auto"
          src={post.imageUrl}
          alt=""
          sx={{
            variant: 'atoms.image',
          }}
        />
      </div>
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p
            className="text-sm font-medium"
            sx={{
              color: 'primary',
              variant: 'atoms.label',
            }}
          >
            <a href={post.category.href} className="hover:underline">
              {post.category.name}
            </a>
          </p>
          <a href={post.href} className="block mt-2">
            <p
              className="text-xl font-semibold"
              sx={{
                color: 'text',
                variant: 'atoms.heading',
              }}
            >
              {post.title}
            </p>
            <p
              className="mt-3 text-base"
              sx={{
                color: 'text2',
                variant: 'atoms.paragraph',
              }}
            >
              {post.description}
            </p>
          </a>
        </div>
        <div
          className="mt-6 flex items-center"
          sx={{ variant: 'molecules.usercard' }}
        >
          <div className="flex-shrink-0">
            <a href={post.author.href}>
              <span className="sr-only">{post.author.name}</span>
              <img
                className="h-10 w-10 rounded-full"
                src={post.author.imageUrl}
                alt=""
                sx={{ variant: 'atoms.avatar' }}
              />
            </a>
          </div>
          <div className="ml-3">
            <p
              className="text-sm font-medium text-gray-900"
              sx={{ color: 'text', variant: 'atoms.name' }}
            >
              <a href={post.author.href} className="hover:underline">
                {post.author.name}
              </a>
            </p>
            <div
              className="flex space-x-1 text-sm"
              sx={{ color: 'text2', variant: 'atoms.caption' }}
            >
              <time dateTime={post.datetime}>{post.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{post.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

// import { Rnd } from 'react-rnd'
//     <div className="relative">
//       <Rnd
//         default={{
//           width: theme.molecules.blogpost.container.width,
//           height: theme.molecules.blogpost.container.height,
//         }}
//         minWidth={200}
//         minHeight={100}
//         bounds="window"
//         disableDragging
//         onResizeStop={(e, direction, ref, delta, position) => {
//           setTheme((theme) => {
//             theme.molecules.blogpost.container.width = ref.style.width
//             theme.molecules.blogpost.container.height = ref.style.height
//           })
//         }}
//       >
//       </Rnd>
//     </div>

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
