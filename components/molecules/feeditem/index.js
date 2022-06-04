import { useContext } from 'react'
import { AppContext } from 'context'

import { FeedItemTwitter } from './twitter'
import { FeedItemQuora } from './quora'
import { FeedItemBubble } from './bubble'

export const FeedItem = ({ itemVar }) => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)

  const variant = itemVar || selectedComponentVariant

  // 1 - twitter
  // 2 - quora
  // 3 - bubble

  if (variant === 1) {
    return <FeedItemTwitter />
  }

  if (variant === 2) {
    return <FeedItemQuora />
  }

  if (variant === 3) {
    return <FeedItemBubble />
  }

  return <FeedItemTwitter />
}
