import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { FeedItemTwitter } from './twitter'
import { FeedItemQuora } from './quora'
import { FeedItemInstagram } from './instagram'
import { FeedItemBubble } from './4'

export const FeedItem = ({ itemVar }) => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  const variant = itemVar || selectedComponentVariant

  if (variant === 2) {
    return <FeedItemTwitter />
  }

  // if (variant === 3) {
  //   return <FeedItemInstagram />
  // }

  if (variant === 3) {
    return <FeedItemBubble />
  }

  return <FeedItemQuora />
}
