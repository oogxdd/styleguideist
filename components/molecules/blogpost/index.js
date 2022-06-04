import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { BlogPostHorizontal } from './horizontal'
import { BlogPostVertical } from './vertical'

export const BlogPost = ({ molecule }) => {
  const { theme } = useContext(ThemeContext)
  const { selectedComponent: comp, selectedComponentVariant } = useContext(
    AppContext,
  )
  const post = theme.molecules.blogpost.props || defaultPost

  // horizontal
  if (selectedComponentVariant === 2) {
    return <BlogPostHorizontal post={post} molecule={molecule} />
  }

  // vertical
  return <BlogPostVertical post={post} molecule={molecule} />
}

const defaultPost = {
  title: 'Generative logo design',
  href: '#',
  label: 'Case Study',
  description:
    'Our instincts were to start with a simple form that could become more complex and technical over time as the project matures and grows. Eventually, the logo design could be informed or driven by data we’ve collected.',
  imageUrl: 'http://dc28c2r6oodom.cloudfront.net/notes/dice-lines.jpg',
  authorName: 'Elliot Jay Stocks',
  authorAvatar: '/img/avatar/elliot-jay-stocks.jpeg',
  caption: 'Feb 12, 2022  ·  11 min read',
}
