/** @jsxImportSource theme-ui */
import { Themed, Link } from 'theme-ui'

const posts = [
  {
    id: 1,
    slug: '/ok',
    title: 'A Conceptual Look at Theming',
    date: '2019-08-10',
    excerpt:
      'The word theme can mean a lot of different things and invoke a lot of different interpretations, which can be both a blessing and a curse.',
  },
  {
    id: 2,
    slug: '/ok',
    title: 'Code Literacy',
    date: '2019-07-25',
    excerpt: `Ah yes, everyone's favorite question: should designers code? As much as I'd love to pontificate on the matter, I think the framing of this question is fundamentally wrong.`,
  },
  {
    id: 3,
    slug: '/ok',
    title: 'Portability',
    date: '2019-07-23',
    excerpt:
      'In software development, formats help ensure that content and data are portable and can be used in many different applications.',
  },
  {
    id: 4,
    slug: '/ok',
    title: 'Themeability',
    date: '2019-07-21',
    excerpt: `I've been interested in the idea of constraint-based design for a while. By constraining the solution space for a particular problem, new and novel ideas can emerge beyond the initial problem's scope.`,
  },
]

export const BlogList = () => (
  <ul
    sx={{
      listStyle: 'none',
      m: 0,
      px: 3,
      py: 4,
    }}
  >
    {posts.map((post) => (
      <li
        key={post.id}
        sx={{
          mb: 4,
        }}
      >
        <Themed.h2
          sx={{
            m: 0,
          }}
        >
          <Link
            to={post.slug}
            sx={{
              color: 'inherit',
              textDecoration: 'none',
              ':hover,:focus': {
                color: 'primary',
                textDecoration: 'underline',
              },
            }}
          >
            {post.title}
          </Link>
        </Themed.h2>
        <small sx={{ fontWeight: 'bold' }}>{post.date}</small>
        <Themed.p>{post.excerpt}</Themed.p>
      </li>
    ))}
  </ul>
)
