// 1: separators
// 2. bubbles

import { useContext } from 'react'
import { ThemeContext, AppContext } from 'context'

import { FeedTwitter } from './twitter'
import { FeedQuora } from './quora'
import { FeedInstagram } from './instagram'

export const Feed = () => {
  const { selectedComponent, selectedComponentVariant } = useContext(AppContext)
  const { theme } = useContext(ThemeContext)

  console.log(selectedComponent)
  const preferredFeedItemLayout = theme.organisms.feed.preferredFeedItemLayout

  // if (preferredFeedItemLayout === 1) {
  //   return <div>prefered feed item layout: 1</div>
  // }
  // if (preferredFeedItemLayout === 2) {
  //   return <div>prefered feed item layout: 2</div>
  // }
  // if (preferredFeedItemLayout === 3) {
  //   return <div>prefered feed item layout: 3</div>
  // }

  // console.log(selectedComponent)
  if (selectedComponentVariant === 2) {
    return <FeedTwitter itemVar={preferredFeedItemLayout} />
  }

  if (selectedComponentVariant === 3) {
    return <FeedInstagram itemVar={preferredFeedItemLayout} />
  }

  return <FeedQuora itemVar={preferredFeedItemLayout} />
}
