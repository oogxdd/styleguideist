import { useContext } from 'react'
import { AppContext } from 'context'

import { FeedItemTwitter } from './twitter'
import { FeedItemQuora } from './quora'
import { FeedItemBubble } from './bubble'

export const FeedItem = ({ itemVar }) => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)

  const variant = itemVar || selectedComponentVariant

  if (variant === 2) {
    return <FeedItemTwitter />
  }

  if (variant === 3) {
    return <FeedItemBubble />
  }

  return <FeedItemQuora />
}
